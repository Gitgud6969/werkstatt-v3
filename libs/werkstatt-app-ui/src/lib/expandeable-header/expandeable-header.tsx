import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconSpray,
  IconChartPie3,
  IconChevronDown,
  IconCarCrash,
  IconZoomCheck,
  IconHammer,
  IconHistory,
  IconTool,
} from '@tabler/icons';
import { useState, useCallback, useEffect } from 'react';
import WerkstattLogoAuto from '../werkstatt-logo-auto/werkstatt-logo-auto';
import WerkstattLogo from '../werkstatt-logo/werkstatt-logo';

const useStyles = createStyles(
  (theme, { visible }: Record<string, boolean>) => ({
    root: {
      position: 'fixed',
      zIndex: 10,
      top: visible ? 0 : '-60px',
      transition: 'all 0.6s',
      backgroundColor: theme.colors.dark[5],
    },
    link: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      textDecoration: 'none',
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontWeight: 500,
      fontSize: theme.fontSizes.sm,

      [theme.fn.smallerThan('sm')]: {
        height: 42,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      },

      ...theme.fn.hover({
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
      }),
    },

    subLink: {
      width: '100%',
      padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
      borderRadius: theme.radius.md,
      textAlign: 'left',
      ...theme.fn.hover({
        backgroundColor: theme.colors.dark[6],
      }),

      '&:active': theme.activeStyles,
    },

    dropdownFooter: {
      backgroundColor: theme.colors.dark[4],
      margin: -theme.spacing.md,
      marginTop: theme.spacing.sm,
      padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
      paddingBottom: theme.spacing.xl,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[1]
      }`,
    },

    hiddenMobile: {
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },

    hiddenDesktop: {
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
      backgroundColor: theme.colors.dark[4],
    },
    text_container: {
      width: '100%',
      textAlign: 'left',
    },
  })
);

const mockdata = [
  {
    icon: IconHammer,
    title: 'KFZ-Reparaturen',
    description: 'Eine Schraube locker?',
  },
  {
    icon: IconZoomCheck,
    title: 'Inspektionen',
    description: 'Sand im Getriebe?',
  },
  {
    icon: IconCarCrash,
    title: 'Karosseriebau',
    description: 'Eine Delle im Kotflügel?',
  },
  {
    icon: IconSpray,
    title: 'Lackierarbeiten',
    description: 'Der Lack ist ab?',
  },
  {
    icon: IconChartPie3,
    title: 'Autoglas',
    description: 'Ein Sprung im Glas?',
  },
  {
    icon: IconTool,
    title: 'Tuning',
    description: 'Nicht genug Pferde unter der Motorhaube?',
  },
  {
    icon: IconHistory,
    title: 'Restauration',
    description: 'Zu schön für die Garage?',
  },
];

export function ExpandeableHeader() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [visible, setVisible] = useState(true);
  const { classes, theme } = useStyles({ visible });
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} radius="md">
          <item.icon size={22} color={theme.colors.dark[1]} />
        </ThemeIcon>
        <div className={classes.text_container}>
          <Text align="left" size="sm" weight={500}>
            {item.title}
          </Text>
          <Text align="left" size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box>
      <Header height={60} px="md" className={classes.root}>
        <Group position="apart" sx={{ height: '100%' }}>
          <WerkstattLogoAuto size={'10%'} />

          <Group
            sx={{ height: '100%' }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <a href="#" className={classes.link}>
              Home
            </a>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
              sx={(theme) => ({
                backgroundColor: theme.colors.dark[4],
              })}
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Services
                    </Box>
                    <IconChevronDown
                      size={16}
                      color={theme.fn.primaryColor()}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown
                sx={(theme) => ({
                  overflow: 'hidden',
                  backgroundColor: theme.colors.dark[5],
                })}
              >
                <Group position="apart" px="md">
                  <Text weight={500}>Unsere Dienstleisungen</Text>
                  <Anchor href="#" size="xs">
                    Siehe Alle
                  </Anchor>
                </Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                {/* <div className={classes.dropdownFooter}>
                  <Group position="apart">
                    <div>
                      <Text weight={500} size="sm">
                        
                      </Text>
                      <Text size="xs" color="dimmed">
                      </Text>
                    </div>
                    <Button variant="default"></Button>
                  </Group>
                </div> */}
              </HoverCard.Dropdown>
            </HoverCard>
            <a href="#" className={classes.link}>
              Projektgalerie
            </a>
            <a href="#" className={classes.link}>
              Über uns
            </a>
          </Group>

          <Group className={classes.hiddenMobile}></Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Unsere Dienstleistungen
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Projektgalerie
          </a>
          <a href="#" className={classes.link}>
            Über uns
          </a>

          <Divider
            my="sm"
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />

          <Group position="center" grow pb="xl" px="md" mt="lg">
            <WerkstattLogo size={'50%'} />
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
export default ExpandeableHeader;
