export const fr = {
  nav: {
    home: 'Accueil',
    services: 'Formation & Animation',
    agrobusiness: 'Agrobusiness & Agrotourisme',
    rse: 'RSE Iriko',
    lema: 'LEMA',
    contact: 'Contact',
  },
  hero: {
    tagline: 'Vokatra tsara no tanjonay',
    title_line1: 'Développement durable,',
    title_line2: 'excellence locale',
    description:
      "Iriko.mg est une entreprise malgache engagée dans la promotion du développement durable, l'autonomisation des communautés et la valorisation du savoir-faire local.",
    cta_primary: 'Découvrir LEMA',
    cta_secondary: 'Nos services',
  },
  formation: {
    label: 'Nos services',
    title: 'Formation & Animation',
    description:
      "Nous proposons une gamme complète de services pour le développement personnel, professionnel et la cohésion d'équipe.",
    services: [
      {
        title: 'Team Building',
        desc: 'Activités de cohésion pour ONG, entreprises et familles, favorisant collaboration et leadership.',
      },
      {
        title: 'Animation Événementielle',
        desc: 'Animation personnalisée de mariages, baptêmes et fêtes, intégrant la culture malgache.',
      },
      {
        title: 'Formation Professionnelle',
        desc: 'Programmes en entrepreneuriat, leadership, gestion de projets et création de coopératives.',
      },
      {
        title: 'Coaching Personnalisé',
        desc: "Accompagnement individuel ou en groupe pour l'orientation scolaire et la carrière.",
      },
    ],
  },
  agrobusiness: {
  title: "Agrobusiness & Agrotourisme",
  description: "Notre secteur d’agrobusiness regroupe des projets innovants et durables visant à renforcer l’autonomie des communautés rurales.",
  services: {
    porcine_power: {
      title: "Porcine Power",
      desc: "Projet d’économie circulaire à Lazaina combinant élevage porcin, compost, biogaz et jardin potager, avec des formations pour les jeunes et les femmes."
    },
    tag_discovery: {
      title: "Tag Discovery",
      desc: "Voyages écotouristiques et agrotouristiques pour découvrir la nature et les pratiques agricoles de Madagascar dans une démarche responsable."
    },
    production_locale: {
      title: "Production de produits locaux",
      desc: "Production de légumes, fruits et piments avec des paysans locaux, vendus notamment dans deux mini-marchés partenaires."
    },
    transformation: {
      title: "Transformation des viandes et piments",
      desc: "Transformation de viandes et piments en produits de qualité comme saucisses, steaks et dérivés, disponibles en ligne et sur nos réseaux."
    },
    fournisseurs: {
      title: "Fournisseurs de viandes",
      desc: "Fourniture régulière de viandes de qualité aux cantines, restaurants et entreprises, en soutenant la filière locale."
    }
  }
},
  footer: {
    tagline: '« Vokatra Tsara no tanjonay »',
    mission:
      "Promouvoir le développement durable, l'autonomisation des communautés et l'écotourisme responsable à Madagascar.",
    address: {
      street: 'Lot A 17 F, Ambohitrarahaba',
      city: 'Antananarivo 103',
    },
    copyright: 'Excellence & Durabilité',
    tags: ['Madagascar', 'Écotourisme'],
  },
};

export type Dictionary = typeof fr;
