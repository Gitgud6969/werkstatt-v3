import {
  IconCarCrash,
  IconChartPie3,
  IconHammer,
  IconHistory,
  IconSpray,
  IconTool,
  IconZoomCheck,
} from '@tabler/icons';

export const serviceContent = {
  services: [
    {
      key: 'reparaturen',
      icon: IconHammer,
      link: '/services/reparaturen',
      image: '/images/backgroundImages/Neue_Bremsscheibe1.jpg',
      title: 'KFZ-Reparaturen',
      subtitle: ['Tüv Abnahme', 'Bremse, Auspuff, Stoßdämpfer'],
      content: {
        catchPhrase: 'Eine Schraube locker?',
        mainContent: [
          'Wir garantieren Ihnen, dass wir nach Herstellerrichtlinien arbeiten und unsere Qualitätsstandards den Vergleich mit anderen für sich entscheiden.',
          'Wir reparieren Ihr Fahrzeug im Falle eines Unfalls genauso wie bei einfachen Verschleißerscheinungen. Die Spanne der vorgenommenen Instandsetzungen reicht von Teilen wie einem Scheiebdach und einer Zentralverriegelung über Auspuff und Bremsen bis hin zu Stoßdämpfern und Achsvermessung.',
          'Neue Studien und Versuche des Allianz Zentrums für Technik haben gezeigt:',
          '"Bei fachgerechter Reparatur bleicht die SIcherheit von Fahrzeugen auch nach mittelschweren Schäden in vollem Umfang erhalten. Um dies sicherzustellen, müssen sich Werkstätten an die Herstellervorgaben halten und Ersatzteile in Qualität der Originalteile verwenden" - Dr. Christoph Lauterwasser, Leiter des Allianz Zentrum für Technik',
        ],
      },
    },
    {
      key: 'inspektion',
      icon: IconZoomCheck,
      link: '/services/inspektion',
      image: '/images/backgroundImages/Neue_Bremsscheibenbelaege.JPG',
      title: 'Inspektionen',
      subtitle: [
        'Ölwechsel',
        'Filterwechsel',
        'Lämpchen tauschen',
        'Bremsflüssigkeitwechseln',
      ],
      content: {
        catchPhrase: 'Sand im Getriebe?',
        mainContent: [
          'Unsere Inspektionen an Ihrem Fahrzeug führen wir immer nach Hersteller-Richtlinien und nach der Kilometerlaufleistung in Ihrem Serviceheft durch.',
          'Sollten Sie darüber hinaus weitere Inspektionen wünschen, ist dies natürlich auch möglich.',
        ],
      },
    },
    {
      key: 'karosseriebau',
      icon: IconCarCrash,

      link: '/services/karosseriebau',
      image: '/images/backgroundImages/Schlichthammer_Karosseriefeile.jpg',
      title: 'Karosseriebau',
      subtitle: ['Ausbeulen', 'Unfallinstandsetzung', 'Karosserie Anfertigung'],
      content: {
        catchPhrase: 'Eine Delle im Kotflügel?',
        mainContent: [
          'Der Karosseriebau gliedert sich bei uns in die Unfallinstandsetzung und das Bauen neuer Ersatzteile für zum Beispiel Ihren Oldtimer. Falls nötig, bestellen wir für Sie Ersatzteile in der Qualität der Originalteile.',
          'Im ersten Stock unseres Firmengebäudes befinden sich Arbeitsräume, in denen alle nötigen Spezialwerkzeuge zur Metallbearbeitung auf ihren Einsatz warten. Auf diese Weise können Blechteile, die es nicht oder nicht mehr zu kaufen gibt, individuell hergestellt und direkt ein Stockwerk tiefer in unserer Werkstatt verbaut werden. Das ermöglicht uns ein schnelles und unabhängiges Arbeiten an Ihrem Fahrzeug. Auch Polster- und Sattlerarbeiten werden von uns übernommen, wenn Sie zum Beispiel ein neues Verdeck für Ihr geliebtes Cabrio benötigen.',
        ],
      },
    },
    {
      key: 'lackierarbeiten',
      icon: IconSpray,

      link: '/services/lackierarbeiten',
      image: '/images/backgroundImages/Porsche_spachteln_lackiert2.jpg',
      title: 'Lackierarbeiten',
      subtitle: ['Einfarbiges Auto', 'Zweifarbiges Auto', 'Buntes Auto'],
      content: {
        catchPhrase: 'Der Lack ist ab?',
        mainContent: [
          'Wir lackieren für Sie nicht nur Ihr Auto, sondern bieten Ihnen auch die Möglichkeit, Ihr Fahrrad und Ihre Möbel in einem neuen farblichen Outfit erscheinen zu lassen. Jegliche Materialien, wie Metall und Holz, werden von uns nach Ihren Vorstellungen neu gestaltet.',
          'Für die von uns durchgeführten Lackierarbeiten verwenden wir ausschließlich Lacke von dem Hersteller PPG, um Unverträglichkeiten auszuschließen. Es handelt sich dabei um Wasserbasislacke, die die VOC-Richtlinien erfüllen und umweltfreundlich sind. Wir arbeiten bei Ganzlackierungen gerne mit einem 2-Schicht-Farbsystem. Um die Kratzfestigkeit und Haltbarkeit zu erhöhen, kommt ein Keramikklarlack zum Einsatz.',
          'Die Farbtongenauigkeit der Lacke ist von großer Bedeutung für uns, damit wir Ihnen bei Lackierungen nach Schäden einen einheitlichen Farbton und eine sichere Farbtonreproduzierbarkeit garantieren können. Auch außergewöhnliche Automobilfarbtöne sind für uns kein Problem.',
          'Um zu ermöglichen, dass weder Farbton- noch Effektunterschiede im Vergleich zur Originallackierung zu sehen sind, ist es zum Teil nötig, angrenzende Teilflächen mit zu lackieren. Die daraus resultierende Mehrarbeit wird selbstverständlich vorher mit Ihnen abgesprochen.',
        ],
      },
    },
    {
      key: 'autoglas',
      icon: IconChartPie3,

      link: '/services/autoglas',
      image: '/images/Porsche6.JPG',
      title: 'Autoglas',
      subtitle: ['Scheibentausch'],
      content: {
        catchPhrase: 'Ein Sprung im Glas?',
        mainContent: [
          'Aus Sicherheitsgründen sollten Sie kaputte Windschutz-, Seiten- oder Heckscheiben so schnell wie möglich reparieren lassen. Wir helfen Ihnen günstig und effektiv.',
          'Wir reparieren oder ersetzen Fahrzeugglas an Ihrem PKW, egal um welchen Typ und Hersteller es sich handelt. Wir geben Ihnen Garantie auf die Haltbarkeit der Reparatur und der Scheibe und rechnen direkt mit Ihrer Versicherung ab.',
        ],
      },
    },
    {
      key: 'tuning',
      icon: IconTool,

      link: '/services/tuning',
      image: '/images/drag days 2009 Bitburg 027kopie.jpg',
      title: 'Tuning',
      subtitle: ['Breiter', 'Schneller', 'Höher'],
      content: {
        catchPhrase: 'Nicht genug Pferde unter der Motorhaube?',
        mainContent: [],
      },
    },
    {
      key: 'restauration',
      icon: IconHistory,

      link: '/services/restauration',
      image: '/images/Vw_Pritsche.jpg',
      title: 'Restauration',
      subtitle: ['Rost', 'Polster', 'Zeitgemäß'],
      content: {
        catchPhrase: 'Zu schön für die Garage?',
        mainContent: [
          'Moderne Autos bestehen aus Materialien, die man oft nicht reparieren kann. Wenn etwas kaputt geht, wird es einfach ausgetauscht. Das ist bei Oldtimern anders.',
          'In unserem Betrieb werden nicht nur die Karosserien aufgearbeitet, sondern auch die Motoren und Innenräume alter Fahrzeuge. Das ist zeitaufwendig und arbeitsintensiv, lohnt sich jedoch, denn ein gut erhaltener und gepflegter Oldtimer ist eine hervorragende Geldanlage und ein Liebhaberstück.',
          'Wir sind sehr stolz darauf, dass von uns restaurierte Fahrzeuge, die an einschlägigen Oldtimer Veranstaltungen und Wettbewerben teilgenommen haben, alle Pokalsieger geworden sind',
        ],
      },
    },
    {
      key: 'schadensservice',
      link: '/services/schadensservice',
      image: '/images/Vw_Pritsche.jpg',
      title: 'Schadensservice',
      subtitle: ['Dein', 'Crash', 'mein', 'Cash'],
      content: {
        mainContent: [
          'Wenn Sie einen Unfall hatten, sind Sie bei uns genau in den richtigen Händen. Wir arbeiten nach den Herstellerrichtlinien und geben auf unsere Reparaturen 6 Jahre Garantie.',
        ],
      },
    },
    {
      key: 'gutachten',
      link: '/services/gutachten',
      image: '/images/Vw_Pritsche.jpg',
      title: 'Gutachten',
      content: {
        mainContent: [
          'Auf Ihren Wunsch hin können wir für Schadensfälle und Schätzungen sehr erfahrene, externe Gutachter beauftragen, mit denen wir seit vielen Jahren erfolgreich zusammen arbeiten.',
        ],
      },
    },
    {
      key: 'huundau',
      link: '/services/hu-und-au',
      image: '/images/Vw_Pritsche.jpg',
      title: 'HU und AU',
      content: {
        mainContent: [
          'Die Haupt- und Abgasuntersuchung führen wir an ihrem Fahrzeug TÜV gerecht durch, legen vor Reparaturbeginn selbstverständlich einen Kostenvoranschlag an und führen Ihr Fahrzeug beim TÜV vor.',
        ],
      },
    },
  ],
};
export default serviceContent;
