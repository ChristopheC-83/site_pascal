import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const pageMetadata = createPageMetadata({
  title: "Mentions légales",
  description:
    "Consultez les mentions légales du site de Pascal Albert, les informations relatives à son hébergement et les conditions d’utilisation des contenus.",
  path: "/mentions-legales",
});

export const metadata: Metadata = {
  ...pageMetadata,
  robots: { index: false, follow: true },
};

function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      aria-labelledby={id}
      className="py-10 first:pt-0 last:pb-0"
    >
      <h2
        id={id}
        className="font-heading text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
      >
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
        {children}
      </div>
    </section>
  );
}

const listClassName = "ml-1 list-disc space-y-2 pl-6 marker:text-amber-700";

export default function LegalNoticesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <header className="bg-slate-950 text-white">
          <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
              Informations légales
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Mentions légales
            </h1>
            <p className="mt-6 text-sm font-semibold text-slate-300">
              Dernière mise à jour : 26 juillet 2026
            </p>
            <p className="mt-6 max-w-3xl border-l-2 border-amber-500 pl-5 text-sm leading-7 text-slate-300">
              Certaines informations administratives restent à vérifier ou à
              compléter avant la mise en ligne définitive du site.
            </p>
          </div>
        </header>

        <article className="bg-stone-50">
          <div className="mx-auto max-w-4xl divide-y divide-slate-200 px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
            <LegalSection id="editeur-site" title="1. Éditeur du site">
              <p>Le présent site est édité par :</p>
              <p>
                <strong className="text-slate-950">
                  {siteConfig.legalName} – Entrepreneur individuel
                </strong>
                <br />
                Micro-entrepreneur exerçant une activité artisanale
              </p>
              <address className="not-italic">
                Adresse :
                <br />
                {siteConfig.address.streetAddress}
                <br />
                {siteConfig.address.postalCode}{" "}
                {siteConfig.address.addressLocality}
                <br />
                France
                <br />
                Téléphone :{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold underline decoration-amber-600 underline-offset-4 hover:text-amber-700"
                >
                  {siteConfig.phone}
                </a>
                <br />
                Email :{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all font-semibold underline decoration-amber-600 underline-offset-4 hover:text-amber-700"
                >
                  {siteConfig.email}
                </a>
              </address>
              <dl className="grid gap-4 border-l-2 border-amber-600 pl-5 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-semibold text-slate-500">
                    Numéro SIREN
                  </dt>
                  <dd className="font-semibold text-slate-950">451 326 920</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-500">
                    Numéro SIRET
                  </dt>
                  <dd className="font-semibold text-slate-950">45132692000019</dd>
                </div>
              </dl>
            </LegalSection>

            <LegalSection
              id="directeur-publication"
              title="2. Directeur de la publication"
            >
              <p>Le directeur de la publication est :</p>
              <p>
                <strong className="text-slate-950">
                  {siteConfig.legalName}
                </strong>
              </p>
            </LegalSection>

            <LegalSection id="hebergement" title="3. Hébergement">
              <p>Le site est hébergé par :</p>
              <address className="not-italic">
                <strong className="text-slate-950">Vercel Inc.</strong>
                <br />
                440 N Barranca Avenue, Suite 4133
                <br />
                Covina, CA 91723
                <br />
                États-Unis
              </address>
              <p>
                Site internet :{" "}
                <a
                  href="https://vercel.com"
                  className="font-semibold underline decoration-amber-600 underline-offset-4 hover:text-amber-700"
                  rel="noreferrer"
                  target="_blank"
                >
                  vercel.com
                </a>
              </p>
            </LegalSection>

            <LegalSection
              id="conception-realisation"
              title="4. Conception et réalisation"
            >
              <p>Le site a été conçu et réalisé par :</p>
              <address className="not-italic leading-8">
                <strong className="text-slate-950">Christophe CHIAPPETTA</strong>
                <br />
                Adresse : Calvisson
                <br />
                Email :{" "}
                <a
                  href="mailto:christophe.chiappetta@gmail.com"
                  className="break-all font-semibold underline decoration-amber-600 underline-offset-4 hover:text-amber-700"
                >
                  christophe.chiappetta@gmail.com
                </a>
                <br />
                Site internet :{" "}
                <a
                  href="https://www.compagnondecom.fr/"
                  className="break-all font-semibold underline decoration-amber-600 underline-offset-4 hover:text-amber-700"
                  rel="noreferrer"
                  target="_blank"
                >
                  https://www.compagnondecom.fr/
                </a>
              </address>
            </LegalSection>

            <LegalSection
              id="propriete-intellectuelle"
              title="5. Propriété intellectuelle"
            >
              <p>
                L’ensemble des contenus présents sur ce site, notamment les
                textes, photographies, illustrations, éléments graphiques,
                logos, icônes, vidéos, structure et mise en page, est protégé
                par les règles applicables à la propriété intellectuelle.
              </p>
              <p>
                Sauf mention contraire, ces éléments sont la propriété de Pascal
                ALBERT ou sont utilisés avec l’autorisation de leurs titulaires
                respectifs.
              </p>
              <p>
                Toute reproduction, représentation, adaptation, modification,
                publication ou exploitation, totale ou partielle, des contenus
                du site, sur quelque support que ce soit, est interdite sans
                autorisation écrite préalable.
              </p>
              <p>
                La consultation et l’utilisation du site à des fins strictement
                personnelles et privées restent autorisées.
              </p>
            </LegalSection>

            <LegalSection
              id="informations-site"
              title="6. Informations présentées sur le site"
            >
              <p>
                Pascal ALBERT s’efforce de fournir des informations exactes et à
                jour sur ses prestations, sa zone d’intervention et ses
                coordonnées.
              </p>
              <p>
                Les informations présentées sur le site sont toutefois fournies
                à titre général et indicatif. Elles ne remplacent pas une étude
                de l’installation existante, un diagnostic sur place ou un devis
                personnalisé.
              </p>
              <p>
                Les tarifs et fourchettes tarifaires éventuellement affichés
                sont indicatifs. Ils peuvent varier selon notamment :
              </p>
              <ul className={listClassName}>
                <li>le matériel choisi ;</li>
                <li>l’état de l’installation existante ;</li>
                <li>les contraintes d’accès ;</li>
                <li>les travaux de câblage ou d’adaptation nécessaires ;</li>
                <li>la configuration du bâtiment ;</li>
                <li>les besoins exprimés par le client.</li>
              </ul>
              <p>
                Seul un devis accepté par les parties engage Pascal ALBERT sur
                le contenu et le prix d’une prestation.
              </p>
            </LegalSection>

            <LegalSection id="responsabilite" title="7. Responsabilité">
              <p>
                Pascal ALBERT ne peut garantir que le site sera accessible sans
                interruption ni erreur.
              </p>
              <p>Sa responsabilité ne pourra être engagée en cas notamment :</p>
              <ul className={listClassName}>
                <li>d’interruption temporaire du site ;</li>
                <li>de panne ou de dysfonctionnement technique ;</li>
                <li>d’erreur indépendante de sa volonté ;</li>
                <li>
                  d’utilisation inadaptée des informations présentes sur le site
                  ;
                </li>
                <li>
                  de dommage résultant d’un équipement, navigateur ou réseau
                  utilisé pour accéder au site.
                </li>
              </ul>
              <p>
                Le visiteur reste responsable de son matériel informatique, de
                sa connexion internet et de l’usage qu’il fait des informations
                disponibles sur le site.
              </p>
            </LegalSection>

            <LegalSection id="liens-externes" title="8. Liens externes">
              <p>
                Le site peut contenir des liens vers des sites ou services
                appartenant à des tiers.
              </p>
              <p>
                Pascal ALBERT n’exerce aucun contrôle sur leur contenu, leur
                disponibilité, leurs pratiques de confidentialité ou leur
                sécurité. Il ne peut donc être tenu responsable des informations
                ou services proposés sur ces sites externes.
              </p>
            </LegalSection>

            <LegalSection
              id="donnees-personnelles"
              title="9. Données personnelles"
            >
              <p>
                Le site comporte un formulaire de contact permettant de
                transmettre notamment un nom, un numéro de téléphone, une
                adresse email, une commune et un message.
              </p>
              <p>
                Les modalités de collecte, d’utilisation et de protection de ces
                informations sont détaillées dans la page{" "}
                <Link
                  href="/politique-de-confidentialite"
                  className="font-semibold underline decoration-amber-600 underline-offset-4 hover:text-amber-700"
                >
                  Politique de confidentialité
                </Link>{" "}
                accessible depuis le pied de page du site.
              </p>
              <p>
                Les personnes concernées peuvent exercer leurs droits en
                écrivant à :{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all font-bold underline decoration-amber-600 underline-offset-4 hover:text-amber-700"
                >
                  {siteConfig.email}
                </a>
              </p>
            </LegalSection>

            <LegalSection id="cookies-traceurs" title="10. Cookies et traceurs">
              <p>
                Le site n’utilise actuellement aucun outil publicitaire, aucun
                outil de mesure d’audience et aucun cookie destiné au suivi ou
                au profilage des visiteurs.
              </p>
              <p>
                Des éléments techniques strictement nécessaires au
                fonctionnement, à la sécurité ou à l’hébergement du site peuvent
                néanmoins être traités par les prestataires techniques.
              </p>
            </LegalSection>

            <LegalSection id="droit-applicable" title="11. Droit applicable">
              <p>
                Le présent site et ses mentions légales sont soumis au droit
                français.
              </p>
              <p>
                En cas de différend, les parties chercheront en priorité une
                solution amiable avant toute action judiciaire, sous réserve des
                dispositions légales impératives applicables.
              </p>
            </LegalSection>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
