import {
  ActionIcon,
  Box,
  Burger,
  Center,
  Collapse,
  Container,
  Divider,
  Drawer,
  Group,
  Header,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  createStyles,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons';
import { ServiceContent } from '@werkstatt/werkstatt-models';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
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
      backgroundColor: theme.colors.dark[5],
    },
    text_container: {
      width: '100%',
      textAlign: 'left',
    },
  })
);

export interface ExpandeableHeaderProps {
  content: ServiceContent;
}
export function ExpandeableHeader(props: ExpandeableHeaderProps) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [visible, setVisible] = useState(true);
  const { classes, theme } = useStyles({ visible });
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const { push } = useRouter();

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const links = props.content.services.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap position="apart">
        <ThemeIcon size={34} radius="md">
          {item.icon &&
            React.createElement(item.icon, {
              size: 22,
              color: theme.colors.dark[2],
            })}
        </ThemeIcon>
        <Link className={classes.link} href={item.link}>
          <div className={classes.text_container}>
            <Text align="left" size="sm" weight={500}>
              {item.title}
            </Text>
            <Text align="left" size="xs" color="dimmed">
              {item.content.catchPhrase}
            </Text>
          </div>
        </Link>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box>
      <Header height={60} px="md" className={classes.root}>
        <Container sx={{ height: '100%' }} className={classes.hiddenMobile}>
          <Group position="apart" sx={{ height: '100%' }}>
            <ActionIcon onClick={() => push('/')}>
              <WerkstattLogoAuto size={'10%'} minSize={'150px'} />
            </ActionIcon>
            <Group sx={{ height: '100%' }} spacing={0}>
              <HoverCard
                width={600}
                position="bottom"
                radius="md"
                shadow="md"
                withinPortal
              >
                <HoverCard.Target>
                  <a href="/#services" className={classes.link}>
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
                  <Divider
                    my="sm"
                    mx="-md"
                    color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                  />

                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>
                </HoverCard.Dropdown>
              </HoverCard>
              <a href="/projekte" className={classes.link}>
                Projektgalerie
              </a>
              <a href="/ueber-uns" className={classes.link}>
                Über uns
              </a>
            </Group>
          </Group>
        </Container>
        <Group
          position="apart"
          sx={{ height: '100%' }}
          className={classes.hiddenDesktop}
        >
          {/* <ActionIcon onClick={() => push('/')}> */}
          <WerkstattLogoAuto size={'10%'} minSize={'150px'} />
          {/* </ActionIcon> */}
          <Burger opened={drawerOpened} onClick={toggleDrawer} />
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
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Unsere Dienstleistungen
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="/projekte" className={classes.link}>
            Projektgalerie
          </a>
          <a href="/ueber-uns" className={classes.link}>
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
