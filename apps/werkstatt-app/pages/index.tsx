import { Divider, Space } from '@mantine/core';
import {
  ContactSection,
  FeatureSectionIndex,
  HeaderResponsive,
  HeroSectionIndex,
  ServicesSectionIndex,
  ProjektSectionIndex,
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
      <ProjektSectionIndex />
      <Space h={'lg'}></Space>
      <Space h={'lg'}></Space>
      <Space h={'lg'}></Space>
      <Space h={'lg'}></Space>
      <Space h={'lg'}></Space>
      <Space h={'lg'}></Space>
      <Space h={'lg'}></Space>
      <Space h={'lg'}></Space>
      <Space h={'lg'}></Space>
      <Space h={'lg'}></Space>
      <Space h={'lg'}></Space>
      <Space h={'lg'}></Space>
      <Space h={'lg'}></Space>
      <Space h={'lg'}></Space>
      <Space h={'lg'}></Space>
      <Space h={'lg'}></Space>
      <Space h={'lg'}></Space>
      <Space h={'lg'}></Space>
      <Space h={'lg'}></Space>
    </div>
  );
}

export default Index;
