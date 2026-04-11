import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { Organization, SoftwareApplication, WithContext } from "schema-dts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hirel AI | AI Interviews That Hire Faster",
    template: "%s | Hirel AI",
  },
  description: "Reduce screening time by 80%. Let AI conduct, evaluate, and score candidate interviews.",
  keywords: ["AI interview software", "automated hiring platform", "AI recruiter tools", "candidate screening"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData: WithContext<Organization | SoftwareApplication>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Hirel AI",
      url: "https://hirelai.com",
      logo: "https://hirelai.com/logo.png",
      sameAs: [
        "https://twitter.com/hirelai",
        "https://linkedin.com/company/hirelai"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Hirel AI",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "49.00",
        priceCurrency: "USD"
      }
    }
  ];

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <JsonLd data={structuredData} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
