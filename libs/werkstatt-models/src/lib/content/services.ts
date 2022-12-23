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
  secondaryImage?: string;
  title: string;
  subtitle?: string[];
  content: Content;
  seo?: {
    descriptions: {
      language: string;
      description: string;
    }[];
    tags: {
      language: string;
      keys: string[];
    }[];
  };
}

export interface Content {
  catchPhrase?: string;
  mainContent: string[];
}
