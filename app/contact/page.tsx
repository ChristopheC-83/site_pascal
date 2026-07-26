import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact et demande de devis entre Nîmes et Montpellier",
  description:
    "Contactez Pascal Albert pour un projet ou un dépannage d’antenne, visiophone, motorisation de portail, automatisme ou système de sécurité entre Nîmes et Montpellier.",
  path: "/contact",
});

type ContactPageProps = {
  searchParams: Promise<{ service?: string | string[] }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { service } = await searchParams;
  const requestedService = typeof service === "string" ? service : "";
  const initialService = services.some((item) => item.slug === requestedService)
    ? requestedService
    : "";

  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
              Échangeons sur votre besoin
            </p>
            <h1 className="mt-4 max-w-4xl font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Contact & demande de devis
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Vous avez un projet d’installation, de remplacement ou de
              dépannage ? Décrivez votre besoin afin d’obtenir un premier retour
              et un devis adapté à votre installation.
            </p>
            <a
              href="tel:+33607568538"
              className="mt-8 inline-flex min-h-14 items-center border border-amber-500 px-6 font-heading text-xl font-bold text-amber-400 transition-colors hover:bg-amber-500 hover:text-slate-950"
            >
              06 07 56 85 38
            </a>
          </div>
        </section>

        <section className="bg-stone-50 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.45fr_0.75fr] lg:gap-20 lg:px-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
                Votre demande
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-slate-950">
                Décrivez votre projet
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                Quelques informations suffisent pour préparer un premier
                échange.
              </p>
              <div className="mt-8 bg-white p-5 sm:p-8 lg:p-10">
                <ContactForm initialService={initialService} />
              </div>
            </div>

            <aside className="border-t border-slate-300 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
                Coordonnées
              </p>
              <h2 className="mt-3 font-heading text-2xl font-bold text-slate-950">
                Pascal ALBERT
              </h2>
              <address className="mt-6 text-base not-italic leading-8 text-slate-700">
                <p>
                  4 rue de la Manzanille
                  <br />
                  30620 UCHAUD
                </p>
                <div className="mt-5">
                  <p>
                    <span className="font-semibold text-slate-950">
                      Téléphone :
                    </span>{" "}
                    <a
                      href="tel:+33607568538"
                      className="underline decoration-amber-600 underline-offset-4 hover:text-amber-700"
                    >
                      06 07 56 85 38
                    </a>
                  </p>
                  <p className="mt-2 break-all">
                    <a
                      href="mailto:ent.albertpascal@hotmail.fr"
                      className="underline decoration-amber-600 underline-offset-4 hover:text-amber-700"
                    >
                      ent.albertpascal@hotmail.fr
                    </a>
                  </p>
                </div>
              </address>
              <p className="mt-8 border-l-2 border-amber-600 pl-5 text-sm leading-7 text-slate-600">
                Interventions autour d’Uchaud, entre Nîmes et Montpellier, dans
                le Gard et l’Hérault selon le projet.
              </p>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
