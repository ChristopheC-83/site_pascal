import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ServiceCard } from "@/components/service-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Antennes, portails, visiophones et sécurité entre Nîmes et Montpellier | Pascal Albert",
  description:
    "Pascal Albert intervient entre Nîmes et Montpellier pour l’installation et le dépannage d’antennes TV, visiophones, motorisations de portail, automatismes et alarmes.",
  path: "/",
});

const localBusinessJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  url: siteConfig.url,
  telephone: siteConfig.phoneInternational,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    ...siteConfig.address,
  },
  areaServed: siteConfig.areaServed,
}).replace(/</g, "\\u003c");

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: localBusinessJsonLd }}
      />
      <SiteHeader />
      <main>
        <section id="accueil" className="relative isolate flex min-h-[42rem] items-end overflow-hidden sm:min-h-[45rem] lg:min-h-[calc(100svh-9.5rem)]">
          <Image
            src="/images/Entrée moderne avec portail contemporain.png"
            alt="Entrée d'une maison équipée d'un portail automatique"
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,15,29,0.93)_0%,rgba(8,15,29,0.72)_48%,rgba(8,15,29,0.2)_100%)]" />

          <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
            <div className="max-w-3xl">
              <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-400 sm:text-sm">
                <span className="h-px w-10 bg-amber-400" aria-hidden="true" />
                Artisan à Uchaud
              </p>
              <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Vos équipements basse tension, installés et dépannés par un spécialiste
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
                Antennes, visiophones, motorisations, automatismes et systèmes de sécurité autour de Nîmes et Montpellier.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex min-h-14 items-center justify-center bg-amber-500 px-7 text-sm font-bold uppercase tracking-[0.1em] text-slate-950 transition-colors hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Demander un devis
                </Link>
                <a href="tel:+33607568538" className="inline-flex min-h-14 items-center justify-center border border-white/60 bg-slate-950/20 px-7 text-sm font-bold tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  06 07 56 85 38
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="prestations" className="scroll-mt-8 bg-stone-50 py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mb-10 grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-16">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">Savoir-faire</p>
                <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">Nos prestations</h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-slate-600 lg:justify-self-end">
                Des solutions fiables, installées avec soin et adaptées à votre habitation ou à vos locaux professionnels.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
              {services.map((service, index) => (
                <div key={service.slug} className={index < 3 ? "xl:col-span-2" : "xl:col-span-3"}>
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="entreprise" className="scroll-mt-8 bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20 lg:px-10">
            <div className="relative min-h-80 overflow-hidden bg-slate-200 sm:min-h-[28rem]">
              <Image
                src="/images/Toit moderne sous ciel bleu clair.png"
                alt="Vue sur les toits du secteur d'intervention"
                fill
                sizes="(max-width: 1023px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-slate-950 px-6 py-5 text-white">
                <span className="block text-xs font-bold uppercase tracking-[0.16em] text-amber-400">Basé à</span>
                <span className="mt-1 block font-heading text-2xl font-bold">Uchaud</span>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">Proximité</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Un artisan proche de vos projets</h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                Installé à Uchaud, Pascal ALBERT intervient principalement entre Nîmes et Montpellier pour vos installations et dépannages en basse tension.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Les interventions sont réalisées dans le Gard et l’Hérault selon la nature et la localisation de votre besoin.
              </p>
              <div className="mt-8 flex flex-wrap gap-2" aria-label="Principaux secteurs d'intervention">
                {["Uchaud", "Secteur Nîmes", "Secteur Montpellier", "Gard & Hérault"].map((area) => (
                  <span key={area} className="border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">{area}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-8 bg-amber-500">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-700">Parlons de votre besoin</p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-slate-950 sm:text-4xl">Un projet ou un dépannage ?</h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-800">
                Contactez directement Pascal ALBERT pour échanger sur votre installation ou demander un devis.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              <a href="tel:+33607568538" className="inline-flex min-h-14 items-center justify-center bg-slate-950 px-6 text-sm font-bold tracking-[0.08em] text-white transition-colors hover:bg-slate-800">Appeler Pascal ALBERT</a>
              <Link href="/contact" className="inline-flex min-h-14 items-center justify-center border-2 border-slate-950 px-6 text-sm font-bold text-slate-950 transition-colors hover:bg-slate-950 hover:text-white">Nous écrire</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
