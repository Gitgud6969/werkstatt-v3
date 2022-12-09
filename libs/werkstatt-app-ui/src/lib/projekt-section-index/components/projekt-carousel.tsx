import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    height: 440,
  },

  title: {
    fontWeight: 900,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    objectFit: 'cover',
  },
  content: {
    height: '100%',
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper shadow="md" p="xl" radius="md" className={classes.card}>
      <Image
        src={image}
        alt={`Backgound image of ${title}`}
        fill
        className={classes.image}
      />
      <div className={classes.content}>
        <div>
          <Text className={classes.category} size="xs">
            {category}
          </Text>
          <Title className={classes.title}>{title}</Title>
        </div>
        <Button color="dark">Mehr Bilder</Button>
      </div>
    </Paper>
  );
}

const data = [
  {
    image: '/images/WerkstattHistorie/20-09-2006 17_56_13.JPG',
    title: '125 Jahre Karosseriebau Groth',
    category: '',
  },
  {
    image: '/images/AC_restauration2.jpg',
    title: 'AC Restauration',
    category: '',
  },
  {
    image: '/images/Kaefer_blank.jpg',
    title: 'VW Käfer',
    category: '',
  },
  {
    image: '/images/Mercedes_Transporter_lackiert.jpg',
    title: 'Mercedes Transporter',
    category: '',
  },
  {
    image: '/images/Porsche5.JPG',
    title: 'Porsche Restauration',
    category: '',
  },
  {
    image: '/images/Vespa_blank.jpg',
    title: 'Vespa',
    category: '',
  },
];

export function ProjektCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="30%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
      slideGap="xl"
      align="center"
    >
      {slides}
    </Carousel>
  );
}