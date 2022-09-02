import {
  Container,
  Center,
  Group,
  Card,
  Text,
  Space,
  Stack,
  Badge,
} from '@mantine/core';
import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface ContactSectionProps {}

function isValid(date: Date, opening: Date, closing: Date) {
  const h = date.getHours();
  const m = date.getMinutes();
  console.log(date, opening, closing);
  return (
    (opening.getHours() < h ||
      (opening.getHours() == h && opening.getMinutes() <= m)) &&
    (h < closing.getHours() ||
      (h === closing.getHours() && m <= closing.getMinutes()))
  );
}

const openingHours = [
  {
    opening: new Date('October 29, 2022 10:00:00'),
    closing: new Date('October 29, 2022 19:00:00'),
  },
  {
    opening: new Date('October 30, 2022 10:00:00'),
    closing: new Date('October 30, 2022 19:00:00'),
  },
  {
    opening: new Date('October 31, 2022 10:00:00'),
    closing: new Date('19:00:00'),
  },
  {
    opening: new Date('September 1, 2022 8:00:00'),
    closing: new Date('September 1, 2022 17:00:00'),
  },
  {
    opening: new Date('September 2, 2022 8:00:00'),
    closing: new Date('September 2, 2022 17:00:00'),
  },
];
const mittagsPause = {
  opening: new Date('September 2, 2022 15:00:00'),
  closing: new Date('September 2, 2022 16:00:00'),
};

function getOpeningHours(handleOpening: (state: string) => void) {
  const today = new Date();
  const day = today.getDay();
  if (day >= 6) {
    handleOpening('Geschlossen');
    return;
  }
  if (isValid(today, mittagsPause.opening, mittagsPause.closing)) {
    handleOpening('Mittagspause!');
    return;
  }
  console.log(day);
  if (
    isValid(today, openingHours[day - 1].opening, openingHours[day - 1].closing)
  ) {
    handleOpening('Geöffnet');
    return;
  }
  handleOpening('Geschlossen');
}

export function ContactSection(props: ContactSectionProps) {
  const [open, setOpen] = useState('Geöffnet');
  const handleOpening = (state: string) => {
    setOpen(state);
  };
  useEffect(() => {
    getOpeningHours(handleOpening);
  }, []);
  return (
    <Container
      id="contact_section"
      className="page-section half-section"
      sx={(theme) => ({
        paddingLeft: 0,
        paddingRight: 0,
        marginLeft: 0,
        marginRight: 0,
        maxWidth: 'none',
        filter:
          theme.colorScheme === 'dark' ? 'brightness(50%)' : 'contrast(90%)',
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
      })}
    >
      <Center>
        <Group
          position="center"
          sx={() => ({
            transform: 'translateY(-50%)',
          })}
        >
          <Group
            position="apart"
            spacing="xl"
            grow
            style={{ alignItems: 'start' }}
          >
            <Card p="lg" radius="md" withBorder>
              <Stack align="stretch" justify="start">
                <Text size="xl" weight={800}>
                  Öffnungszeiten
                </Text>
                <Badge>{open}</Badge>
                <Space h="xs"></Space>
                <Stack>
                  <Text>Mo, Di, Mi 10:00 - 19:00 Uhr</Text>
                  <Text>Do, Fr 8:00 - 17:00 Uhr</Text>
                  <Text>(Mittagspause 15:00 - 16:00 Uhr)</Text>
                </Stack>
              </Stack>
            </Card>
            <Card p="lg" radius="md" withBorder>
              <Stack align="stretch" justify="start">
                <Text size="xl" weight={800}>
                  Kontakt
                </Text>
                <Space h="xs"></Space>
                <Stack>
                  <Text>Telefon: 069 437166 / 069 444015</Text>
                  <Text>Email: groth1898@t-online.de</Text>
                </Stack>
              </Stack>
            </Card>
          </Group>
        </Group>
      </Center>
    </Container>
  );
}

export default ContactSection;
