import type { Metadata } from "next";

import { absoluteUrl, siteConfig } from "@/lib/site-config";

type SocialImage = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
};

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  image?: SocialImage;
};

export function createPageMetadata({
  title,
  description,
  path,
  image = siteConfig.openGraphImage,
}: PageMetadata): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image.url);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: siteConfig.name,
      title,
      description,
      url,
      images: [{ ...image, url: imageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: imageUrl, alt: image.alt }],
    },
  };
}
