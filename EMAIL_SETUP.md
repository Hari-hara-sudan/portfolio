# EmailJS Setup Guide

Your contact form is now configured to use EmailJS, but you need to set up your EmailJS account and get the required credentials.

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" or "Outlook" (or any email provider you use)
4. Connect your email account
5. Note down the **Service ID** (you'll need this)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template:

```
Subject: New Contact Form Message from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

4. Save the template and note down the **Template ID**

## Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## Step 5: Update Your Code
Replace the placeholder values in `src/components/ContactSection.tsx`:

```typescript
// Replace these values:
emailjs.init("YOUR_PUBLIC_KEY"); // Your actual public key
'YOUR_SERVICE_ID', // Your actual service ID
'YOUR_TEMPLATE_ID', // Your actual template ID
```

## Step 6: Test Your Form
1. Fill out the contact form on your website
2. Submit the form
3. Check your email to see if you received the message

## Alternative: Use Formspree (Easier)
If EmailJS seems too complex, you can use Formspree instead:

1. Go to [Formspree.io](https://formspree.io/)
2. Create a free account
3. Create a new form
4. Replace the form action with your Formspree endpoint
5. Remove the EmailJS code and use a simple fetch request

## Troubleshooting
- Make sure all your EmailJS credentials are correct
- Check the browser console for any errors
- Verify your email service is properly connected
- Test with a simple message first

Your contact form will now actually send emails to your inbox! 