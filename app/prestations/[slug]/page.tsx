import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  ServiceContentSection,
  ServiceCta,
  ServiceHero,
  ServicePricing,
} from "@/components/service-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  detailedServices,
  getDetailedService,
} from "@/data/service-details";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return detailedServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getDetailedService(slug);

  if (!service) {
    return { title: "Prestation introuvable | Pascal ALBERT" };
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getDetailedService(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main>
        <ServiceHero service={service} />
        <div className="py-6 sm:py-10">
          {service.sections.map((section, index) => (
            <ServiceContentSection
              key={section.title}
              section={section}
              imageRight={index % 2 === 1}
            />
          ))}
        </div>
        <ServicePricing prices={service.pricing} />
        <ServiceCta text={service.ctaText} />
      </main>
      <SiteFooter />
    </>
  );
}
