import type { Metadata } from "next";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NAVRATRI NIRVANA",
  description: "An evening of music, dance & celebration for a cause.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
