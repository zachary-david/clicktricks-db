import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Lazy initialization to avoid build-time issues
function getStripe() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  
  if (!secretKey) {
    console.error('STRIPE_SECRET_KEY environment variable is not set');
    throw new Error('Stripe secret key is required');
  }
  
  return new Stripe(secretKey, {
    apiVersion: '2025-06-30.basil',
  });
}

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    console.error('No Stripe signature found');
    return NextResponse.json({ error: 'No signature' }, { status: 400 });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
  const stripe = getStripe();
  let event: Stripe.Event;

  try {
    // Verify the webhook signature
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    );
  }

  // Handle the event
  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
        break;
      
      case 'payment_intent.succeeded':
        await handlePaymentSucceeded(event.data.object as Stripe.PaymentIntent);
        break;
      
      case 'payment_intent.payment_failed':
        await handlePaymentFailed(event.data.object as Stripe.PaymentIntent);
        break;
      
      case 'customer.created':
        await handleCustomerCreated(event.data.object as Stripe.Customer);
        break;
      
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Error handling webhook:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  console.log('✅ Checkout completed:', session.id);
  
  try {
    // Retrieve full session details with line items
    const stripe = getStripe();
    const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
      expand: ['line_items', 'customer'],
    });

    const customer = fullSession.customer as Stripe.Customer;
    const customFields = fullSession.custom_fields || [];
    
    // Extract business information
    const businessName = customFields.find(field => field.key === 'business_name')?.text?.value || '';
    const businessType = customFields.find(field => field.key === 'business_type')?.dropdown?.value || '';

    // Customer data
    const customerData = {
      stripeCustomerId: customer.id,
      email: customer.email,
      name: customer.name,
      phone: customer.phone,
      businessName,
      businessType,
      amount: session.amount_total! / 100, // Convert from cents
      sessionId: session.id,
      paymentStatus: session.payment_status,
      billingAddress: session.customer_details?.address,
    };

    console.log('Customer data:', customerData);

    // TODO: Save to your database
    // await saveCustomerToDatabase(customerData);

    // TODO: Send confirmation email
    // await sendConfirmationEmail(customerData);

    // TODO: Send Calendly booking link
    // await sendCalendlyLink(customerData);

    // TODO: Add to your CRM/project management tool
    // await addToAirtable(customerData);

    // TODO: Send Slack notification to your team
    // await sendSlackNotification(customerData);

    console.log('✅ Successfully processed checkout completion');
  } catch (error) {
    console.error('Error processing checkout completion:', error);
    throw error;
  }
}

async function handlePaymentSucceeded(paymentIntent: Stripe.PaymentIntent) {
  console.log('✅ Payment succeeded:', paymentIntent.id);
  
  // Additional payment success handling if needed
  // This runs after checkout.session.completed
}

async function handlePaymentFailed(paymentIntent: Stripe.PaymentIntent) {
  console.log('❌ Payment failed:', paymentIntent.id);
  
  try {
    // TODO: Handle failed payment
    // - Send recovery email
    // - Log for follow-up
    // - Update customer status
    
    const failedPaymentData = {
      paymentIntentId: paymentIntent.id,
      customerId: paymentIntent.customer,
      amount: paymentIntent.amount / 100,
      failureReason: paymentIntent.last_payment_error?.message,
      failureCode: paymentIntent.last_payment_error?.code,
    };

    console.log('Failed payment data:', failedPaymentData);
    
    // TODO: Send recovery email
    // await sendPaymentFailedEmail(failedPaymentData);
    
  } catch (error) {
    console.error('Error handling payment failure:', error);
    throw error;
  }
}

async function handleCustomerCreated(customer: Stripe.Customer) {
  console.log('👤 Customer created:', customer.id);
  
  // TODO: Add customer to your marketing lists
  // TODO: Send welcome email
}

/* 
TODO: Implement these helper functions based on your needs:

async function saveCustomerToDatabase(customerData: any) {
  // Save to your database (PostgreSQL, MongoDB, etc.)
}

async function sendConfirmationEmail(customerData: any) {
  // Send email using Resend, SendGrid, etc.
  // Include receipt, next steps, Calendly link
}

async function sendCalendlyLink(customerData: any) {
  // Send personalized Calendly booking link
}

async function addToAirtable(customerData: any) {
  // Add customer to your Airtable base for project tracking
}

async function sendSlackNotification(customerData: any) {
  // Notify your team of new purchase
}

async function sendPaymentFailedEmail(failedPaymentData: any) {
  // Send payment recovery email
}
*/