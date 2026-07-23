export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "antennes-reception-tv",
    title: "Antennes & réception TV",
    shortDescription:
      "Installation, réglage et dépannage de vos équipements de réception.",
    image: "/images/Antenne TV sur toit ensoleillé.png",
    imageAlt: "Antenne TV installée sur le toit d'une maison",
  },
  {
    slug: "visiophones-interphones",
    title: "Visiophones & interphones",
    shortDescription:
      "Des solutions simples et fiables pour identifier et accueillir vos visiteurs.",
    image: "/images/Interphone moderne et interaction quotidienne.png",
    imageAlt: "Visiophone moderne installé à l'entrée d'une habitation",
  },
  {
    slug: "motorisation-portail",
    title: "Motorisation de portail",
    shortDescription:
      "Installation et dépannage de motorisations pour un accès pratique au quotidien.",
    image: "/images/Mécanisme moderne de portail coulissant.png",
    imageAlt: "Mécanisme de motorisation d'un portail coulissant",
  },
  {
    slug: "automatismes",
    title: "Automatismes",
    shortDescription:
      "Mise en service, entretien et réparation de vos systèmes automatisés.",
    image: "/images/Réparation du boîtier de contrôle automatique.png",
    imageAlt: "Intervention technique sur un boîtier de contrôle automatique",
  },
  {
    slug: "alarmes-securite",
    title: "Alarmes & sécurité",
    shortDescription:
      "Des équipements adaptés pour mieux protéger votre habitation ou vos locaux.",
    image: "/images/Boîte d'alarme moderne sur façade.png",
    imageAlt: "Boîtier d'alarme fixé sur la façade d'une maison",
  },
];
