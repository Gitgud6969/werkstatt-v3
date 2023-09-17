import { Button, Container, Text, Title, createStyles } from '@mantine/core';
import { useRouter } from 'next/router';
import { ProjektCarousel } from './components/projekt-carousel';

/* eslint-disable-next-line */
export interface ProjektSectionIndexProps {}
const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan('sm')]: {
      fontSize: 24,
    },
  },
  description: {
    maxWidth: 600,
    margin: 'auto',

    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
}));
export function ProjektSectionIndex(props: ProjektSectionIndexProps) {
  const { classes } = useStyles();
  const { push } = useRouter();
  return (
    <>
      <Container size="lg" py="xl" mt="md">
        <Title order={2} className={classes.title} align="center" mt="sm">
          Projekt Galerie
        </Title>

        <Text
          color="dimmed"
          className={classes.description}
          align="center"
          mt="md"
        >
          Unsere Sammlung an projekten aus den letzten 30 Jahren
        </Text>
      </Container>
      <Container mx="xs" sx={() => ({ minWidth: '100%' })}>
        <ProjektCarousel />
        <Button mt="md" variant="gradient" onClick={() => push('/projekte')}>
          Mehr Bilder
        </Button>
      </Container>
    </>
  );
}

export default ProjektSectionIndex;
