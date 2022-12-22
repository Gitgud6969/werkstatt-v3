import {
  ExpandeableHeader,
  GridLayoutWithLeadingItem,
  HeroSectionSecondaryIndex,
} from '@werkstatt/werkstatt-app-ui';
import { ServicePageProps } from '@werkstatt/werkstatt-models';
import Head from 'next/head';
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
      <Head>
        <title>Willkommen bei Karosseriebau Groth</title>
      </Head>
      <ExpandeableHeader content={serviceContent} />
      <HeroSectionSecondaryIndex {...content} />
      {/* <GridLayoutWithLeadingItem /> */}
    </>
  );
}
