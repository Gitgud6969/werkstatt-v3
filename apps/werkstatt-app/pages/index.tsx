import {
  ContactSection,
  FeatureSectionIndex,
  HeroSectionIndex,
  ServicesSectionIndex,
  ProjektSectionIndex,
  ExpandeableHeader,
  Footer,
  TeamSectionIndex,
} from '@werkstatt/werkstatt-app-ui';
import Head from 'next/head';
import werkstatt_einfahrt from '../public/images/werkstatt_einfahrt_dark.jpg';
import serviceContent from '../content/services';

export function Index() {
  return (
    <>
      <Head>
        <title>Willkommen bei Karosseriebau Groth</title>
      </Head>
      <div className="relative">
        <ExpandeableHeader content={serviceContent} />
        <HeroSectionIndex background_image={werkstatt_einfahrt} />
        <ContactSection />
        <FeatureSectionIndex />
        <ServicesSectionIndex />
        <TeamSectionIndex />
        <ProjektSectionIndex />
        <Footer
          links={[
            { label: 'Kontakt', link: '/kontakt' },
            { label: 'Impressum', link: '/impressum' },
            { label: 'Datenschutz', link: '/datenschutz' },
          ]}
        />
      </div>
    </>
  );
}

export default Index;
