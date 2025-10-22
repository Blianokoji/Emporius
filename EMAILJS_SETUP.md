# EmailJS Setup Guide

Follow these steps to configure email functionality for the contact form:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

## Step 2: Add Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the prompts to connect your email account (`blesseneby007@gmail.com`)
5. Copy the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this **EXACT** template structure:

**Subject Line:**
```
New Contact Form: {{subject}}
```

**Email Body:**
```
You have received a new message from the Emporis Health Care website contact form.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This message was sent from the Emporis Health Care contact form.
Please reply to: {{from_email}}
```

**Important Variables to Map:**
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email address  
- `{{subject}}` - Message subject
- `{{message}}` - Message content

4. Copy the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abcdefghijklmnop`)

## Step 5: Update Contact.tsx
Replace these lines in `src/components/Contact.tsx`:

```typescript
const serviceId = "YOUR_SERVICE_ID";     // Replace with your Service ID
const templateId = "YOUR_TEMPLATE_ID";   // Replace with your Template ID
const publicKey = "YOUR_PUBLIC_KEY";     // Replace with your Public Key
```

## Done! 🎉
Your contact form will now send emails directly to `blesseneby007@gmail.com` without any popups!
