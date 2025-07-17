import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Custom Airtable CRM Setup for Freelancers, Solopreneurs and Small Teams | ClickTricks DB | Never Lose Another Lead Again",
  description: "Professional CRM made easy - Simple lead tracking, follow-up notifications, and basic pipeline management. Custom Airtable setup for freelancers, solopreneurs and small teams.",
  keywords: "airtable crm setup, freelancer crm, solopreneur lead management, small team crm, lead tracking system, follow up notifications, pipeline management, clicktricks db",
  authors: [{ name: "ClickTricks DB" }],
  creator: "ClickTricks DB",
  publisher: "ClickTricks DB",
  category: "Business Software",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Custom Airtable CRM Setup for Freelancers, Solopreneurs & Small Teams | ClickTricks DB",
    description: "Professional CRM made easy - Never lose a lead again. Simple lead tracking, follow-up notifications, and basic pipeline management. $497 one-time + $10/month Airtable.",
    url: "https://clicktricksdb.com",
    siteName: "ClickTricks DB",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://clicktricksdb.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ClickTricks DB - Custom Airtable Setup for Coaches",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Airtable CRM Setup for Freelancers & Small Teams",
    description: "Professional CRM made easy - Never lose a lead again. Simple lead tracking & follow-up notifications. $497 one-time + $10/month.",
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
    google: "your-google-verification-code",
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
    "name": "ClickTricks DB",
    "url": "https://clicktricksdb.com",
    "logo": "https://clicktricksdb.com/logo.png",
    "description": "Custom Airtable CRM setup for freelancers, solopreneurs and small teams who need professional lead management systems",
    "founder": {
      "@type": "Person",
      "name": "ClickTricks DB Team"
    },
    "offers": {
      "@type": "Offer",
      "name": "Custom Airtable CRM Setup",
      "description": "Complete Airtable CRM setup with simple lead tracking, follow-up notifications, basic pipeline management, and 30-minute training call",
      "price": "497",
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ClickTricks DB" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.variable} ${jakartaSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
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
