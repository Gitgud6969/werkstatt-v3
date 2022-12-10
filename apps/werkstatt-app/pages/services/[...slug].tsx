import { HeroSectionSecondaryIndex } from '@werkstatt/werkstatt-app-ui';
import serviceContent from '../../content/services.json';

export async function getStaticProps({ params }) {
  const content = serviceContent.services.filter(
    (service) => service.key === params
  );
  return {
    props: {
      content: content,
    },
  };
}

export async function getStaticPaths() {
  const servicePaths = serviceContent.services.map((service) => {
    return { params: { service: service.key } };
  });

  return {
    paths: servicePaths,
    fallback: false,
  };
}
interface ServicePageProps {
  content: {
    key: string;
    link: string;
    image: string;
    title: string;
    subtitle: string[];
  };
}
export default function ServicePage({ content }: ServicePageProps) {
  return (
    <HeroSectionSecondaryIndex content={content}/> 
  );
}
