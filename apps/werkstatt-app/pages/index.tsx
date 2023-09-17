import {
  ContactSection,
  ExpandeableHeader,
  FeatureSectionIndex,
  Footer,
  HeroSectionIndex,
  ProjektSectionIndex,
  ServicesSectionIndex,
  TeamSectionIndex,
} from '@werkstatt/werkstatt-app-ui';
import Head from 'next/head';
import serviceContent from '../content/services';
import werkstatt_einfahrt from '../public/images/werkstatt_einfahrt_dark.jpg';

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
            { label: 'Impressum', link: '/impressum' },
            { label: 'Datenschutz', link: '/datenschutz' },
          ]}
        />
      </div>
    </>
  );
}

export default Index;
