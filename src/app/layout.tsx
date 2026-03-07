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
  title: "RealtyVoice | AI Voice Answering for Real Estate Agents",
  description: "Never miss a lead again. RealtyVoice AI answers your missed calls, qualifies leads, and books showings 24/7. High-conversion AI voice agents for US real estate.",
  openGraph: {
    title: "RealtyVoice | AI Voice Answering",
    description: "The AI Receptionist for Top-Producing Real Estate Agents.",
    images: ['/og-image.png'],
  }
};

import ExitIntentPopup from "@/components/ExitIntentPopup";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <ExitIntentPopup />
      </body>
    </html>
  );
}
