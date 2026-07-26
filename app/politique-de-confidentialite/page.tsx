import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Politique de confidentialité",
  description:
    "Consultez la politique de confidentialité du site de Pascal Albert et les informations relatives au traitement des demandes de contact et de devis.",
  path: "/politique-de-confidentialite",
});

function PolicySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id}>
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

const listClassName = "ml-5 list-disc space-y-2 pl-3 marker:text-amber-700";

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-stone-50">
        <article className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <header className="border-b border-slate-300 pb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
              Protection des données
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Politique de confidentialité
            </h1>
            <p className="mt-6 text-sm font-semibold text-slate-600">
              Dernière mise à jour : 26 juillet 2026
            </p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700">
              La présente politique de confidentialité explique comment les
              données personnelles transmises sur ce site sont collectées et
              utilisées.
            </p>
          </header>

          <div className="mt-12 space-y-12">
            <PolicySection
              id="responsable-traitement"
              title="1. Responsable du traitement"
            >
              <p>Le responsable du traitement des données est :</p>
              <address className="not-italic">
                <strong className="text-slate-950">
                  {siteConfig.legalName}
                </strong>
                <br />
                {siteConfig.address.streetAddress}
                <br />
                {siteConfig.address.postalCode}{" "}
                {siteConfig.address.addressLocality}
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
            </PolicySection>

            <PolicySection
              id="donnees-collectees"
              title="2. Données collectées"
            >
              <p>
                Lorsque vous utilisez le formulaire de contact ou de demande de
                devis, les informations suivantes peuvent être collectées :
              </p>
              <ul className={listClassName}>
                <li>votre nom ;</li>
                <li>votre numéro de téléphone ;</li>
                <li>votre adresse email ;</li>
                <li>la prestation qui vous intéresse ;</li>
                <li>votre commune ;</li>
                <li>le contenu de votre message.</li>
              </ul>
              <p>
                Vous devez renseigner au moins un moyen de contact entre votre
                numéro de téléphone et votre adresse email.
              </p>
              <p>
                Des données techniques limitées peuvent également être traitées
                par l’hébergeur afin d’assurer le fonctionnement, la sécurité et
                la protection du site contre les usages abusifs.
              </p>
            </PolicySection>

            <PolicySection id="finalites" title="3. Finalités du traitement">
              <p>
                Les informations transmises sont utilisées uniquement pour :
              </p>
              <ul className={listClassName}>
                <li>répondre à votre demande ;</li>
                <li>
                  échanger avec vous au sujet de votre projet ou d’un dépannage
                  ;
                </li>
                <li>préparer une estimation ou un devis ;</li>
                <li>
                  assurer le suivi de la relation commerciale lorsqu’une
                  prestation est engagée ;
                </li>
                <li>
                  protéger le formulaire contre les envois automatisés et les
                  abus.
                </li>
              </ul>
              <p>
                Les données collectées ne sont pas utilisées pour envoyer des
                newsletters ou des communications publicitaires non sollicitées.
              </p>
            </PolicySection>

            <PolicySection id="base-legale" title="4. Base légale">
              <p>
                Le traitement des demandes de devis ou d’intervention repose sur
                l’exécution de mesures précontractuelles prises à votre demande.
              </p>
              <p>
                Le traitement des autres demandes de contact et les mesures de
                protection du formulaire reposent sur l’intérêt légitime de
                Pascal ALBERT à répondre aux sollicitations reçues et à
                sécuriser son site internet.
              </p>
            </PolicySection>

            <PolicySection
              id="destinataires"
              title="5. Destinataires des données"
            >
              <p>
                Les informations transmises sont destinées uniquement à Pascal
                ALBERT.
              </p>
              <p>
                Elles peuvent être traitées par les prestataires techniques
                nécessaires au fonctionnement du site :
              </p>
              <ul className={listClassName}>
                <li>
                  <strong className="text-slate-950">Vercel</strong>, pour
                  l’hébergement et l’exécution du site ;
                </li>
                <li>
                  <strong className="text-slate-950">Resend</strong>, pour la
                  transmission des demandes envoyées depuis le formulaire.
                </li>
              </ul>
              <p>
                Ces prestataires interviennent uniquement dans le cadre de leurs
                services techniques. Les données ne sont ni vendues, ni louées,
                ni communiquées à des partenaires commerciaux.
              </p>
            </PolicySection>

            <PolicySection
              id="transferts-hors-union-europeenne"
              title="6. Transfert de données hors de l’Union européenne"
            >
              <p>
                Certains prestataires techniques utilisés par le site sont
                établis aux États-Unis ou peuvent y traiter des données.
              </p>
              <p>
                Resend indique que ses principales opérations de traitement ont
                lieu aux États-Unis et prévoit des mécanismes contractuels
                destinés à encadrer les transferts de données depuis l’Union
                européenne.
              </p>
              <p>
                Les transferts éventuels sont réalisés dans le cadre des
                garanties prévues par la réglementation applicable.
              </p>
            </PolicySection>

            <PolicySection
              id="duree-conservation"
              title="7. Durée de conservation"
            >
              <p>
                Le site ne conserve aucune donnée personnelle dans une base de
                données.
              </p>
              <p>
                Les informations transmises par le formulaire sont envoyées par
                email à Pascal ALBERT afin de permettre le traitement de votre
                demande.
              </p>
              <p>
                Lorsqu’une demande ne débouche pas sur une prestation, les
                emails et échanges associés sont supprimés lorsqu’ils ne sont
                plus utiles au suivi de la demande.
              </p>
              <p>
                Lorsqu’un devis est accepté ou qu’une prestation est réalisée,
                certaines informations peuvent être conservées plus longtemps
                afin d’assurer le suivi de la relation commerciale et de
                respecter les obligations légales, comptables ou fiscales
                applicables.
              </p>
              <p>
                Les prestataires techniques utilisés pour l’hébergement et
                l’envoi des emails peuvent également conserver temporairement
                certaines données techniques dans le cadre du fonctionnement, de
                la sécurité et de la traçabilité de leurs services.
              </p>
            </PolicySection>

            <PolicySection id="cookies" title="8. Cookies et mesure d’audience">
              <p>Le site n’utilise actuellement :</p>
              <ul className={listClassName}>
                <li>aucun outil de mesure d’audience ;</li>
                <li>aucun cookie publicitaire ;</li>
                <li>aucun outil de profilage ;</li>
                <li>
                  aucun traceur destiné à suivre votre navigation à des fins
                  commerciales.
                </li>
              </ul>
              <p>
                Aucune bannière de consentement aux cookies n’est donc affichée.
              </p>
              <p>
                Cette politique devra être mise à jour si un outil d’analyse,
                une carte interactive, une vidéo externe, un service
                publicitaire ou tout autre traceur est ajouté ultérieurement.
              </p>
            </PolicySection>

            <PolicySection id="droits" title="9. Vos droits">
              <p>
                Conformément à la réglementation applicable à la protection des
                données personnelles, vous pouvez demander :
              </p>
              <ul className={listClassName}>
                <li>l’accès aux données vous concernant ;</li>
                <li>la rectification de données inexactes ou incomplètes ;</li>
                <li>
                  l’effacement de vos données, lorsque les conditions sont
                  réunies ;
                </li>
                <li>la limitation du traitement ;</li>
                <li>
                  l’opposition à certains traitements fondés sur l’intérêt
                  légitime ;
                </li>
                <li>la portabilité des données, lorsqu’elle est applicable.</li>
              </ul>
              <p>
                Pour exercer vos droits, vous pouvez contacter :{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all font-bold underline decoration-amber-600 underline-offset-4 hover:text-amber-700"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>
                Afin d’éviter qu’une autre personne exerce vos droits à votre
                place, un justificatif d’identité pourra être demandé uniquement
                lorsque cela est nécessaire pour vérifier votre identité.
              </p>
              <p>
                Une réponse vous sera apportée dans le délai prévu par la
                réglementation.
              </p>
            </PolicySection>

            <PolicySection
              id="reclamation-cnil"
              title="10. Réclamation auprès de la CNIL"
            >
              <p>
                Si vous estimez que vos données personnelles ne sont pas
                traitées conformément à la réglementation, vous pouvez
                introduire une réclamation auprès de la Commission nationale de
                l’informatique et des libertés, la CNIL.
              </p>
            </PolicySection>

            <PolicySection id="securite" title="11. Sécurité">
              <p>
                Des mesures techniques raisonnables sont mises en œuvre afin de
                limiter les accès non autorisés et les envois abusifs, notamment
                :
              </p>
              <ul className={listClassName}>
                <li>transmission du formulaire par une route serveur ;</li>
                <li>conservation de la clé d’envoi email côté serveur ;</li>
                <li>validation des données reçues ;</li>
                <li>limitation de la longueur des champs ;</li>
                <li>
                  protection anti-spam par champ invisible et délai minimal de
                  soumission ;
                </li>
                <li>échappement des contenus intégrés aux emails.</li>
              </ul>
              <p>
                Aucune méthode de transmission ou de stockage ne pouvant
                garantir une sécurité absolue, seules les données utiles à la
                gestion de la demande sont collectées.
              </p>
            </PolicySection>

            <PolicySection
              id="modification-politique"
              title="12. Modification de la politique"
            >
              <p>
                La présente politique peut être modifiée afin de tenir compte
                d’une évolution du site, des services utilisés ou de la
                réglementation.
              </p>
              <p>
                La date de dernière mise à jour figurant en haut de la page
                permet d’identifier la version actuellement applicable.
              </p>
            </PolicySection>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
