import {
  ExpandeableHeader,
  HeroSectionSecondaryIndex,
  MetaContent,
  TextSection,
} from '@werkstatt/werkstatt-app-ui';
import { ServicePageProps } from '@werkstatt/werkstatt-models';
import serviceContent from '../../content/services';
import serviceContentStatic from '../../content/services.json';

export async function getStaticProps({ params }) {
  const content = serviceContentStatic.services.filter(
    (service) => service.key === params.service
  )[0];
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
export default function ServicePage({ content }: ServicePageProps) {
  return (
    <>
      <MetaContent
        title={`${content.title} bei Karosseriebau Groth`}
        descriptions={content.seo?.descriptions}
        tags={content.seo?.tags}
      />
      <ExpandeableHeader content={serviceContent} />
      <HeroSectionSecondaryIndex {...content} />
      <TextSection content={content} />
    </>
  );
}
