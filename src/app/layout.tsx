import type { Metadata } from "next";
import { Inter, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ErrorBoundary from "@/components/ErrorBoundary";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Custom Airtable CRM Setup for Freelancers, Solopreneurs and Small Teams | ClickTricks | Never Lose Another Lead Again",
  description: "Professional CRM made easy - Simple lead tracking, follow-up notifications, and basic pipeline management. Custom Airtable setup for freelancers, solopreneurs and small teams.",
  keywords: "airtable crm setup, freelancer crm, solopreneur lead management, small team crm, lead tracking system, follow up notifications, pipeline management, clicktricks",
  authors: [{ name: "ClickTricks" }],
  creator: "ClickTricks",
  publisher: "ClickTricks",
  category: "Business Software",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Custom Airtable CRM Setup for Freelancers, Solopreneurs & Small Teams | ClickTricks",
    description: "Professional CRM made easy - Never lose a lead again. Simple lead tracking, follow-up notifications, and basic pipeline management. Starting at $99 one-time + $10/month Airtable.",
    url: "https://clicktricks.com",
    siteName: "ClickTricks",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://clicktricks.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ClickTricks - Custom Airtable Setup for Coaches",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Airtable CRM Setup for Freelancers & Small Teams",
    description: "Professional CRM made easy - Never lose a lead again. Simple lead tracking & follow-up notifications. Starting at $99 one-time + $10/month.",
    creator: "@clicktricksdb",
    images: ["https://clicktricksdb.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google379583f3dfef0db6",
  },
  alternates: {
    canonical: "https://clicktricksdb.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ClickTricks",
    "url": "https://clicktricks.com",
    "logo": "https://clicktricks.com/logo.png",
    "description": "Custom Airtable CRM setup for freelancers, solopreneurs and small teams who need professional lead management systems",
    "founder": {
      "@type": "Person",
      "name": "ClickTricks Team"
    },
    "offers": {
      "@type": "Offer",
      "name": "Custom Airtable CRM Setup",
      "description": "Complete Airtable CRM setup with simple lead tracking, follow-up notifications, basic pipeline management, and 30-minute training call. Pricing begins at $99 and may vary based on project complexity.",
      "price": "99",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01",
      "itemCondition": "https://schema.org/NewCondition",
      "additionalProperty": {
        "@type": "PropertyValue",
        "name": "Monthly Software Cost",
        "value": "$10/month (paid to Airtable)"
      }
    },
    "serviceArea": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "targetAudience": {
      "@type": "Audience",
      "name": "Freelancers, Solopreneurs and Small Teams",
      "description": "Freelancers, solopreneurs and small teams who need simple lead tracking and follow-up management"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "availableLanguage": "English"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="preload" href="https://api.dicebear.com" as="dns-prefetch" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#041926" />
        <meta name="msapplication-TileColor" content="#041926" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo-icon-2.svg" />
        <link rel="icon" type="image/svg+xml" href="/logo-icon-2.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ClickTricks" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {/* Google Consent Script */}
        <Script
          id="gtag-consent"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied'
              });
            `,
          }}
        />
        
        {/* Google Tag Manager */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PF366PMN');
            `,
          }}
        />
        
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-DKM088Y0ZF"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DKM088Y0ZF', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        
        {/* GTM NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PF366PMN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <script dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js')
                  .then(function(registration) {
                    console.log('SW registered: ', registration);
                  })
                  .catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                  });
              });
            }
          `
        }} />
      </body>
    </html>
  );
}
