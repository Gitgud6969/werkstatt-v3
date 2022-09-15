import {
  ContactSection,
  FeatureSectionIndex,
  HeaderResponsive,
  HeroSectionIndex,
} from '@werkstatt/werkstatt-app-ui';
import werkstatt_einfahrt from '../public/images/werkstatt_einfahrt.jpg';

export function Index() {
  return (
    <>
      <HeaderResponsive
        links={[
          { link: 'home', label: 'Home' },
          { link: 'About_us', label: 'Über uns' },
          { link: 'Services', label: 'Unser Service' },
        ]}
      />
      <HeroSectionIndex background_image={werkstatt_einfahrt} />
      <ContactSection />
      <FeatureSectionIndex />
    </>
  );
}

export default Index;
