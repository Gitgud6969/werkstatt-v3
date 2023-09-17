import { Overlay, Paper, SimpleGrid, Title, createStyles } from '@mantine/core';
import {
  ExpandeableHeader,
  useHeroSectionSecondaryStyle,
} from '@werkstatt/werkstatt-app-ui';
import Image from 'next/image';
import images from '../content/images.json';
import serviceContent from '../content/services';

const useStyles = createStyles((theme) => ({
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    objectFit: 'cover',
  },
  card: {
    position: 'relative',
    height: 440,
    overflow: 'hidden',
  },
}));

export default function Projekte() {
  const { classes } = useStyles();
  const { classes: heroSectionClasses } = useHeroSectionSecondaryStyle(
    '/images/backgroundImages/Einfahrt.jpg'
  );
  return (
    <>
      <ExpandeableHeader content={serviceContent} />
      <div className={heroSectionClasses.wrapper}>
        <Overlay color="#000" opacity={0.65} zIndex={1} />

        <div className={heroSectionClasses.inner}>
          <Title
            variant="gradient"
            gradient={{ deg: 130, from: '#A97202', to: '#FAAE19' }}
            className={heroSectionClasses.title}
          >
            Impressionen
          </Title>
        </div>
      </div>
      <SimpleGrid cols={4} p="xl">
        {images.map((imageurl) => (
          <Paper
            key={imageurl}
            shadow="md"
            p="xl"
            radius="md"
            className={classes.card}
          >
            <Image
              src={`/images/${imageurl}`}
              alt={`Backgound image of ${imageurl}`}
              quality={40}
              fill
              className={classes.image}
            />
          </Paper>
        ))}
      </SimpleGrid>
    </>
  );
}
