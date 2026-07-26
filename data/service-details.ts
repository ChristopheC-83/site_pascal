import { services, type Service } from "@/data/services";

export type ServiceSection = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
};

export type ServicePrice = {
  label: string;
  price: string;
  description: string;
};

type EditorialDetails = {
  hero: {
    tagline: string;
    description: string;
    image: string;
    imageAlt: string;
  };
  sections: ServiceSection[];
  pricing: ServicePrice[];
  ctaText: string;
  seo: { title: string; description: string };
};

export type DetailedService = Service & EditorialDetails;

const editorialBySlug: Record<Service["slug"], EditorialDetails> = {
  "antennes-reception-tv": {
    hero: {
      tagline: "Une réception TV fiable, adaptée à votre installation",
      description:
        "J’installe, règle et dépanne vos équipements de réception TV autour d’Uchaud, entre Nîmes et Montpellier.",
      image: "/images/Antenne TV sur toit ensoleillé.png",
      imageAlt: "Antenne TV installée sur une toiture ensoleillée",
    },

    sections: [
      {
        eyebrow: "Installation",
        title: "Une antenne adaptée à votre logement",
        text: "Pour une installation neuve ou le remplacement d’une antenne vieillissante, j’étudie la toiture, l’environnement et le réseau intérieur existant. L’objectif est d’obtenir une réception fiable avec une fixation propre, solide et adaptée à votre habitation.",
        image: "/images/Installation de satellite sur toiture.png",
        imageAlt: "Installation d'un équipement de réception sur une toiture",
      },
      {
        eyebrow: "Dépannage",
        title: "Identifier l’origine des problèmes de réception",
        text: "Image qui se fige, chaînes absentes ou réception différente selon les pièces : le problème peut venir de l’orientation de l’antenne, du câblage, des raccordements ou d’un équipement devenu inadapté. Je contrôle l’installation afin d’intervenir sur la cause réelle de la panne.",
        image: "/images/Toit moderne sous ciel bleu clair.png",
        imageAlt: "Parabole fixée sur le mur d'une maison moderne",
      },
      {
        eyebrow: "Distribution",
        title: "Distribuer le signal dans plusieurs pièces",
        text: "Je peux vérifier et adapter le réseau existant pour alimenter plusieurs téléviseurs tout en préservant la qualité du signal. Les câbles, prises, raccordements et répartiteurs sont contrôlés avant de proposer les modifications nécessaires.",
        image: "/images/Toit moderne sous ciel bleu.png",
        imageAlt: "Toiture d'une habitation sous un ciel bleu",
      },
    ],

    pricing: [
      {
        label: "Diagnostic de réception",
        price: "À partir de 80 €",
        description:
          "Déplacement, contrôle du signal, de l’antenne et du réseau intérieur existant.",
      },
      {
        label: "Remplacement d’antenne",
        price: "250 € à 500 €",
        description:
          "Selon l’accès à la toiture, la fixation, le câblage et le matériel nécessaire.",
      },
      {
        label: "Adaptation du réseau TV",
        price: "À partir de 150 €",
        description:
          "Ajout ou modification de prises, câbles, raccordements ou répartiteurs.",
      },
    ],

    ctaText:
      "Décrivez votre problème de réception ou votre projet d’installation afin d’obtenir un premier avis et un devis adapté.",

    seo: {
      title:
        "Installation et dépannage d’antenne TV entre Nîmes et Montpellier",
      description:
        "Installation, remplacement, réglage et dépannage d’antenne TV et de réception TNT entre Nîmes et Montpellier, autour d’Uchaud.",
    },
  },
  "visiophones-interphones": {
    hero: {
      tagline: "Identifiez vos visiteurs avant d’ouvrir",
      description:
        "J’installe et remplace vos interphones et visiophones pour améliorer le confort, sécuriser les accès et faciliter l’ouverture du portail.",
      image: "/images/Interphone moderne et interaction quotidienne.png",
      imageAlt:
        "Personne utilisant un interphone moderne à l'entrée d'une habitation",
    },
    sections: [
      {
        eyebrow: "Installation",
        title: "Répondre à vos visiteurs sans vous déplacer",
        text: "Un interphone ou un visiophone permet d’identifier un visiteur, d’échanger avec lui et, selon l’installation, de commander l’ouverture du portail ou du portillon. J’étudie l’emplacement des équipements, la distance avec l’entrée et les possibilités de câblage afin de proposer une installation adaptée à votre habitation.",
        image: "/images/Intérieur moderne avec interphone mural.png",
        imageAlt: "Interphone mural dans un intérieur contemporain",
      },
      {
        eyebrow: "Remplacement",
        title: "Moderniser une installation devenue peu fiable",
        text: "Son faible, image dégradée, coupures ou commande d’ouverture défaillante : un ancien système peut perdre en confort et en fiabilité. Je contrôle le câblage et les équipements existants afin de déterminer ce qui peut être conservé et ce qui doit être remplacé.",
        image: "/images/Moniteur de sécurité moderne et détaillé.png",
        imageAlt: "Écran intérieur moderne pour le contrôle d'un accès",
      },
      {
        eyebrow: "Ouverture",
        title: "Piloter le portail ou le portillon depuis le visiophone",
        text: "Lorsque la configuration le permet, le visiophone peut commander l’ouverture d’un portail, d’un portillon ou d’une gâche électrique. Je vérifie la compatibilité avec la motorisation et les équipements existants pour garantir une utilisation simple et fiable.",
        image: "/images/Entrée moderne avec portail contemporain.png",
        imageAlt: "Entrée de maison équipée d'un portail contemporain",
      },
    ],
    pricing: [
      {
        label: "Diagnostic d’interphonie",
        price: "À partir de 80 €",
        description:
          "Contrôle du poste intérieur, de la platine extérieure, du câblage et de la commande d’ouverture.",
      },
      {
        label: "Remplacement d’un interphone",
        price: "250 € à 600 €",
        description:
          "Selon le matériel choisi et la possibilité de réutiliser le câblage existant.",
      },
      {
        label: "Installation d’un visiophone",
        price: "550 € à 800 €",
        description:
          "Selon la distance, le câblage, le matériel et la liaison avec le portail ou le portillon.",
      },
    ],
    ctaText:
      "Décrivez votre entrée, votre installation actuelle et le fonctionnement souhaité afin d’obtenir une solution adaptée et un devis personnalisé.",
    seo: {
      title:
        "Installation de visiophone et interphone entre Nîmes et Montpellier",
      description:
        "Installation et remplacement de visiophones et interphones entre Nîmes et Montpellier pour améliorer le confort, le contrôle des accès et l’ouverture de portail.",
    },
  },
  "motorisation-portail": {
    hero: {
      tagline: "Automatisez votre portail pour gagner en confort au quotidien",
      description:
        "J’installe, remplace et dépanne les motorisations de portails battants ou coulissants, sur une installation neuve ou existante.",
      image: "/images/Entrée moderne avec portail contemporain.png",
      imageAlt: "Portail automatique à l'entrée d'une maison contemporaine",
    },

    sections: [
      {
        eyebrow: "Installation",
        title: "Motoriser un portail existant",
        text: "Un portail manuel peut souvent être motorisé à condition que sa structure, ses fixations et son fonctionnement soient adaptés. Je vérifie son poids, ses dimensions, son type d’ouverture, l’état des gonds ou du rail ainsi que l’alimentation disponible avant de proposer une solution.",
        image: "/images/Mécanisme moderne de portail coulissant.png",
        imageAlt: "Mécanisme installé sur un portail coulissant",
      },
      {
        eyebrow: "Dépannage",
        title: "Identifier la cause d’un portail qui fonctionne mal",
        text: "Portail lent, arrêt en cours de mouvement, ouverture irrégulière ou télécommande sans effet : la panne peut venir de l’alimentation, des cellules de sécurité, des réglages, de la carte électronique ou de la mécanique. Je contrôle l’ensemble avant de recommander une réparation ou un remplacement.",
        image: "/images/Réparation du moteur de portail extérieur.png",
        imageAlt: "Intervention sur le moteur extérieur d'un portail",
      },
      {
        eyebrow: "Commandes",
        title: "Choisir les moyens d’ouverture adaptés",
        text: "Télécommandes, clavier à code, commande intérieure ou liaison avec un visiophone peuvent compléter l’installation. Je vérifie la compatibilité avec la motorisation existante et le bon fonctionnement des dispositifs de sécurité.",
        image: "/images/Interphone moderne et interaction quotidienne.png",
        imageAlt: "Clavier moderne permettant de commander un accès",
      },
    ],

    pricing: [
      {
        label: "Diagnostic de motorisation",
        price: "À partir de 80 €",
        description:
          "Contrôle de l’alimentation, des sécurités, des réglages et du fonctionnement mécanique.",
      },
      {
        label: "Motorisation d’un portail existant",
        price: "900 € à 1 900 €",
        description:
          "Selon le type de portail, le moteur, l’alimentation et les travaux d’adaptation nécessaires.",
      },
      {
        label: "Remplacement d’une motorisation",
        price: "700 € à 1 600 €",
        description:
          "Selon les éléments réutilisables, la motorisation choisie et l’état de l’installation existante.",
      },
    ],

    ctaText:
      "Décrivez votre portail et son fonctionnement actuel afin d’obtenir un premier avis sur la motorisation ou le dépannage à prévoir.",

    seo: {
      title: "Motorisation de portail entre Nîmes et Montpellier",
      description:
        "Installation, remplacement et dépannage de motorisations pour portails battants ou coulissants entre Nîmes et Montpellier, dans le Gard et l’Hérault selon le projet.",
    },
  },
  "alarmes-securite": {
    hero: {
      tagline: "Une protection adaptée à votre habitation",
      description:
        "J’étudie, installe et améliore vos systèmes d’alarme et équipements de sécurité selon la configuration des lieux et vos habitudes.",
      image: "/images/Vérification de la sécurité à domicile.png",
      imageAlt:
        "Main tenant un smartphone affichant les images de caméras de sécurité",
    },

    sections: [
      {
        eyebrow: "Étude",
        title: "Protéger les accès et les zones sensibles",
        text: "Chaque habitation présente des accès, des volumes et des habitudes différents. J’étudie les ouvertures, les zones de passage et les contraintes du logement afin de proposer une protection adaptée, simple à utiliser et proportionnée au besoin.",
        image: "/images/Caméra de sécurité et maison moderne.png",
        imageAlt: "Maison équipée d'un dispositif de sécurité extérieur",
      },
      {
        eyebrow: "Détection",
        title: "Positionner les équipements au bon endroit",
        text: "Détecteurs, sirènes et éléments de commande doivent être installés de manière cohérente pour surveiller les zones utiles sans multiplier les équipements. Je tiens compte des passages, des volumes et de l’usage quotidien du logement.",
        image: "/images/Capteur de mouvement dans un intérieur moderne.png",
        imageAlt: "Capteur de mouvement installé dans un intérieur moderne",
      },
      {
        eyebrow: "Pilotage",
        title: "Garder un œil sur votre habitation à distance",
        text: "Selon les équipements installés, vous pouvez consulter les caméras et recevoir des alertes directement sur votre smartphone. Je configure le système pour que son utilisation reste simple et adaptée à vos besoins.",
        image: "/images/Moniteur de sécurité moderne et détaillé.png",
        imageAlt:
          "Ecran affichant les images de caméras de sécurité",
      },
    ],

    pricing: [
      {
        label: "Diagnostic d’un système d’alarme",
        price: "À partir de 80 €",
        description:
          "Contrôle de la centrale, des détecteurs, des sirènes et des équipements de commande.",
      },
      {
        label: "Protection essentielle",
        price: "650 € à 1 400 €",
        description:
          "Pour une installation simple, selon le nombre d’accès et d’équipements nécessaires.",
      },
      {
        label: "Installation complète",
        price: "1 200 € à 2 800 €",
        description:
          "Selon la surface, les zones à protéger, les détecteurs et les équipements retenus.",
      },
    ],

    ctaText:
      "Décrivez les accès à protéger, la configuration du logement et les équipements déjà présents afin d’obtenir une première estimation.",

    seo: {
      title: "Installation d’alarme entre Nîmes et Montpellier",
      description:
        "Installation et remplacement de systèmes d’alarme et de sécurité entre Nîmes et Montpellier pour les habitations et les accès.",
    },
  },
};

export const detailedServices: DetailedService[] = services.map((service) => ({
  ...service,
  ...editorialBySlug[service.slug],
}));

export function getDetailedService(slug: string) {
  return detailedServices.find((service) => service.slug === slug);
}
