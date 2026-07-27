const fallbackSiteUrl = "https://www.pascal-domotique.fr";

function normalizeSiteUrl(value: string | undefined) {
  try {
    const url = new URL(value?.trim() || fallbackSiteUrl);

    url.hash = "";
    url.search = "";

    return url.toString().replace(/\/+$/, "");
  } catch {
    return fallbackSiteUrl;
  }
}

export const siteConfig = {
  name: "Pascal Albert",
  legalName: "Pascal ALBERT",
  description:
    "Installation et dépannage d’antennes, visiophones, motorisations de portail et systèmes de sécurité entre Nîmes et Montpellier.",
  url: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  phone: "06 07 56 85 38",
  phoneInternational: "+33607568538",
  phoneHref: "tel:+33607568538",
  alternatePhone: "04 66 51 34 94",
  email: "ent.albertpascal@hotmail.fr",
  address: {
    streetAddress: "4 rue de la Manzanille",
    postalCode: "30620",
    addressLocality: "Uchaud",
    addressCountry: "FR",
  },
  areaServed: ["Uchaud", "Nîmes", "Montpellier", "Gard", "Hérault"],
  openGraphImage: {
    url: "/images/Toit moderne sous ciel bleu clair.png",
    width: 1672,
    height: 941,
    alt: "Toits du secteur d’intervention de Pascal Albert autour d’Uchaud",
  },
} as const;

export function absoluteUrl(path = "/") {
  const normalizedPath = path.replace(/^\/+/, "");

  return new URL(normalizedPath, `${siteConfig.url}/`).toString();
}
