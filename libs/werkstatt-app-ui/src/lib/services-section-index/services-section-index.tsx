import {
  Container,
  SimpleGrid,
  Title,
  Text,
  Highlight,
  Center,
  Stack,
  createStyles,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  title: {
    lineHeight: 1,
    textAlign: 'center',
    marginTop: theme.spacing.xl,
  },
  highlight: {
    backgroundColor: theme.fn.variant({
      variant: 'light',
      color: theme.primaryColor,
    }).background,
    padding: 5,
    paddingTop: 0,
    borderRadius: theme.radius.sm,
    display: 'inline-block',
    color: theme.colorScheme === 'dark' ? theme.white : 'inherit',
  },
  supTitle: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 800,
    fontSize: theme.fontSizes.sm,
    color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
      .color,
    letterSpacing: 0.5,
  },
  wrapper: {
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
  },
}));

/* eslint-disable-next-line */
export interface ServicesSectionIndexProps {}

export function ServicesSectionIndex(props: ServicesSectionIndexProps) {
  const { classes } = useStyles();

  return (
    <Container size="md" className={classes.wrapper}>
      <Center>
        <Stack sx={{ flexGrow: 1 }} align={'center'}>
          <Text className={classes.supTitle}>Unsere Dienstleistungen</Text>

          <Title className={classes.title} order={2}>
            Wir machen <span className={classes.highlight}>nicht</span> nur
            Karosserie!
          </Title>
        </Stack>
      </Center>

      <SimpleGrid
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: 550, cols: 1, spacing: 40 }]}
        style={{ marginTop: 30 }}
      ></SimpleGrid>
    </Container>
  );
}

export default ServicesSectionIndex;
