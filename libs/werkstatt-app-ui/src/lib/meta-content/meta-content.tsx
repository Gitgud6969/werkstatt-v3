import Head from 'next/head';
import styles from './meta-content.module.css';

/* eslint-disable-next-line */
interface MetaTagsSearch {
  language: string;
  keys: string[];
}
interface MetaDescriptions {
  language: string;
  description: string;
}

export interface MetaContentProps {
  title: string;
  descriptions: MetaDescriptions[];
  tags: MetaTagsSearch[];
}

export function MetaContent(props: MetaContentProps) {
  return (
    <Head>
      <title>{props.title}</title>
      {props.descriptions?.map((metadescription) => (
        <meta
          name="description"
          lang={metadescription.language}
          content={metadescription.description}
        />
      ))}
      {props.tags?.map((metadescription) => (
        <meta
          name="description"
          lang={metadescription.language}
          content={metadescription.keys.join(',')}
        />
      ))}
    </Head>
  );
}

export default MetaContent;
