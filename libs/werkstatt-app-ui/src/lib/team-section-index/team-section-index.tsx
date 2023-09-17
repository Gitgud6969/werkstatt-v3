import {
  Center,
  Container,
  SimpleGrid,
  Stack,
  Title,
  createStyles,
} from '@mantine/core';
import { TeamCard } from './components/team-card';

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
    paddingBottom: '10vh',
    backgroundColor: theme.colors.dark[4],
    borderBottomLeftRadius: '50% 5%',
    borderBottomRightRadius: '50% 10%',
    borderTopLeftRadius: '50% 10%',
    borderTopRightRadius: '50% 5%',
  },
}));
const services = [
  {
    link: '/kontakt',
    image: '/images/Mitarbeiter_Büro.jpg',
    title: 'Jens Lehmann',
    subtitle: ['Büro'],
  },
  {
    link: '/kontakt',
    image: '/images/Mitarbeiter_Karosseriebauer.jpg',
    title: 'Jens Lehmann',
    subtitle: ['Karosseriebauer'],
  },
  {
    link: '/kontakt',
    image: '/images/Mitarbeiter_Lackierer.jpg',
    title: 'Jens Lehmann',
    subtitle: ['Lackierer'],
  },
];
/* eslint-disable-next-line */
export interface TeamSectionIndexProps {}

export function TeamSectionIndex(props: TeamSectionIndexProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.backgroundDiv}>
      <Container className={classes.wrapper}>
        <Center>
          <Stack sx={{ flexGrow: 1 }} align={'center'}>
            <Title size={40} className={classes.title} order={2}>
              Unser Team
            </Title>
          </Stack>
        </Center>

        <SimpleGrid
          cols={3}
          spacing={20}
          breakpoints={[{ maxWidth: 900, cols: 1, spacing: 20 }]}
          style={{ marginTop: 30 }}
        >
          {services.map((service, index) => (
            <TeamCard
              key={`service-card-${index}`}
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

export default TeamSectionIndex;
