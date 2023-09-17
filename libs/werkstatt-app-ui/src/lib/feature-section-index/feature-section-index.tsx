import {
  Col,
  Container,
  Grid,
  Group,
  Highlight,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
  createStyles,
} from '@mantine/core';
import {
  IconHistory,
  IconPlaylist,
  IconSausage,
  IconShieldCheck,
  TablerIcon,
} from '@tabler/icons';
import { Parallax } from 'react-scroll-parallax';
import CounterComponent from './counter-component';

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
  },
}));
interface FeatureItem {
  icon: TablerIcon;
  titleCount: number;
  title: string;
  description: string;
}
const features = [
  {
    icon: IconHistory,
    titleCount: 120,
    title: 'Jahre',
    description: 'Mehr als ein Jahrhundert historie',
  },
  {
    icon: IconShieldCheck,
    titleCount: 30000,
    title: '+',
    description: 'geschätzte Kunden seit 1898',
  },
  {
    icon: IconSausage,
    titleCount: 10400,
    title: '',
    description: 'gegrillte Würstchen',
  },
  {
    icon: IconPlaylist,
    titleCount: 58000,
    title: 'h',
    description: 'Radio gehört seit 1998',
  },
];

export function FeatureSectionIndex() {
  const { classes, theme } = useStyles();
  // const parallax = useParallax<HTMLDivElement>({
  //   translateX: [50, 0],
  // });

  const items = features.map((feature: FeatureItem, index: number) => (
    <Parallax
      translateX={[(index + 1) * 15, 0]}
      key={feature.title}
      id={`${index}`}
    >
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 130, from: '#A97202', to: '#FAAE19' }}
      >
        <feature.icon size={26} stroke={1.5} />
      </ThemeIcon>
      <Group>
        <CounterComponent value={feature.titleCount}></CounterComponent>
        <Text size={40} mt="sm" weight={500} style={{ lineHeight: 1 }}>
          {feature.title}
        </Text>
      </Group>
      <Text size="lg" color="dimmed" weight={500} mt="sm">
        {feature.description}
      </Text>
    </Parallax>
  ));

  return (
    <Container
      className={classes.wrapper}
      sx={(theme) => ({
        maxWidth: '100vw',
        backgroundColor: theme.colors.dark[6],
      })}
    >
      <Container className={classes.wrapper}>
        <Grid gutter={80}>
          <Col span={12} md={5}>
            <Highlight
              highlight={['Karosseriebau Groth', 'default']}
              highlightStyles={(theme) => ({
                backgroundImage: theme.fn.linearGradient(
                  45,
                  theme.colors['gold'][0],
                  theme.colors['gold'][4]
                ),
                fontSize: theme.fontSizes.lg,
                fontWeight: 700,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              })}
            >
              Karosseriebau Groth
            </Highlight>
            <Title
              order={2}
              sx={() => ({
                fontSize: 60,
                [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                  fontSize: 50,
                },
              })}
            >
              <Highlight
                highlight={['HERZEN', 'default']}
                highlightStyles={(theme) => ({
                  backgroundImage: theme.fn.linearGradient(
                    45,
                    theme.colors['red'][5],
                    theme.colors['pink'][5]
                  ),
                  fontWeight: 700,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: '1',
                })}
                style={{ lineHeight: '1' }}
              >
                AUTOMOBIL REPARATUR IM HERZEN VON BORNHEIM
              </Highlight>
            </Title>
          </Col>
          <Col span={12} md={7}>
            <SimpleGrid
              cols={1}
              spacing={30}
              breakpoints={[{ minWidth: 'sm', cols: 2 }]}
              sx={{ overflowX: 'visible' }}
            >
              <Parallax
                translateX={[(0 + 1) * 15, 0]}
                key={features[0].title}
                id={`${0}`}
              >
                <ThemeIcon
                  size={44}
                  radius="md"
                  variant="gradient"
                  gradient={{ deg: 130, from: '#A97202', to: '#FAAE19' }}
                >
                  <IconHistory size={26} stroke={1.5} />
                </ThemeIcon>
                <Group>
                  <CounterComponent
                    value={getYearsSince1898()}
                  ></CounterComponent>
                  <Text
                    size={40}
                    mt="sm"
                    weight={500}
                    style={{ lineHeight: 1 }}
                  >
                    {features[0].title}
                  </Text>
                </Group>
                <Text size="lg" color="dimmed" weight={500} mt="sm">
                  {features[0].description}
                </Text>
              </Parallax>
              <Parallax
                translateX={[(1 + 1) * 15, 0]}
                key={features[1].title}
                id={`${1}`}
              >
                <ThemeIcon
                  size={44}
                  radius="md"
                  variant="gradient"
                  gradient={{ deg: 130, from: '#A97202', to: '#FAAE19' }}
                >
                  <IconShieldCheck size={26} stroke={1.5} />
                </ThemeIcon>
                <Group>
                  <CounterComponent
                    value={getEstimatedTotalCustomers()}
                  ></CounterComponent>
                  <Text
                    size={40}
                    mt="sm"
                    weight={500}
                    style={{ lineHeight: 1 }}
                  >
                    {features[1].title}
                  </Text>
                </Group>
                <Text size="lg" color="dimmed" weight={500} mt="sm">
                  {features[1].description}
                </Text>
              </Parallax>
              <Parallax
                translateX={[(2 + 1) * 15, 0]}
                key={features[2].title}
                id={`${2}`}
              >
                <ThemeIcon
                  size={44}
                  radius="md"
                  variant="gradient"
                  gradient={{ deg: 130, from: '#A97202', to: '#FAAE19' }}
                >
                  <IconSausage size={26} stroke={1.5} />
                </ThemeIcon>
                <Group>
                  <CounterComponent
                    value={getTotalSausagesGrilled()}
                  ></CounterComponent>
                  <Text
                    size={40}
                    mt="sm"
                    weight={500}
                    style={{ lineHeight: 1 }}
                  >
                    {features[2].title}
                  </Text>
                </Group>
                <Text size="lg" color="dimmed" weight={500} mt="sm">
                  {features[2].description}
                </Text>
              </Parallax>
              <Parallax
                translateX={[(3 + 1) * 15, 0]}
                key={features[3].title}
                id={`${3}`}
              >
                <ThemeIcon
                  size={44}
                  radius="md"
                  variant="gradient"
                  gradient={{ deg: 130, from: '#A97202', to: '#FAAE19' }}
                >
                  <IconPlaylist size={26} stroke={1.5} />
                </ThemeIcon>
                <Group>
                  <CounterComponent
                    value={getEstimatedWeekdayRadioHours()}
                  ></CounterComponent>
                  <Text
                    size={40}
                    mt="sm"
                    weight={500}
                    style={{ lineHeight: 1 }}
                  >
                    {features[3].title}
                  </Text>
                </Group>
                <Text size="lg" color="dimmed" weight={500} mt="sm">
                  {features[3].description}
                </Text>
              </Parallax>
            </SimpleGrid>
          </Col>
        </Grid>
      </Container>
    </Container>
  );
}
export default FeatureSectionIndex;

const getYearsSince1898 = (): number => {
  const currentYear = new Date().getFullYear();
  const baseYear = 1898;
  return currentYear - baseYear;
};
const getTotalSausagesGrilled = (): number => {
  const currentYear = new Date().getFullYear();
  const baseYear = 1998;
  const weeksPerYear = 52;
  const sausagesPerWeek = 18;

  const yearsSince1998 = currentYear - baseYear;
  return yearsSince1998 * weeksPerYear * sausagesPerWeek;
};
type Era = {
  startYear: number;
  endYear: number;
  customersPerWeek: number;
};

const getEstimatedTotalCustomers = (): number => {
  const currentYear = new Date().getFullYear();
  const weeksPerYear = 52;

  const eras: Era[] = [
    { startYear: 1898, endYear: 1910, customersPerWeek: 2 },
    { startYear: 1911, endYear: 1930, customersPerWeek: 4 },
    { startYear: 1931, endYear: currentYear, customersPerWeek: 5 },
  ];

  let totalCustomers = 0;

  for (const era of eras) {
    const yearsInEra = Math.min(era.endYear, currentYear) - era.startYear + 1;
    totalCustomers += yearsInEra * weeksPerYear * era.customersPerWeek;
  }

  return totalCustomers;
};
const getEstimatedWeekdayRadioHours = (): number => {
  const currentYear = new Date().getFullYear();
  const baseYear = 1998;
  const weekdaysPerYear = 5 * 52; // 5 weekdays, approx 52 weeks a year
  const hoursPerDay = 7; // Radio runs for 7 hours per weekday

  const yearsSince1998 = currentYear - baseYear;
  return yearsSince1998 * weekdaysPerYear * hoursPerDay;
};
