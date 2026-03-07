import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://realtyvoice.online'),
  title: "RealtyVoice | AI Voice Answering for Real Estate Agents",
  description: "Never miss a lead again. RealtyVoice AI answers your missed calls, qualifies leads, and books showings 24/7. High-conversion AI voice agents for US real estate.",
  keywords: ["AI Real Estate", "Voice AI", "Real Estate Leads", "Automated Answering", "Virtual Assistant", "Lead Qualification", "US Real Estate Tech"],
  authors: [{ name: "RealtyVoice Team" }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "RealtyVoice | AI Voice Answering for Real Estate",
    description: "The AI Receptionist for Top-Producing Real Estate Agents. Capture every lead, 24/7.",
    url: 'https://realtyvoice.online',
    siteName: 'RealtyVoice',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RealtyVoice AI Answering Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RealtyVoice | AI Voice Receptionist',
    description: 'Stop losing commissions to missed calls. AI that qualifies and books showings 24/7.',
    images: ['/twitter-image.png'],
  },
};

import ExitIntentPopup from "@/components/ExitIntentPopup";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "RealtyVoice",
              "url": "https://realtyvoice.online",
              "logo": "https://realtyvoice.online/logo.png",
              "description": "AI Voice Answering and Lead Qualification for Real Estate Agents.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+16502524261",
                "contactType": "customer service",
                "email": "sayak@afbf.in"
              }
            })
          }}
        />
        {children}
        <ExitIntentPopup />
      </body>
    </html>
  );
}
