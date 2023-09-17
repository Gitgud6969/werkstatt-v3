import {
  ExpandeableHeader,
  HeroSectionSecondaryIndex,
  MetaContent,
  TextSection,
} from '@werkstatt/werkstatt-app-ui';
import { InferGetStaticPropsType } from 'next';
import serviceContent from '../../content/services';
import serviceContentStatic from '../../content/services.json';

export async function getStaticProps({ params }) {
  const content = serviceContentStatic.services.filter((service, i) => {
    return service.key === params.service;
  })[0];
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
export default function ServicePage({
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const indexId = serviceContent.services.findIndex(
    (service) => service.key === content.key
  );
  const prevService =
    indexId === 0
      ? serviceContent.services[serviceContent.services.length - 1]
      : serviceContent.services[indexId - 1];
  const nextService =
    serviceContent.services.length - 1 === indexId
      ? serviceContent.services[0]
      : serviceContent.services[indexId + 1];
  return (
    <>
      <MetaContent
        title={`${content.title} bei Karosseriebau Groth`}
        descriptions={content.seo?.description}
        tags={[]}
      />
      <ExpandeableHeader content={serviceContent} />
      <HeroSectionSecondaryIndex {...content} />
      <TextSection content={content} prev={prevService} next={nextService} />
    </>
  );
}
