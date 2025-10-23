import React, { useRef, useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { gsap } from 'gsap';

interface PixelTransitionProps {
  firstContent: React.ReactNode;
  secondContent: React.ReactNode;
  gridSize?: number;
  pixelColor?: string;
  animationStepDuration?: number;
  className?: string;
  style?: CSSProperties;
  aspectRatio?: string;
  fillHeight?: boolean;
  rounded?: boolean;
  bordered?: boolean;
  active?: boolean;
  onActiveChange?: (active: boolean) => void;
}

const PixelTransition: React.FC<PixelTransitionProps> = ({
  firstContent,
  secondContent,
  gridSize = 7,
  pixelColor = 'currentColor',
  animationStepDuration = 0.3,
  className = '',
  style = {},
  aspectRatio = '100%',
  fillHeight = false,
  rounded = true,
  bordered = true,
  active,
  onActiveChange
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pixelGridRef = useRef<HTMLDivElement | null>(null);
  const activeRef = useRef<HTMLDivElement | null>(null);
  const delayedCallRef = useRef<gsap.core.Tween | null>(null);

  const [internalActive, setInternalActive] = useState<boolean>(false);
  const isControlled = typeof active === 'boolean';
  const isActive = isControlled ? (active as boolean) : internalActive;

  const isTouchDevice =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches);

  useEffect(() => {
    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;

    pixelGridEl.innerHTML = '';

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement('div');
  pixel.classList.add('pixelated-image-card__pixel');
  pixel.classList.add('absolute');
  pixel.style.backgroundColor = pixelColor;
  // start hidden so the underlying firstContent (image) is visible on load
  pixel.style.display = 'none';

        const size = 100 / gridSize;
        pixel.style.width = `${size}%`;
        pixel.style.height = `${size}%`;
        pixel.style.left = `${col * size}%`;
        pixel.style.top = `${row * size}%`;

        pixelGridEl.appendChild(pixel);
      }
    }
  }, [gridSize, pixelColor]);

  const animatePixels = (activate: boolean): void => {
    if (!isControlled) setInternalActive(activate);

    const pixelGridEl = pixelGridRef.current;
    const activeEl = activeRef.current;
    if (!pixelGridEl || !activeEl) return;

    const pixels = pixelGridEl.querySelectorAll<HTMLDivElement>('.pixelated-image-card__pixel');
    if (!pixels.length) return;

    gsap.killTweensOf(pixels);
    if (delayedCallRef.current) {
      delayedCallRef.current.kill();
    }

    gsap.set(pixels, { display: 'none' });

    const totalPixels = pixels.length;
    const staggerDuration = animationStepDuration / totalPixels;

    gsap.to(pixels, {
      display: 'block',
      duration: 0,
      stagger: {
        each: staggerDuration,
        from: 'random'
      }
    });

    delayedCallRef.current = gsap.delayedCall(animationStepDuration, () => {
      if (activeEl) {
        activeEl.style.display = activate ? 'block' : 'none';
        activeEl.style.pointerEvents = activate ? 'auto' : 'none';
      }
    });

    gsap.to(pixels, {
      display: 'none',
      duration: 0,
      delay: animationStepDuration,
      stagger: {
        each: staggerDuration,
        from: 'random'
      }
    });
  };

  const handleMouseEnter = (): void => {
    if (!isTouchDevice) {
      if (isControlled) onActiveChange?.(true);
      else if (!isActive) animatePixels(true);
    }
  };
  const handleMouseLeave = (): void => {
    if (!isTouchDevice) {
      if (isControlled) onActiveChange?.(false);
      else if (isActive) animatePixels(false);
    }
  };
  const handleClick = (): void => {
    // keep click for non-touch fallback only
    if (!isTouchDevice) {
      if (isControlled) onActiveChange?.(!isActive);
      else animatePixels(!isActive);
    }
  };

  // keyboard focus handlers
  const handleFocus = (): void => {
    if (!isTouchDevice) handleMouseEnter();
  };
  const handleBlur = (): void => {
    if (!isTouchDevice) handleMouseLeave();
  };

  // Animate when the controlled/derived active state changes
  useEffect(() => {
    animatePixels(isActive);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  return (
    <div
      ref={containerRef}
      className={`
        ${className}
        relative
        group
        overflow-hidden
        ${rounded ? 'rounded-2xl' : ''}
        ${bordered ? 'border-2 border-white/10' : ''}
        ${fillHeight ? 'h-full' : ''}
      `}
      data-active={isActive ? 'true' : 'false'}
      style={style}
      onMouseEnter={!isTouchDevice ? handleMouseEnter : undefined}
      onMouseLeave={!isTouchDevice ? handleMouseLeave : undefined}
      onClick={!isTouchDevice ? handleClick : undefined}
      onPointerDown={(e) => {
        // toggle immediately on first touch contact
        if ((e as any).pointerType === 'touch') {
          if (isControlled) onActiveChange?.(!isActive);
          else animatePixels(!isActive);
        }
      }}
      onFocus={!isTouchDevice ? handleFocus : undefined}
      onBlur={!isTouchDevice ? handleBlur : undefined}
      tabIndex={0}
      role="button"
    >
  {!fillHeight && <div style={{ paddingTop: aspectRatio }} />}

      <div className="absolute inset-0 w-full h-full">{firstContent}</div>

      <div ref={activeRef} className="absolute inset-0 w-full h-full z-[2]" style={{ display: 'none' }}>
        {secondContent}
      </div>

      <div ref={pixelGridRef} className="absolute inset-0 w-full h-full pointer-events-none z-[3]" />
    </div>
  );
};

export default PixelTransition;
