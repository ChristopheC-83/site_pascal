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
      tagline: "Une réception nette et stable dans toute la maison",
      description: "Installation, orientation et diagnostic de vos équipements de réception TV autour de Nîmes et Montpellier.",
      image: "/images/Antenne TV sur toit ensoleillé.png",
      imageAlt: "Antenne TV installée sur une toiture ensoleillée",
    },
    sections: [
      {
        eyebrow: "Installation",
        title: "Une antenne adaptée à votre habitation",
        text: "Une installation neuve ou le remplacement d’une antenne vieillissante commence par l’étude de la toiture, de l’environnement et du réseau intérieur. L’objectif est d’obtenir un signal régulier avec une fixation propre et durable.",
        image: "/images/Installation de satellite sur toiture.png",
        imageAlt: "Installation d'un équipement de réception sur une toiture",
      },
      {
        eyebrow: "Diagnostic",
        title: "Retrouver une réception TNT fiable",
        text: "Image qui se fige, chaînes absentes ou réception différente selon les pièces : l’orientation, le câblage, les raccordements ou un équipement inadapté peuvent être en cause. Un diagnostic permet d’intervenir sur l’origine réelle du problème.",
        image: "/images/Dish parabolique sur mur moderne.png",
        imageAlt: "Parabole fixée sur le mur d'une maison moderne",
      },
      {
        eyebrow: "Distribution",
        title: "Acheminer le signal vers plusieurs pièces",
        text: "Le réseau existant peut être vérifié et réorganisé pour alimenter plusieurs téléviseurs sans dégrader inutilement le signal. Les raccordements, répartiteurs et câbles sont contrôlés avant toute adaptation.",
        image: "/images/Toit moderne sous ciel bleu.png",
        imageAlt: "Toiture d'une habitation sous un ciel bleu",
      },
    ],
    pricing: [
      { label: "Diagnostic de réception", price: "À partir de 90 €", description: "Contrôle du signal et de l’installation existante." },
      { label: "Remplacement d’antenne", price: "250 € à 650 €", description: "Selon l’accès, la fixation et le matériel nécessaire." },
      { label: "Distribution intérieure", price: "150 € à 450 €", description: "Adaptation du réseau pour une ou plusieurs pièces." },
    ],
    ctaText: "Faites vérifier votre installation pour retrouver une réception TV stable et adaptée à votre logement.",
    seo: {
      title: "Installation et dépannage d’antenne TV entre Nîmes et Montpellier",
      description: "Installation, remplacement, réglage et dépannage d’antenne TV et de réception TNT entre Nîmes et Montpellier, autour d’Uchaud et selon la configuration existante.",
    },
  },
  "visiophones-interphones": {
    hero: {
      tagline: "Identifiez vos visiteurs avant d’ouvrir",
      description: "Installation et remplacement de systèmes d’interphonie pour gagner en confort et mieux contrôler les accès.",
      image: "/images/Interphone moderne et interaction quotidienne.png",
      imageAlt: "Personne utilisant un interphone moderne à l'entrée d'une habitation",
    },
    sections: [
      {
        eyebrow: "Projet neuf",
        title: "Un accès pratique depuis l’intérieur",
        text: "Un interphone ou un visiophone permet d’échanger avec un visiteur sans se déplacer jusqu’au portail. L’emplacement du poste, la distance avec l’entrée et les possibilités de câblage sont étudiés pour une installation cohérente.",
        image: "/images/Intérieur moderne avec interphone mural.png",
        imageAlt: "Interphone mural dans un intérieur contemporain",
      },
      {
        eyebrow: "Remplacement",
        title: "Moderniser une installation existante",
        text: "Un ancien combiné peut devenir difficile à entendre, présenter des coupures ou ne plus commander correctement l’ouverture. Le câblage et les équipements en place sont contrôlés afin de déterminer ce qui peut être conservé.",
        image: "/images/Moniteur de sécurité moderne et détaillé.png",
        imageAlt: "Écran intérieur moderne pour le contrôle d'un accès",
      },
      {
        eyebrow: "Contrôle des accès",
        title: "Relier le visiophone à l’ouverture du portail",
        text: "Lorsque la configuration le permet, la commande d’ouverture peut être intégrée au système. Le portail, la gâche ou le portillon sont vérifiés pour assurer une utilisation simple et éviter les incompatibilités.",
        image: "/images/Entrée moderne avec portail contemporain.png",
        imageAlt: "Entrée de maison équipée d'un portail contemporain",
      },
    ],
    pricing: [
      { label: "Diagnostic ou remplacement simple", price: "120 € à 350 €", description: "Selon le poste et le câblage réutilisable." },
      { label: "Installation d’un visiophone", price: "550 € à 1 200 €", description: "Matériel et complexité de liaison à confirmer." },
      { label: "Commande de portail associée", price: "Sur devis", description: "Selon la motorisation et les équipements existants." },
    ],
    ctaText: "Étudions une solution adaptée à votre entrée, à votre portail et à vos habitudes quotidiennes.",
    seo: {
      title: "Installation de visiophone et interphone entre Nîmes et Montpellier",
      description: "Installation et remplacement de visiophones et interphones entre Nîmes et Montpellier pour améliorer le confort, le contrôle des accès et l’ouverture de portail.",
    },
  },
  "motorisation-portail": {
    hero: {
      tagline: "Ouvrez votre portail simplement et en toute sérénité",
      description: "Motorisation, remplacement et réglage de portails battants ou coulissants, neufs ou déjà installés.",
      image: "/images/Entrée moderne avec portail contemporain.png",
      imageAlt: "Portail automatique à l'entrée d'une maison contemporaine",
    },
    sections: [
      {
        eyebrow: "Équipement",
        title: "Motoriser un portail existant",
        text: "Un portail manuel peut souvent être motorisé après vérification de son état, de sa géométrie et de ses points de fixation. Son poids, ses dimensions, son ouverture et l’alimentation disponible orientent la solution.",
        image: "/images/Mécanisme moderne de portail coulissant.png",
        imageAlt: "Mécanisme installé sur un portail coulissant",
      },
      {
        eyebrow: "Dépannage",
        title: "Réparer une motorisation défectueuse",
        text: "Un portail qui ralentit, s’arrête ou réagit mal nécessite un contrôle méthodique. L’alimentation, les sécurités, les réglages et la mécanique sont vérifiés avant de décider d’une réparation ou d’un remplacement.",
        image: "/images/Réparation du moteur de portail extérieur.png",
        imageAlt: "Intervention sur le moteur extérieur d'un portail",
      },
      {
        eyebrow: "Commandes",
        title: "Adapter les moyens d’ouverture",
        text: "Télécommandes, commande intérieure ou clavier d’accès peuvent compléter l’installation. Chaque ajout doit rester compatible avec la motorisation et préserver le fonctionnement des dispositifs de sécurité.",
        image: "/images/Clavier de sécurité moderne et épuré.png",
        imageAlt: "Clavier moderne permettant de commander un accès",
      },
    ],
    pricing: [
      { label: "Diagnostic et réglages", price: "120 € à 250 €", description: "Recherche de panne et ajustements accessibles." },
      { label: "Motorisation d’un portail existant", price: "900 € à 1 800 €", description: "Selon le portail, le moteur et l’alimentation." },
      { label: "Remplacement d’une motorisation", price: "650 € à 1 500 €", description: "Après contrôle des équipements conservables." },
    ],
    ctaText: "Faites contrôler votre portail pour choisir une motorisation adaptée ou résoudre un fonctionnement irrégulier.",
    seo: {
      title: "Motorisation de portail entre Nîmes et Montpellier",
      description: "Installation, remplacement et dépannage de motorisations pour portails battants ou coulissants entre Nîmes et Montpellier, dans le Gard et l’Hérault selon le projet.",
    },
  },
  automatismes: {
    hero: {
      tagline: "Des équipements automatisés plus simples à utiliser",
      description: "Installation, adaptation et dépannage de commandes et automatismes d’accès existants.",
      image: "/images/Réparation du boîtier de contrôle automatique.png",
      imageAlt: "Technicien intervenant sur un boîtier de contrôle automatique",
    },
    sections: [
      {
        eyebrow: "Analyse",
        title: "Comprendre le fonctionnement de l’existant",
        text: "Avant toute modification, les commandes, alimentations et organes pilotés sont identifiés. Cette étape distingue un défaut de réglage, un accessoire en panne ou un équipement devenu inadapté.",
        image: "/images/Vérification de la sécurité à domicile.png",
        imageAlt: "Vérification du fonctionnement d'un équipement automatisé",
      },
      {
        eyebrow: "Modernisation",
        title: "Faire évoluer sans tout remplacer",
        text: "Selon l’état de l’installation, certaines commandes peuvent être modernisées en conservant les éléments encore fonctionnels. La priorité reste une solution lisible, fiable et adaptée à l’usage réel.",
        image: "/images/Réparation du moteur de portail extérieur.png",
        imageAlt: "Modernisation d'un automatisme d'accès extérieur",
      },
      {
        eyebrow: "Utilisation",
        title: "Centraliser des commandes pertinentes",
        text: "Lorsque plusieurs accès ou commandes doivent fonctionner ensemble, leur compatibilité et leur logique d’utilisation sont étudiées. La centralisation n’est proposée que lorsqu’elle simplifie réellement le quotidien.",
        image: "/images/Mécanisme moderne de portail coulissant.png",
        imageAlt: "Automatisme installé sur un accès coulissant",
      },
    ],
    pricing: [
      { label: "Diagnostic d’un automatisme", price: "120 € à 250 €", description: "Contrôle des commandes et du fonctionnement." },
      { label: "Ajout ou remplacement d’une commande", price: "90 € à 350 €", description: "Selon la compatibilité et le matériel retenu." },
      { label: "Modernisation d’un système", price: "450 € à 1 600 €", description: "Étendue des éléments à adapter ou remplacer." },
    ],
    ctaText: "Présentez-nous votre équipement actuel pour identifier une adaptation simple et durable.",
    seo: {
      title: "Installation et dépannage d’automatismes entre Nîmes et Montpellier",
      description: "Installation, modernisation et dépannage d’automatismes d’accès entre Nîmes et Montpellier pour portails, commandes et équipements existants.",
    },
  },
  "alarmes-securite": {
    hero: {
      tagline: "Une protection pensée selon les lieux et les usages",
      description: "Étude, installation et amélioration de systèmes d’alarme et d’équipements de sécurité.",
      image: "/images/Boîte d'alarme moderne sur façade.png",
      imageAlt: "Sirène d'alarme installée sur la façade d'une habitation",
    },
    sections: [
      {
        eyebrow: "Étude du besoin",
        title: "Protéger les accès et les zones sensibles",
        text: "La configuration du bâtiment, ses ouvertures et les habitudes des occupants permettent de définir les zones à surveiller. Le système doit être proportionné au besoin, compréhensible et pratique au quotidien.",
        image: "/images/Caméra de sécurité et maison moderne.png",
        imageAlt: "Équipement de sécurité protégeant une maison moderne",
      },
      {
        eyebrow: "Détection",
        title: "Positionner les équipements avec cohérence",
        text: "Détecteurs et sirènes sont placés en tenant compte des passages, des volumes et des contraintes du logement. Une implantation réfléchie évite les équipements inutiles et facilite le contrôle de l’installation.",
        image: "/images/Capteur de mouvement dans un intérieur moderne.png",
        imageAlt: "Capteur de mouvement installé dans un intérieur moderne",
      },
      {
        eyebrow: "Évolution",
        title: "Améliorer un système déjà installé",
        text: "Une installation existante peut être contrôlée lorsque son fonctionnement devient irrégulier ou que les besoins changent. L’état et la compatibilité des composants sont vérifiés avant un remplacement ciblé.",
        image: "/images/Caméra de sécurité à crépuscule.png",
        imageAlt: "Équipement de sécurité extérieur au crépuscule",
      },
    ],
    pricing: [
      { label: "Diagnostic de sécurité", price: "120 € à 250 €", description: "Contrôle d’un système existant et de ses composants." },
      { label: "Protection essentielle", price: "650 € à 1 400 €", description: "Selon les accès et le nombre d’équipements." },
      { label: "Installation plus complète", price: "1 200 € à 2 800 €", description: "À préciser après étude de la configuration." },
    ],
    ctaText: "Échangeons sur les accès à protéger et les équipements présents pour définir une solution adaptée.",
    seo: {
      title: "Installation d’alarme entre Nîmes et Montpellier",
      description: "Installation et remplacement de systèmes d’alarme et de sécurité entre Nîmes et Montpellier pour les habitations et les accès.",
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
