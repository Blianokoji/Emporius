import React from "react";
import MediaFeature from "./MediaFeature";
import embiotin2 from "../assets/embiotin_2.webp";

const EmbiotinSection: React.FC = () => {
  return (
    <MediaFeature
      id="embiotin"
      imageSrc={embiotin2}
      imageAlt="Embiotin packaging and product image"
      title="EMBIOTIN™: Six-Pillar Approach to Hair Revitalization"
      eyebrow="Product Spotlight"
      imageOn="left"
      imageFit="contain"
      sectionClassName="bg-cyan-50"
      childrenRight={
        <>
          <p className="text-slate-700 leading-relaxed">
            In the landscape of hair health supplements, one ingredient has achieved unparalleled recognition: Biotin. Its
            reputation as cornerstone nutrient for hair is well-deserved, forming an essential part of the keratin production
            process. Embiotin honours this legacy by including a potent, therapeutic dose of the vital vitamin. However, the
            science of hair revitalization has evolved, recognizing that a single pillar, no matter how strong, cannot support the
            entire structure of hair health.
          </p>

          <div>
            <h3 className="text-2xl font-bold text-cyan-700 mb-2">The Embiotin philosophy</h3>
            <p className="text-slate-700 leading-relaxed">
              The Embiotin formula is designed around a core philosophy of comprehensive care, targeting the three critical
              domains of hair vitality:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-slate-700">
              <li>
                <span className="font-semibold">Build:</span> Providing the essential raw materials necessary for construction of
                strong keratin structures and rapid cellular division that fuels and Anagen growth phase
              </li>
              <li>
                <span className="font-semibold">Protect:</span> Deploying a powerful antioxidant shield to defend the delicate hair
                follicle cells from damaging effects of oxidative stress, preserving their function and extending the growth cycle.
              </li>
              <li>
                <span className="font-semibold">Nourish:</span> Delivering key nutrients that support the health of the scalp,
                improve moisture retention within the hair shaft, and ensure optimal blood flow to the follicle.
              </li>
            </ul>
          </div>
        </>
      }
      childrenBelow={
        <>
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-cyan-700 mb-3">EMBIOTIN™: Formula at a Glance</h3>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-cyan-100">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Ingredient</th>
                    <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Dosage per Tablet</th>
                    <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Primary Role in Hair Revitalization</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cyan-200">
                  <tr className="odd:bg-white even:bg-cyan-50/10">
                    <td className="px-4 py-3 text-slate-800">Calcium Pantothenate</td>
                    <td className="px-4 py-3 text-slate-800">100mg</td>
                    <td className="px-4 py-3 text-slate-700">The Follicle Nourisher</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-cyan-50/10">
                    <td className="px-4 py-3 text-slate-800">N-Acetylcysteine (NAC)</td>
                    <td className="px-4 py-3 text-slate-800">50mg</td>
                    <td className="px-4 py-3 text-slate-700">The Cellular Guardian</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-cyan-50/10">
                    <td className="px-4 py-3 text-slate-800">Zinc Oxide (as Elemental Zinc)</td>
                    <td className="px-4 py-3 text-slate-800">22.5mg</td>
                    <td className="px-4 py-3 text-slate-700">The Growth & Repair Catalyst</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-cyan-50/10">
                    <td className="px-4 py-3 text-slate-800">Biotin</td>
                    <td className="px-4 py-3 text-slate-800">10mg (10,000mcg)</td>
                    <td className="px-4 py-3 text-slate-700">The Keratin Architect</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-cyan-50/10">
                    <td className="px-4 py-3 text-slate-800">Cupric Oxide (as Elemental Copper)</td>
                    <td className="px-4 py-3 text-slate-800">3mg</td>
                    <td className="px-4 py-3 text-slate-700">The Structural & Pigment Anchor</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-cyan-50/10">
                    <td className="px-4 py-3 text-slate-800">Sodium Selenite (as Elemental Selenium)</td>
                    <td className="px-4 py-3 text-slate-800">65mcg</td>
                    <td className="px-4 py-3 text-slate-700">The Scalp Health Regulator</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-cyan-700 mb-2">EMBIOTIN™: Purity and Potency</h3>
            <p className="text-slate-700 leading-relaxed">
              The Embiotin standard dictates the use of only high-grade, premium raw materials to ensure maximum
              bioavailability and effectiveness. Embiotin contains precisely the ingredients listed on the label, in the exact
              therapeutic dosages specified in the formulation, without deviation.
            </p>
          </div>
        </>
      }
    />
  );
};

export default EmbiotinSection;
