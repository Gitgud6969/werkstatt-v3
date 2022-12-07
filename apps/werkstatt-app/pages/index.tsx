import {
  ContactSection,
  FeatureSectionIndex,
  HeaderResponsive,
  HeroSectionIndex,
  ServicesSectionIndex,
} from '@werkstatt/werkstatt-app-ui';
import werkstatt_einfahrt from '../public/images/werkstatt_einfahrt_dark.jpg';

export function Index() {
  return (
    <div className="relative">
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
      <ServicesSectionIndex />
    </div>
  );
}

export default Index;
function useStyles(): { classes: any; cx: any } {
  throw new Error('Function not implemented.');
}
