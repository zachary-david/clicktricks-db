import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(request: NextRequest) {
  try {
    const { productId, amount } = await request.json();
    
    // Get the origin from the request headers
    const origin = request.headers.get('origin') || 'http://localhost:3000';

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'ClickTricks DB Setup',
              description: 'Custom Airtable CRM setup for your business',
              images: [`${origin}/api/og-image`], // Optional: Add your product image
            },
            unit_amount: amount, // $497.00 in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout`,
      customer_creation: 'always',
      payment_intent_data: {
        metadata: {
          productId: productId,
          source: 'website',
        },
      },
      metadata: {
        productId: productId,
        source: 'website',
      },
      // Collect customer information
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'GB', 'AU', 'NZ'], // Add countries as needed
      },
      // Custom fields for business information
      custom_fields: [
        {
          key: 'business_name',
          label: {
            type: 'custom',
            custom: 'Business/Company Name',
          },
          type: 'text',
          optional: true,
        },
        {
          key: 'business_type',
          label: {
            type: 'custom',
            custom: 'Business Type',
          },
          type: 'dropdown',
          dropdown: {
            options: [
              { label: 'Freelancer', value: 'freelancer' },
              { label: 'Solopreneur', value: 'solopreneur' },
              { label: 'Small Team (2-10 people)', value: 'small_team' },
              { label: 'Agency', value: 'agency' },
              { label: 'Other', value: 'other' },
            ],
          },
        },
      ],
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
}