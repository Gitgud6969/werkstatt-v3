import {
  Container,
  SimpleGrid,
  Title,
  Text,
  Center,
  Stack,
  createStyles,
} from '@mantine/core';
import { ServiceCard } from './components/service-card';

const useStyles = createStyles((theme) => ({
  title: {
    lineHeight: 1,
    textAlign: 'center',
    marginTop: theme.spacing.xl,
  },
  highlight: {
    backgroundColor: theme.fn.variant({
      variant: 'light',
      color: theme.colors.dark[0],
    }).background,
    padding: 5,
    paddingTop: 0,
    borderRadius: theme.radius.sm,
    display: 'inline-block',
    color: theme.white,
  },
  supTitle: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 800,
    fontSize: theme.fontSizes.sm,
    color: theme.colors['gold'][0],
    letterSpacing: 0.5,
  },
  wrapper: {
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
  },
  backgroundDiv: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.dark[6],
  },
}));
const services = [
  {
    link: '/services/kfz',
    image: '/images/backgroundImages/Neue_Bremsscheibe1.jpg',
    title: 'KFZ-Reparaturen',
    subtitle: ['Tüv Abnahme', 'Bremse, Auspuff, Stoßdämpfer'],
  },
  {
    link: '/services/inspektion',
    image: '/images/backgroundImages/Neue_Bremsscheibenbelaege.jpg',
    title: 'Inspektionen',
    subtitle: [
      'Ölwechsel',
      'Filterwechsel',
      'Lämpchen tauschen',
      'Bremsflüssigkeitwechseln',
    ],
  },
  {
    link: '/services/karosseriebau',
    image: '/images/backgroundImages/Schlichthammer_Karosseriefeile.jpg',
    title: 'Karosseriebau',
    subtitle: ['Ausbeulen', 'Unfallinstandsetzung', 'Karosserie Anfertigung'],
  },
  {
    link: '/services/lackierarbeiten',
    image: '/images/backgroundImages/Porsche_spachteln_lackiert2.jpg',
    title: 'Lackierarbeiten',
    subtitle: ['Einfarbiges Auto', 'Zweifarbiges Auto', 'Buntes Auto'],
  },
  {
    link: '/services/autoglas',
    image: '/images/Porsche6.jpg',
    title: 'Autoglas',
    subtitle: ['Scheibentausch'],
  },
  {
    link: '/services/tuning',
    image: '/images/drag days 2009 Bitburg 027kopie.jpg',
    title: 'Tuning',
    subtitle: ['Breiter', 'Schneller', 'Höher'],
  },
  {
    link: '/services/restauration',
    image: '/images/Vw_Pritsche.jpg',
    title: 'Restauration',
    subtitle: ['Rost', 'Polster', 'Zeitgemäß'],
  },
];
/* eslint-disable-next-line */
export interface ServicesSectionIndexProps {}

export function ServicesSectionIndex(props: ServicesSectionIndexProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.backgroundDiv}>
      <Container size="lg" className={classes.wrapper}>
        <Center>
          <Stack sx={{ flexGrow: 1 }} align={'center'}>
            <Title size={40} className={classes.title} order={2}>
              Dienstleistungen
            </Title>
            <Text className={classes.supTitle}>
              Wir machen <span className={classes.highlight}>nicht</span> nur
              Karosserie!
            </Text>
          </Stack>
        </Center>

        <SimpleGrid
          cols={3}
          spacing={20}
          breakpoints={[{ maxWidth: 900, cols: 1, spacing: 20 }]}
          style={{ marginTop: 30 }}
        >
          {services.map((service) => (
            <ServiceCard
              title={service.title}
              link={service.link}
              subtitle={service.subtitle}
              image={service.image}
            />
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
}

export default ServicesSectionIndex;
