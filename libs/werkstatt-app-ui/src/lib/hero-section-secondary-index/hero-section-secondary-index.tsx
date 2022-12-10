import styles from './hero-section-secondary-index.module.css';

/* eslint-disable-next-line */
export interface HeroSectionSecondaryIndexProps {
  content: 
}

export function HeroSectionSecondaryIndex(
  props: HeroSectionSecondaryIndexProps
) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to HeroSectionSecondaryIndex!</h1>
    </div>
  );
}

export default HeroSectionSecondaryIndex;
