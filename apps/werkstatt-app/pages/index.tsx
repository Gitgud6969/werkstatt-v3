import { Divider, Space } from '@mantine/core';
import {
  ContactSection,
  FeatureSectionIndex,
  HeaderResponsive,
  HeroSectionIndex,
  ServicesSectionIndex,
  ProjektSectionIndex,
  ExpandeableHeader,
  Footer,
  TeamSectionIndex,
} from '@werkstatt/werkstatt-app-ui';
import werkstatt_einfahrt from '../public/images/werkstatt_einfahrt_dark.jpg';

export function Index() {
  return (
    <div className="relative">
      <ExpandeableHeader />

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
  );
}

export default Index;
