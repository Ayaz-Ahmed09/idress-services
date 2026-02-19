# EmailJS Setup Guide for ServicesForm

## Overview
The `ServicesForm` component uses **EmailJS** as the primary email sending method with **FormSubmit** as a fallback.

## Primary Method: EmailJS

### Step 1: Sign Up for EmailJS
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Create a free account
3. Verify your email

### Step 2: Create an Email Service
1. Go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps
5. Copy the **Service ID** (e.g., `service_abc123`)

### Step 3: Create an Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

```html
<h2>New Service Request</h2>
<p><strong>From:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Address:</strong> {{address}}</p>
<p><strong>Service:</strong> {{service}}</p>
<p><strong>Specific Issue:</strong> {{sub_service}}</p>
<p><strong>Message:</strong> {{message}}</p>
<p><strong>Submitted:</strong> {{time}}</p>
```

4. Save and copy the **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to "Account" > "General"
2. Copy your **Public Key** (e.g., `AbCdEfGhIjKlMnOpQrStUv`)

### Step 5: Configure Environment Variables
Update your `.env.local` file:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
```

## Fallback Method: FormSubmit

FormSubmit is automatically used if EmailJS fails. No setup required!

Just make sure `NEXT_PUBLIC_CONTACT_EMAIL` is set in your `.env.local`.

### How it works:
- If EmailJS fails (missing config, network error, etc.), the form automatically switches to FormSubmit
- FormSubmit sends emails to the address specified in `NEXT_PUBLIC_CONTACT_EMAIL`
- The user is redirected to `/thank-you` after submission
- No registration required for FormSubmit!

## Available Services in Dropdown

The form automatically includes all services from your `data/services.js`:

1. **AC Repair & Service** - ac-repair
2. **Refrigerator Repair & Service** - fridge-repair
3. **TV Repair & Service** - tv-repair
4. **Electronics & Gadget Repair** - electronics-repair
5. **CCTV Camera Installation** - cctv-installation
6. **Electrician Service** - electrician-service

When a user selects a service, the "Specific Issue" dropdown automatically populates with sub-services from your data.

## Form Fields

- **Full Name** (required) - Customer's name
- **Phone Number** (required) - Contact number
- **Email Address** (optional) - Email for confirmations
- **Address** (required) - Service location
- **Select Service** (required) - Main service category
- **Specific Issue** (optional) - Detailed problem description
- **Additional Details** (optional) - Extra information

## Testing

1. Start the dev server: `npm run dev`
2. Navigate to `/book`
3. Fill out the form
4. Submit and check your email!

## Troubleshooting

### EmailJS not working?
- Check that all three environment variables are set correctly
- Verify the Service ID, Template ID, and Public Key match your EmailJS dashboard
- Check browser console for error messages
- The form will automatically fall back to FormSubmit

### FormSubmit not working?
- Verify `NEXT_PUBLIC_CONTACT_EMAIL` is set
- Check spam/junk folders
- Ensure the email address is valid

### Sub-services not showing?
- Make sure `data/services.js` is properly formatted
- Check that each service has a `subServices` array
- Verify service slugs match exactly

## Security Notes

- Never commit your actual EmailJS keys to version control
- Use `.env.local` for local development
- For production, set environment variables in your hosting platform
- The Public Key is safe to expose in the frontend (it's designed for client-side use)
