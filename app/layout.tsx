import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import "./globals.css";
import "./site.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Pascal Albert | Antennes, portails, visiophones et sécurité",
    template: "%s | Pascal Albert",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  creator: siteConfig.legalName,
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: siteConfig.name,
    title: "Pascal Albert | Antennes, portails, visiophones et sécurité",
    description: siteConfig.description,
    url: absoluteUrl("/"),
    images: [
      {
        ...siteConfig.openGraphImage,
        url: absoluteUrl(siteConfig.openGraphImage.url),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pascal Albert | Antennes, portails, visiophones et sécurité",
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl(siteConfig.openGraphImage.url),
        alt: siteConfig.openGraphImage.alt,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}

        <Toaster position="top-center" richColors expand />
      </body>
    </html>
  );
}
