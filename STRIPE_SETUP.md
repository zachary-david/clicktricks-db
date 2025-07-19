# 🚀 Complete Stripe Setup Guide

This guide will walk you through setting up the full Stripe integration with webhooks for your ClickTricks DB checkout.

## ✅ What's Already Done

- ✅ Stripe packages installed (`stripe`, `@stripe/stripe-js`)
- ✅ Checkout page (`/checkout`)
- ✅ Success page (`/success`)
- ✅ API routes (`/api/checkout-session`, `/api/webhook`)
- ✅ Environment files (`.env.local`, `.env.local.example`)

## 🔧 Setup Steps

### 1. Get Your Stripe Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
2. Copy your **Publishable key** (starts with `pk_test_`)
3. Copy your **Secret key** (starts with `sk_test_`)
4. Add them to your `.env.local` file:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_key_here
STRIPE_SECRET_KEY=sk_test_your_actual_key_here
```

### 2. Set Up Webhook Endpoint

1. Go to [Stripe Webhooks](https://dashboard.stripe.com/webhooks)
2. Click **"Add endpoint"**
3. Add your endpoint URL:
   - **Development**: `https://yourdomain.ngrok.io/api/webhook`
   - **Production**: `https://yourdomain.com/api/webhook`
4. Select these events:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `customer.created`
5. Click **"Add endpoint"**
6. Copy the **Signing secret** (starts with `whsec_`)
7. Add it to your `.env.local`:

```env
STRIPE_WEBHOOK_SECRET=whsec_your_actual_webhook_secret_here
```

### 3. Test Locally with Ngrok

For local testing, you'll need to expose your localhost to the internet:

```bash
# Install ngrok
npm install -g ngrok

# Start your Next.js app
npm run dev

# In another terminal, expose localhost:3000
ngrok http 3000
```

Use the ngrok HTTPS URL for your webhook endpoint in Stripe.

### 4. Test Your Integration

#### Test Cards (Use in Stripe test mode):
- **Success**: `4242 4242 4242 4242`
- **Declined**: `4000 0000 0000 0002`
- **Requires 3D Secure**: `4000 0000 0000 3220`

#### Test Flow:
1. Go to `/checkout`
2. Click "Pay Securely – $497 Flat Fee"
3. Use test card: `4242 4242 4242 4242`
4. Use any future expiry date and any CVC
5. Fill in customer details
6. Complete payment
7. Should redirect to `/success`
8. Check webhook logs in Stripe Dashboard

## 🎯 Current Webhook Functionality

The webhook automatically handles:

### ✅ When Payment Succeeds:
- Logs customer data (email, name, business type, etc.)
- Extracts custom fields (business name, business type)
- Captures billing/shipping addresses
- Ready for you to add:
  - Database storage
  - Email notifications
  - Calendly links
  - Slack notifications
  - Airtable integration

### ✅ When Payment Fails:
- Logs failure reason
- Ready for recovery email automation

### ✅ Customer Data Collected:
- Email address
- Full name
- Phone number
- Business name (custom field)
- Business type (dropdown: freelancer, solopreneur, small team, agency, other)
- Billing address
- Shipping address
- Payment amount
- Stripe customer ID

## 🔄 Next Steps to Complete Integration

### 1. Add Email Service (Recommended: Resend)

```bash
npm install resend
```

```typescript
// In webhook handler
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

async function sendConfirmationEmail(customerData: any) {
  await resend.emails.send({
    from: 'ClickTricks DB <noreply@clicktricksdb.com>',
    to: customerData.email,
    subject: 'Welcome to ClickTricks DB! Your CRM Setup is Starting',
    html: `
      <h1>Welcome ${customerData.name}!</h1>
      <p>Your payment of $${customerData.amount} has been confirmed.</p>
      <p>Next step: <a href="https://calendly.com/your-link">Book your kickoff call</a></p>
    `
  });
}
```

### 2. Add Database Storage

Example with Prisma/PostgreSQL:

```typescript
async function saveCustomerToDatabase(customerData: any) {
  await prisma.customer.create({
    data: {
      stripeCustomerId: customerData.stripeCustomerId,
      email: customerData.email,
      name: customerData.name,
      businessName: customerData.businessName,
      businessType: customerData.businessType,
      amount: customerData.amount,
      status: 'payment_received',
    }
  });
}
```

### 3. Add Slack Notifications

```typescript
async function sendSlackNotification(customerData: any) {
  await fetch(process.env.SLACK_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text: `🎉 New ClickTricks DB purchase!\n${customerData.name} (${customerData.email})\nBusiness: ${customerData.businessName}\nAmount: $${customerData.amount}`
    })
  });
}
```

### 4. Add Airtable Integration

```typescript
async function addToAirtable(customerData: any) {
  await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      records: [{
        fields: {
          'Customer Name': customerData.name,
          'Email': customerData.email,
          'Business Name': customerData.businessName,
          'Business Type': customerData.businessType,
          'Amount': customerData.amount,
          'Status': 'Payment Received',
          'Stripe Customer ID': customerData.stripeCustomerId,
        }
      }]
    })
  });
}
```

## 🔒 Security Notes

- ✅ Webhook signature verification is implemented
- ✅ Environment variables are protected in `.gitignore`
- ✅ Customer data validation is in place
- ✅ Error handling for failed webhooks

## 🚀 Going Live

### 1. Switch to Live Mode
- Get live Stripe keys (starts with `pk_live_` and `sk_live_`)
- Create live webhook endpoint
- Update environment variables

### 2. Update Webhook URL
- Change webhook URL to production domain
- Test with real (small) transaction

### 3. Enable Additional Features
- Add real email service
- Connect to your database
- Set up monitoring/logging

## 📞 Support

If you need help with any of these integrations, the webhook handler is ready to accept all the functions - you just need to uncomment and implement the specific services you want to use.

All the customer data is being captured and logged, so you can start processing orders immediately!