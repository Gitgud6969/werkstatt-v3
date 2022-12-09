import {
  MediaQuery,
  Group,
  Card,
  Stack,
  Badge,
  Space,
  Grid,
  Text,
} from '@mantine/core';
import React from 'react';

interface DesktopContactSectionProps {
  open: string;
}

export default function DesktopContactSection(
  props: DesktopContactSectionProps
) {
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
                  <Text>069 437166 / 069 444015</Text>
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
