import { TablerIcon } from '@tabler/icons';

export interface ServicePageProps {
  content: Service;
}
export interface ServiceContent {
  services: Service[];
}

export interface Service {
  key: string;
  icon?: TablerIcon;
  link: string;
  image: string;
  title: string;
  subtitle?: string[];
  content: Content;
}

export interface Content {
  catchPhrase?: string;
  mainContent: string[];
}
