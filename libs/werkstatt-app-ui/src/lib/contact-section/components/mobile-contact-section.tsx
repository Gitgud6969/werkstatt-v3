import {
  Anchor,
  Badge,
  Card,
  createStyles,
  Grid,
  MediaQuery,
  SimpleGrid,
  Space,
  Stack,
  Tabs,
  Text,
} from '@mantine/core';
import { IconClockHour10, IconPhone } from '@tabler/icons';
const useStyles = createStyles((theme) => ({
  mobile_tab_container: {
    margin: 'auto',
    minWidth: '90vw',
    maxWidth: '90vw',
    minHeight: '300px',
    backgroundColor: theme.colors.dark[6],
    transform: 'translateY(-25%)',
  },
  contactItemBorder: {
    paddingBottom: theme.spacing.xs,
    borderBottom: `1px solid ${theme.colors.dark[4]}`,
  },
  contactLink: {
    color: theme.white,
  },
}));

interface MobileContactSectionProps {
  open: string;
}

export default function MobileContactSection(props: MobileContactSectionProps) {
  const { classes, theme } = useStyles();

  return (
    <MediaQuery largerThan={'md'} styles={{ display: 'none' }}>
      <Card p="lg" radius="md" className={classes.mobile_tab_container}>
        <Tabs defaultValue="oeffnungszeiten">
          <Tabs.List>
            <Tabs.Tab
              value="oeffnungszeiten"
              icon={
                <IconClockHour10 size={14} style={{ marginRight: '5px' }} />
              }
            >
              Öffnungszeiten
            </Tabs.Tab>
            <Tabs.Tab
              value="contact"
              icon={<IconPhone size={14} style={{ marginRight: '5px' }} />}
            >
              <Text>Kontakt</Text>
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="oeffnungszeiten" pt="xs">
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
          </Tabs.Panel>

          <Tabs.Panel value="contact" pt="xs">
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
                  <Anchor className={classes.contactLink} href="tel:069437166">
                    069 437166
                  </Anchor>
                </Grid.Col>

                <Grid.Col span={1}>
                  <Text>Email</Text>
                </Grid.Col>
                <Grid.Col span={2}>
                  <Anchor
                    className={classes.contactLink}
                    href="mailto:groth1898@t-online.de"
                  >
                    groth1898@t-online.de
                  </Anchor>
                </Grid.Col>
              </Grid>
            </Stack>
          </Tabs.Panel>
        </Tabs>
      </Card>
    </MediaQuery>
  );
}
