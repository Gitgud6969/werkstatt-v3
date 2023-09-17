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
            Impressum
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
          Karosseriebau Groth GmbH Linnéstr. 12 <br /> 60385 Frankfurt am Main{' '}
          <br />
          Geschäftsführer: Jens Lehmann <br /> Handelsregister: Amtsgericht
          Frankfurt:
          <br />
          HRB 27674 Ust.ID-Nr.: 045 237 17828 Finanzamt Frankfurt <br />
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
