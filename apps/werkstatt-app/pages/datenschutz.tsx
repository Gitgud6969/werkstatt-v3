import { Container, List, Overlay, Text, Title } from '@mantine/core';
import {
  ExpandeableHeader,
  Footer,
  useHeroSectionSecondaryStyle,
  useTextSectionClasses,
} from '@werkstatt/werkstatt-app-ui';
import serviceContent from '../content/services';

export default function UeberUns() {
  const { classes: heroSectionClasses } = useHeroSectionSecondaryStyle(
    '/images/backgroundImages/Einfahrt.jpg'
  );
  const { classes: textSectionClasses } = useTextSectionClasses();
  return (
    <div className="relative">
      <ExpandeableHeader content={serviceContent} />
      <div className={heroSectionClasses.wrapper}>
        <Overlay color="#000" opacity={0.65} zIndex={1} />

        <div className={heroSectionClasses.inner}>
          <Title
            variant="gradient"
            gradient={{ deg: 130, from: '#A97202', to: '#FAAE19' }}
            className={heroSectionClasses.title}
          >
            Datenschutz
          </Title>

          <Container size={640}>
            <Text size="lg" className={heroSectionClasses.description}></Text>
          </Container>
        </div>
      </div>
      <Container my="xl">
        <Title order={1} className={textSectionClasses.title}>
          Rechtshinweis
        </Title>
        <Text className={textSectionClasses.description}>
          Alle in den Internet-Seiten der Firma Karosseriebau Groth GmbH
          enthaltenen Angaben und Informationen wurden sorgfältig recherchiert
          und geprüft. Für Richtigkeit, Vollständigkeit und Aktualität können
          jedoch weder die Firma Karosseriebau Groth GmbH noch dritte
          Lieferanten Gewähr übernehmen. Des Weiteren behält sich die Firma
          Karosseriebau Groth GmbH das Recht vor, Änderungen oder Ergänzungen
          der bereitgestellten Informationen vorzunehmen.
        </Text>
        <Text className={textSectionClasses.description}>
          Für den Fall, dass die Firma Karosseriebau Groth GmbH - Internetseiten
          ohne Wissen der Firma Karosseriebau Groth GmbH von einer anderen
          Webseite mittels "Hyperlinks" angelinkt werden, übernimmt die Firma
          Karosseriebau Groth GmbH keine Verantwortung für Darstellungen, Inhalt
          oder irgendeine Verbindung in Internet-Seiten Dritter. Gleiches gilt
          auch für alle anderen Internet-Seiten, auf die von den Internetseiten
          der Firma Karosseriebau Groth GmbH mittels Hyperlink verwiesen wird.
        </Text>
        <Text className={textSectionClasses.description}>
          Inhalt und Struktur der Internet-Seiten der Firma Karosseriebau Groth
          GmbH sind urheberrechtlich geschützt. Die Vervielfältigung von
          Informationen oder Daten, insbesondere die Verwendung von Texten,
          Textteilen oder Bildmaterial bedarf der vorherigen Zustimmung der
          Firma Karosseriebau Groth GmbH. Rechte Dritter werden davon nicht
          beeinträchtigt.
        </Text>
      </Container>
      <Container my="xl">
        <Title order={2}>1. Schutz Ihrer Daten</Title>
        <Text className={textSectionClasses.description}>
          Der Schutz Ihrer personenbezogenen Daten hat bei uns einen hohen
          Stellenwert. Sie können unsere Webseite besuchen, ohne Angaben zu
          Ihrer Person zu machen. Wir speichern in diesem Zusammenhang keinerlei
          persönliche Daten. Um unser Angebot zu verbessern, werten wir
          lediglich statistische Daten aller Besuche aus, die jedoch keinen
          Rückschluss auf Ihre Person erlauben. Dabei werden folgende Daten
          protokolliert: Abruf von Dateien, Datum und Uhrzeit des Abrufs,
          übertragene Datenmenge, Verweildauer der Besucher auf unserer Seite,
          Bildschirmgröße der Besucher sowie genutzter Webbrowser und
          Betriebssystem. Eine Nachverfolgbarkeit der IP-Adresse wird durch
          Unkenntlichmachung der letzten 4 Ziffern unmöglich gemacht.
        </Text>
        <Text className={textSectionClasses.description}>
          Weitergehende personenbezogene Daten werden nur erfasst, wenn Sie
          diese Angaben freiwillig, etwa im Rahmen einer Kontakt- oder
          Angebotsanfrage machen.
        </Text>

        <Title order={2}>
          2. Nutzung und Weitergabe personenbezogener Daten
        </Title>
        <Text className={textSectionClasses.description}>
          Soweit Sie uns personenbezogene Daten zur Verfügung gestellt haben,
          verwenden wir diese nur zur Beantwortung Ihrer Anfragen oder zur
          Abwicklung eines Auftrages. Ihre personenbezogenen Daten werden nur an
          diejenigen Dritte weitergegeben oder übermittelt, die für die
          Abwicklung Ihres Auftrages nötig sind, wie etwa die Weitergabe Ihrer
          Daten an einen TÜV-Prüfer,Versicherungsgesellschaft oder Gutachter.
        </Text>

        <Title order={2}>3. Auskunft, Löschung, Sperrung</Title>
        <Text className={textSectionClasses.description}>
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
          gespeicherten personenbezogenen Daten, deren Herkunft und den Zweck
          der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder
          Löschung dieser Daten. Sie haben das Recht, eine erteilte Einwilligung
          mit Wirkung für die Zukunft jederzeit zu widerrufen und die Löschung
          Ihrer Daten zu verlangen.
        </Text>
        <Text className={textSectionClasses.description}>
          Die Löschung der gespeicherten personenbezogenen Daten ist solange
          nicht möglich, wie gesetzliche Bestimmungen eine Speicherung
          vorschreiben. Eine automatischer Löschvorgang wird bei uns nicht
          vorgenommen, da die gespeicherten personenbezogene Daten mit bei uns
          erwobenen Produkten oder von uns erbrachten Dienstleistungen
          kombiniert sind. Eine gewünschte Löschung würde auch die Löschung
          diese Datensätze beinhalten, so dass von uns eine
          Ersatzteilversorgung, Reparatur oder Wartung nicht mehr geleistet
          werden könnte.
        </Text>
        <Text className={textSectionClasses.description}>
          Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten
          können Sie sich jederzeit unter der im Impressum angegebenen Adresse
          und Kontaktdaten an uns wenden.
        </Text>

        <Title order={2}>4. Datensicherheit</Title>
        <Text className={textSectionClasses.description}>
          Wir werden Ihre personenbezogenen Daten durch Ergreifung aller
          technischen und organisatorischen Möglichkeiten so speichern, dass sie
          für Dritte nicht zugänglich sind. Die Kommunikation per E Mail erfolgt
          in verschlüsselter Form über ein SSL-Sicherheitszertifikat. Das
          erkennen Sie beim Aufruf unserer Seite daran, dass dem Domainnamen ein
          https:// vorangestellt wird.
        </Text>

        <Title order={2}>5. Cookies</Title>
        <Text className={textSectionClasses.description}>
          Unsere Internetseite verwendet teilweise so genannte Cookies. Cookies
          richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren.
          Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und
          sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem
          Rechner abgelegt werden und die Ihr Browser speichert.
        </Text>
        <Text className={textSectionClasses.description}>
          Die meisten von uns verwendeten Cookies sind so genannte
          „Session-Cookies“. Über das Session-Cookie wird erfasst, welche Seiten
          durch ein- und denselben Nutzer bei einem Besuch aufgerufen werden.
          Bei der Nutzung von Funktionen, die einen Login auf der Webseite
          erfordern, wird anhand des Session-Cookies festgestellt, ob der
          betreffende Nutzer eingeloggt ist oder nicht. Das Session-Cookie hat
          eine Gültigkeitsdauer bis zum Beenden Ihrer Browsersitzung (also in
          der Regel bis zum Schließen des Browsers).
        </Text>
        <Text className={textSectionClasses.description}>
          Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
          Cookies informiert werden und Cookies nur im Einzelfall erlauben, die
          Annahme von Cookies für bestimmte Fälle oder generell ausschließen
          sowie das automatische Löschen der Cookies beim Schließen des Browser
          aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität
          dieser Website eingeschränkt sein.{' '}
        </Text>

        <Title order={2}>6. Server-Log-Files</Title>
        <Text className={textSectionClasses.description}>
          Der Provider der Seiten erhebt und speichert automatisch Informationen
          in so genannten Server-Log Files, die Ihr Browser automatisch an uns
          übermittelt. Dies sind:
        </Text>
        <List>
          <List.Item>Aktuelle IP-Adresse Ihres Internetproviders</List.Item>
          <List.Item>
            Browsertyp/ Browserversion verwendetes Betriebssystem
          </List.Item>
          <List.Item>Bildschirmgröße</List.Item>
          <List.Item>Referrer URL</List.Item>
          <List.Item>Hostname des zugreifenden Rechners</List.Item>
          <List.Item>Uhrzeit der Serveranfrage</List.Item>
        </List>
        <Text className={textSectionClasses.description}>
          Diese Daten sind nicht bestimmten Personen zuordenbar. Eine
          Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
          vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen,
          wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt
          werden.
        </Text>
      </Container>
      <Footer
        links={[
          { label: 'Impressum', link: '/impressum' },
          { label: 'Datenschutz', link: '/datenschutz' },
        ]}
      />
    </div>
  );
}
