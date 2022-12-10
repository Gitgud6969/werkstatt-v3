import { Divider, Space } from '@mantine/core';
import {
  ContactSection,
  FeatureSectionIndex,
  HeaderResponsive,
  HeroSectionIndex,
  ServicesSectionIndex,
  ProjektSectionIndex,
  ExpandeableHeader,
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
