import {
  Anchor,
  Badge,
  Card,
  Grid,
  Group,
  MediaQuery,
  SimpleGrid,
  Space,
  Stack,
  Text,
  createStyles,
} from '@mantine/core';

interface DesktopContactSectionProps {
  open: string;
}

const useStyles = createStyles((theme) => ({
  contactItemBorder: {
    paddingBottom: theme.spacing.xs,
    borderBottom: `1px solid ${theme.colors.dark[4]}`,
  },
  contactLink: {
    color: theme.white,
  },
}));

export default function DesktopContactSection(
  props: DesktopContactSectionProps
) {
  const { classes } = useStyles();
  return (
    <MediaQuery smallerThan={'md'} styles={{ display: 'none' }}>
      <Group
        position="center"
        sx={() => ({
          transform: 'translateY(-25%)',
          flexWrap: 'wrap',
        })}
      >
        <Group
          position="apart"
          spacing="xl"
          grow
          sx={() => ({
            alignItems: 'start',
          })}
        >
          <Card
            p="lg"
            radius="md"
            sx={(theme) => ({
              backgroundColor: theme.colors.dark[6],
            })}
          >
            <Stack align="stretch" justify="start">
              <Text size="xl" weight={800}>
                Öffnungszeiten
              </Text>
              <Badge>{props.open}</Badge>
              <Space h="xs"></Space>
              <SimpleGrid cols={2} className={classes.contactItemBorder}>
                <Text>Mo - Do</Text>
                <Text>8:00 - 17:00 Uhr</Text>
              </SimpleGrid>

              <SimpleGrid cols={2}>
                <Text>Fr</Text>
                <Text>8:00 - 14:00 Uhr</Text>
              </SimpleGrid>
            </Stack>
          </Card>
          <Card
            p="lg"
            radius="md"
            sx={(theme) => ({
              backgroundColor: theme.colors.dark[6],
            })}
          >
            <Stack align="stretch" justify="start">
              <Text size="xl" weight={800}>
                Kontakt
              </Text>
              <Space h="xs"></Space>
              <Grid gutter={5} columns={3}>
                <Grid.Col span={1}>
                  <Text>Telefon</Text>
                </Grid.Col>
                <Grid.Col span={2}>
                  <Anchor className={classes.contactLink} href="tel:+49 437166">
                    069 437166
                  </Anchor>
                </Grid.Col>

                <Grid.Col span={1}>
                  <Text>Email</Text>
                </Grid.Col>
                <Grid.Col span={2}>
                  <Text>groth1898@t-online.de</Text>
                </Grid.Col>
              </Grid>
            </Stack>
          </Card>
        </Group>
      </Group>
    </MediaQuery>
  );
}
