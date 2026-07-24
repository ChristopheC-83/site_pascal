import Image from "next/image";
import Link from "next/link";

import type {
  DetailedService,
  ServicePrice,
  ServiceSection,
} from "@/data/service-details";

const phoneHref = "tel:+33607568538";

export function ServiceHero({ service }: { service: DetailedService }) {
  return (
    <section className="relative isolate flex min-h-[38rem] items-end overflow-hidden sm:min-h-[42rem]">
      <Image
        src={service.hero.image}
        alt={service.hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,15,29,0.94)_0%,rgba(8,15,29,0.76)_50%,rgba(8,15,29,0.24)_100%)]" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-14 pt-28 sm:px-8 sm:pb-20 lg:px-10">
        <div className="max-w-3xl">
          <Link
            href="/#prestations"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-400 hover:text-amber-300"
          >
            <span aria-hidden="true">←</span> Toutes les prestations
          </Link>
          <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-white sm:text-2xl">
            {service.hero.tagline}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
            {service.hero.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/contact?service=${service.slug}`}
              className="inline-flex min-h-14 items-center justify-center bg-amber-500 px-7 text-sm font-bold uppercase tracking-[0.1em] text-slate-950 transition-colors hover:bg-amber-400"
            >
              Demander un devis
            </Link>
            <a
              href={phoneHref}
              className="inline-flex min-h-14 items-center justify-center border border-white/60 bg-slate-950/20 px-7 text-sm font-bold tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-slate-950"
            >
              06 07 56 85 38
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceContentSection({
  section,
  imageRight,
}: {
  section: ServiceSection;
  imageRight: boolean;
}) {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div
          className={`relative min-h-80 overflow-hidden bg-slate-200 sm:min-h-[30rem] ${
            imageRight ? "lg:order-2" : ""
          }`}
        >
          <Image
            src={section.image}
            alt={section.imageAlt}
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className={imageRight ? "lg:order-1" : ""}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
            {section.eyebrow}
          </p>
          <h2 className="mt-3 max-w-xl font-heading text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {section.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
            {section.text}
          </p>
        </div>
      </div>
    </section>
  );
}

export function ServicePricing({ prices }: { prices: ServicePrice[] }) {
  return (
    <section className="bg-stone-100 py-20 sm:py-24" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
          Premiers repères
        </p>
        <h2 id="pricing-title" className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Tarifs indicatifs
        </h2>
        <div className="mt-10 border-y border-slate-300">
          {prices.map((item) => (
            <div
              key={item.label}
              className="grid gap-2 border-t border-slate-300 py-6 first:border-t-0 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8"
            >
              <div>
                <h3 className="font-heading text-lg font-bold text-slate-950">{item.label}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
              <p className="font-heading text-lg font-bold text-amber-700 sm:text-right">{item.price}</p>
            </div>
          ))}
        </div>
        <p className="mt-7 border-l-2 border-amber-600 pl-5 text-sm leading-7 text-slate-600">
          Les tarifs varient selon le matériel choisi, la configuration existante, les contraintes d’installation et les éventuels travaux nécessaires. Un devis personnalisé permet de déterminer précisément le coût de l’intervention.
        </p>
      </div>
    </section>
  );
}

export function ServiceCta({ text, serviceSlug }: { text: string; serviceSlug: string }) {
  return (
    <section className="bg-amber-500">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-16">
        <div>
          <h2 className="font-heading text-3xl font-bold text-slate-950 sm:text-4xl">
            Vous avez un projet ou un équipement à dépanner ?
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-800">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
          <Link
            href={`/contact?service=${serviceSlug}`}
            className="inline-flex min-h-14 items-center justify-center bg-slate-950 px-6 text-sm font-bold text-white transition-colors hover:bg-slate-800"
          >
            Demander un devis
          </Link>
          <a
            href={phoneHref}
            className="inline-flex min-h-14 items-center justify-center border-2 border-slate-950 px-6 text-sm font-bold text-slate-950 transition-colors hover:bg-slate-950 hover:text-white"
          >
            Appeler le 06 07 56 85 38
          </a>
        </div>
      </div>
    </section>
  );
}
