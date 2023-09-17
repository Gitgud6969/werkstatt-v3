import { Container, Overlay, Text, Title } from '@mantine/core';
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
            Über uns
          </Title>

          <Container size={640}>
            <Text size="lg" className={heroSectionClasses.description}></Text>
          </Container>
        </div>
      </div>
      <Container my="xl">
        <Title order={3} className={textSectionClasses.title}>
          Die Werkstatt
        </Title>
        <Text className={textSectionClasses.description}>
          Nach einer sehr bewegten Vergangenheit und dem Überstehen zweier
          Weltkriege wurde der Betrieb im Jahr 1996 von Jens Lehmann übernommen.
          Den angestammten Namen ‚Karosseriebau Groth’ behielt er bei.
        </Text>
        <Text className={textSectionClasses.description}>
          Der Betrieb verstand sich und versteht sich auch heute noch als
          Ausbildungsbetrieb. Jens Lehmann möchte nicht nur den Beruf des
          Karosseriebauers am Leben erhalten, sondern auch die Leidenschaft
          vermitteln, die er für seine Arbeit aufbringt. Die Ergebnisse seiner
          Arbeiten sprechen für sich und drücken die Lust aus, mit der er dabei
          ist.
        </Text>
        <Title order={3} className={textSectionClasses.title}>
          Das Team
        </Title>
        <Text className={textSectionClasses.description}>
          Bei unserem Team setzen wir auf fachliche und menschliche Kompetenz
          Hier finden Sie individuelle Betreuung in familiärer Atmosphäre. Seit
          über 100 Jahren steht unser Name für Qualität.
        </Text>
        <Text className={textSectionClasses.description}>
          Wir sind stolz darauf, dass viele Familien seit der Firmengründung zu
          uns kommen. ist.
        </Text>
        <Text className={textSectionClasses.description}>
          In Frankfurt sind wir als traditionsreicher Meisterbetrieb bekannt
        </Text>
        <Text fs="italic">Jens Lehmann Chef</Text>
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
