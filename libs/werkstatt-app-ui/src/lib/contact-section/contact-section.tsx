import {
  Container,
  Center,
  Group,
  Card,
  Text,
  Space,
  Stack,
  Badge,
  useMantineColorScheme,
  SimpleGrid,
  Grid,
  createStyles,
  MediaQuery,
  Tabs,
} from '@mantine/core';
import { IconClockHour10, IconPhone } from '@tabler/icons';
import { useEffect, useState } from 'react';
import DesktopContactSection from './components/desktop-contact-section';
import MobileContactSection from './components/mobile-contact-section';

/* eslint-disable-next-line */
export interface ContactSectionProps {}

function isValid(date: Date, opening: Date, closing: Date) {
  const h = date.getHours();
  const m = date.getMinutes();
  return (
    (opening.getHours() < h ||
      (opening.getHours() === h && opening.getMinutes() <= m)) &&
    (h < closing.getHours() ||
      (h === closing.getHours() && m <= closing.getMinutes()))
  );
}

const openingHours = [
  {
    opening: new Date('10:00:00'),
    closing: new Date('19:00:00'),
  },
  {
    opening: new Date('10:00:00'),
    closing: new Date('19:00:00'),
  },
  {
    opening: new Date('10:00:00'),
    closing: new Date('19:00:00'),
  },
  {
    opening: new Date('8:00:00'),
    closing: new Date('17:00:00'),
  },
  {
    opening: new Date('8:00:00'),
    closing: new Date('17:00:00'),
  },
];
const mittagsPause = {
  opening: new Date('15:00:00'),
  closing: new Date('16:00:00'),
};

function getOpeningHours(handleOpening: (state: string) => void) {
  const today = new Date();
  const day = today.getDay();
  if (day === 6 || day === 0) {
    handleOpening('Geschlossen');
    return;
  }
  if (isValid(today, mittagsPause.opening, mittagsPause.closing)) {
    handleOpening('Mittagspause!');
    return;
  }
  if (
    isValid(today, openingHours[day - 1].opening, openingHours[day - 1].closing)
  ) {
    handleOpening('Geöffnet');
    return;
  }
  handleOpening('Geschlossen');
}
const useStyles = createStyles((theme) => ({
  container: {
    height: '30vh',
    maxHeight: '450px',
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: 0,
    marginRight: 0,
    maxWidth: 'none',
    backgroundColor: theme.colors.dark[4],
    borderBottomLeftRadius: '50% 10%',
    borderBottomRightRadius: '50% 10%',
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      height: '35vh',
    },
  },
}));

export function ContactSection(props: ContactSectionProps) {
  const { classes } = useStyles();
  const [open, setOpen] = useState('Geöffnet');
  const handleOpening = (state: string) => {
    setOpen(state);
  };
  useEffect(() => {
    getOpeningHours(handleOpening);
  }, []);
  return (
    <Container id="contact_section" className={classes.container}>
      <Center>
        <MobileContactSection open={open} />
        <DesktopContactSection open={open} />
      </Center>
    </Container>
  );
}

export default ContactSection;
