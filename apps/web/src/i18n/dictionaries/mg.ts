import { Dictionary } from './fr';

export const mg: Dictionary = {
  nav: {
    home: 'Fandraisana',
    services: 'Famolavolana & Fampiofanana',
    agrobusiness: "Orin'asa Fambolena & Fizahantany",
    rse: 'RSE Iriko',
    lema: 'LEMA',
    contact: 'Fifandraisana',
  },
  hero: {
    tagline: 'Vokatra tsara no tanjonay',
    title_line1: 'Fampandrosoana maharitra,',
    title_line2: 'fahaiza-manao eo an-toerana',
    description:
      "Iriko.mg dia orinasa malagasy mirona amin'ny fampandrosoana maharitra, ny fisian-tenan'ny vondron'olona ary ny fampiroboroboana ny fahaiza-manao eo an-toerana.",
    cta_primary: 'Hijery LEMA',
    cta_secondary: 'Ny toloranay',
  },
  formation: {
    label: 'Ny tolorantsika',
    title: 'Fampiofanana & Fampiharana',
    description:
      "Manolotra tolotra feno izahay ho an'ny fampandrosoana manokana, matihanina ary ny firaisankina ao anatin'ny ekipa.",
    services: [
      {
        title: 'Fiaraha-miasa',
        desc: "Hetsika firaisankina ho an'ny fikambanana, orinasa ary fianakaviana, mampiroborobo ny fiaraha-miasa sy ny fitarihana.",
      },
      {
        title: 'Fanomanana Hetsika',
        desc: 'Fanomanana manokana ny mariazy, batisa ary fetim-pifaliana, mampiditra ny kolontsaina malagasy.',
      },
      {
        title: 'Fampiofanana Matihanina',
        desc: "Fandaharana amin'ny fandraharahana, fitarihana, fitantanana tetikasa ary famoronana kooperativa.",
      },
      {
        title: 'Fanofanana Manokana',
        desc: "Fanarahamaso tsirairay na antokon'olona ho an'ny fitondrana ara-pianariana sy ny asa.",
      },
    ],
  },
  rse: {
    title: 'RSE IRIKO',
    description: 'Ny Iriko.mg dia mandray anjara mavitrika amin\'ny andraikitra ara-tsosialy ho an\'ny orinasa (RSE) miaraka amin\'ny fikambanana sy orinasa isan-karazany. Manome fiofanana praktika momba ny agroalimentaire sy agrobusiness izahay mba hanamafisana ny fahaizan’ny mponina eo an-toerana.',
    badge: 'Fandraisana anjara RSE',
    tagline: 'Ho an\'ny hoavy mirindra eto Madagasikara',
    details: 'Amin\'ny alalan\'ny tranokala "Porcine Power" any Akany Avoko sy Bevalala, manome fahafahana faharoa ho an\'ny tanora izay voasakana amin\'ny fianarana agrobusiness izahay.',
    cta_button: "Asa tsara iray, eto",
    donation_form: {
      title: 'Hamita ny fanohananao',
      name_placeholder: 'Anarana feno',
      email_placeholder: 'Adiresy mailakao',
      ref_placeholder: 'Reference-n\'ny fandoavana',
      protocol: 'Protokoly - Azo antoka',
      cancel: 'Hanafoana',
      submit: 'Hamita ny fanomezana',
      success_notice: 'Mailaka nalefa soa aman-tsara ho an\'ny',
      error_fill: "Fenoy azafady tsara.",
      email_message: "Efa voaray tsara ny fanirianao hanome fanomezana tamin'ny alalan'ny",
      email_thanks: "Misaotra anao tamin'ny fanohanana!",
      ref_missing: "Tsy misy reference nampidirina"
    },
    receipt: {
      title: 'Fanohanana Iriko',
      subtitle: 'Mombamomba ny famindrana vola',
      recipient_label: 'Mpandray',
      recipient_name: 'IRIKO SARL',
      account_label: 'Kaonty',
      quick_code: 'Kaody Haingana',
      scan_help: 'Skanina mba hanamarina ny famindrana amin’ny app-nao'
    }
  },
  agrobusiness: {
    title: "Fambolena sy fiompiana ary fizahan-tany ara-pambolena",
    description: "Ny sehatry ny fambolena sy fiompiana ataonay dia mampiray ireo tetikasa vaovao sy maharitra izay mikendry ny hanamafy ny fahavitan-tenan'ny fiarahamonina ambanivohitra..",
    services: {
      porcine_power: {
        title: "Porcine Power",
        desc: "Tetikasa toekarena mihodina ao Lazaina mampifandray fiompiana kisoa, fanodinana fako ho zezika sy biogaz, ary fambolena zaridaina."
      },
      tag_discovery: {
        title: "Tag Discovery",
        desc: "Fitsangatsanganana écotouristique sy agrotouristique hahafantarana ny natiora sy ny fomba fambolena eto Madagasikara."
      },
      production_locale: {
        title: "Famokarana vokatra eto an-toerana",
        desc: "Famokarana legioma, voankazo ary sakay miaraka amin’ny tantsaha eo an-toerana, amidy amin’ny mini-marché mpiara-miombon’antoka."
      },
      transformation: {
        title: "Fanodinana hena sy sakay",
        desc: "Fanodinana hena sy sakay ho vokatra toy ny saosisy, steak ary vokatra hafa, amidy amin’ny tambajotra sy amin’ny Internet."
      },
      fournisseurs: {
        title: "Famatsiana hena",
        desc: "Famatsiana hena kalitao ho an’ny cantine, trano fisakafoanana ary orinasa, manohana ny sehatra famokarana eto an-toerana."
      }
    }
  },
  lema: {
    label: "Fanavaozana eo amin'ny Tontolon'ny Fambolena",
    title: "LEMA : Ny rohy mivantana eo aminao sy ny tany",
    description: "Mitadiava sehatra fanaovana famandrihana mialoha (pré-commande) miavaka, natao hananganana tetezana mangarahara eo aminao sy ny tantsaha mpamokatra eo an-toerana. Amboary araka ny sitraponao ny vokatrao ary tohano ny fambolena maharitra.",
    cta: "Hahita ny fampisehoana ny famandrihana",
    badge: {
      percentage: "100%",
      text: "Natoraly"
    },
    steps: [
      {
        title: "Fanaovana araka ny sitrapo",
        desc: "Fidio ny vokatrao, ny karazana zezika (ohatra: zezika komposta) ary ny toerana fambolena."
      },
      {
        title: "Fanarahana akaiky (fotoana tena izy)",
        desc: "Fomba iray ahafahanao manaraka ny dingana rehetra, manomboka amin'ny famafazana voa ka hatramin'ny fijinjana."
      },
      {
        title: "Kalitao azo antoka",
        desc: "Vokatra mivantana, mangarahara ary tsy misy mpanelanelana tsy ilaina."
      }
    ]
  },
  preCommande: {
    hero: {
      badge: "Produits 100% Bio",
      title: "Exotic Vegetables",
      subtitle: "ORGANIC",
      quote: "De la terre à votre table, contrôlez votre production en choisissant vos propres paramètres de culture.",
      btnDiscover: "Découvrir LEMA",
      btnView: "Voir les récoltes",
      qualityBadge: "GARANTIE"
    },
    modal: {
      title: "À propos de LEMA",
      slogan: "L'Agriculture Intelligente au bout des doigts.",
      description: "LEMA est une plateforme innovante qui permet à chacun de devenir producteur agricole à distance. Nous combinons la technologie et l'agriculture biologique pour vous offrir un contrôle total sur vos cultures.",
      points: {
        transparency: "Transparence : Suivez la croissance de vos légumes en temps réel.",
        ethics: "Éthique : Des méthodes 100% bio et respectueuses de l'environnement.",
        local: "Local : Soutenez l'agriculture malgache tout en assurant votre sécurité alimentaire."
      },
      btnClose: "J'ai compris"
    },
    features: [
      { title: "Livraison Locale", desc: "Partout à Madagascar", icon: "🚚" },
      { title: "Paiement Sécurisé", desc: "50% pré-commande", icon: "🛡️" },
      { title: "Garantie Remboursement", desc: "Si perte de récolte", icon: "💰" },
      { title: "Suivi Réel", desc: "Directement du champ", icon: "⚡" }
    ],

    footer: {
      whyChooseUs: {
        title: "Nahoana no mifidy anay ?",
        description: "Avy any an-tsaha mivantana eo ambony latabatrao, fanomezan-toky ho an'ny vokatra tsara sy mangarahara.",
        slogan: "Vokatra tsara no tanjonay",
        features: {
          fresh: {
            title: "Vokatra vao",
            desc: "Voajinja amin'ny fotoana maha-matsiro azy sy avy any amin'ny mpamokatra mpiara-miasa aminay."
          },
          healthy: {
            title: "Mahasalama",
            desc: "Tsy misy fanafody simika, fambolena manaja ny fahasalamanao."
          },
          natural: {
            title: "Natoraly 100%",
            desc: "Masomboly voafantina mba hanome tsiro tena izy sy nentim-paharazana."
          },
          quality: {
            title: "Kalitao tsara indrindra",
            desc: "Sivinin'ireo teknisianinay tsara ny baiko tsirairay alohan'ny hanaterana azy."
          }
        }
      },
      brand: {
        name: "LEMA",
        description: "LEMA dia sehatra ahafahanao mamandrika mialoha ny vokatry ny tany, mampifandray mivantana ny mpanjifa sy ny mpamokatra."
      },
      newsletter: {
        title: "Vaovao farany",
        desc: "Aza tara amin'ireo fotoana fijinjana manaraka.",
        placeholder: "Ny mailakao",
        btn: "Handray"
      },
      hours: {
        title: "Ora fiasana",
        weekdays: { label: "Alatsinainy - Zoma", time: "8h00 - 18h00" },
        saturday: { label: "Asabotsy", time: "8h00 - 12h00" },
        sunday: { label: "Alahady", time: "Mihidy" }
      },
      contact: {
        title: "Mifandraisa aminay",
        location: "Lot A 17 F, Ambohitrarahaba, Antananarivo 103, Madagascar",
        phone: "261 34 913 7059 / +261 34 385 8543  ",
        email: "irikomg@iriko.org"
      },
      copyright: "© 2026 Plateforme LEMA - Zo rehetra voatokana."
    }
  },
  footer: {
    tagline: '« Vokatra Tsara no tanjonay »',
    mission:
      "Mampiroborobo ny fampandrosoana maharitra, ny fisian-tenan'ny vondron'olona ary ny fizahan-tany misy fiambenana eto Madagasikara.",
    address: {
      street: 'Lot A 17 F, Ambohitrarahaba',
      city: 'Antananarivo 103',
    },
    copyright: 'Fahendrena & Maharitra',
    tags: ['Madagasikara', 'Fizahan-tany'],
  },
};
