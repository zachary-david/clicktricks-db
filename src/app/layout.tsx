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
  title: "Simple CRM Setup for Service Businesses | Never Lose Leads Again",
  description: "Professional CRM setup in 30 minutes. $497 one-time fee. Perfect for coaches, consultants & service providers. Book your demo today.",
  keywords: "service business CRM, lead management, small business organization, professional CRM, business automation",
  authors: [{ name: "Simple CRM" }],
  creator: "Simple CRM",
  publisher: "Simple CRM",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Simple CRM Setup for Service Businesses | Never Lose Leads Again",
    description: "Professional CRM setup in 30 minutes. $497 one-time fee. Perfect for coaches, consultants & service providers.",
    url: "https://simplecrm.com",
    siteName: "Simple CRM",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simple CRM Setup for Service Businesses",
    description: "Professional CRM setup in 30 minutes. $497 one-time fee.",
    creator: "@simplecrm",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jakartaSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
