import {
  Badge,
  Card,
  createStyles,
  Grid,
  MediaQuery,
  Space,
  Stack,
  Tabs,
  Text,
} from '@mantine/core';
import { IconClockHour10, IconPhone } from '@tabler/icons';
import React from 'react';
const useStyles = createStyles((theme) => ({
  mobile_tab_container: {
    minWidth: '90vw',
    maxWidth: '90vw',
    minHeight: '300px',
    backgroundColor: theme.colors.dark[6],
    transform: 'translateY(-25%)',
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
              Contact
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="oeffnungszeiten" pt="xs">
            <Stack
              align="stretch"
              justify="start"
              sx={() => ({
                marginTop: '20px',
              })}
            >
              <Badge>{props.open}</Badge>
              <Space h="xs"></Space>
              <Grid gutter={5} columns={3}>
                <Grid.Col span={1}>
                  <Text>Mo, Di, Mi </Text>
                </Grid.Col>
                <Grid.Col span={2}>
                  <Text>10:00 - 19:00 Uhr</Text>
                </Grid.Col>

                <Grid.Col span={1}>
                  <Text>Do, Fr</Text>
                </Grid.Col>
                <Grid.Col span={2}>
                  <Text>8:00 - 17:00 Uhr</Text>
                </Grid.Col>
              </Grid>

              <Text>(Mittagspause 15:00 - 16:00 Uhr)</Text>
            </Stack>
          </Tabs.Panel>

          <Tabs.Panel value="contact" pt="xs">
            <Stack align="stretch" justify="start">
              <Space h="xs"></Space>
              <Grid gutter={5} columns={3}>
                <Grid.Col span={1}>
                  <Text>Telefon:</Text>
                </Grid.Col>
                <Grid.Col span={2}>
                  <Text>069 437166 / 069 444015</Text>
                </Grid.Col>

                <Grid.Col span={1}>
                  <Text>Email:</Text>
                </Grid.Col>
                <Grid.Col span={2}>
                  <Text>groth1898@t-online.de</Text>
                </Grid.Col>
              </Grid>
            </Stack>
          </Tabs.Panel>
        </Tabs>
      </Card>
    </MediaQuery>
  );
}
