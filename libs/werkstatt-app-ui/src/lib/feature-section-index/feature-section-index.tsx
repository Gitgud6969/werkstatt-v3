import {
  createStyles,
  Title,
  SimpleGrid,
  Text,
  ThemeIcon,
  Grid,
  Col,
  Container,
  Highlight,
} from '@mantine/core';
import {
  IconSausage,
  IconHistory,
  IconShieldCheck,
  IconPlaylist,
  TablerIcon,
} from '@tabler/icons';
import { Parallax } from 'react-scroll-parallax';

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
  },
}));
interface FeatureItem {
  icon: TablerIcon;
  title: string;
  description: string;
}
const features = [
  {
    icon: IconHistory,
    title: '120 Jahre',
    description: 'Mehr als ein Jahrhundert historie',
  },
  {
    icon: IconShieldCheck,
    title: '30000 +',
    description: 'geschätzte Kunden seit 1898',
  },
  {
    icon: IconSausage,
    title: '10400',
    description: 'gegrillte Würstchen',
  },
  {
    icon: IconPlaylist,
    title: '58000 h',
    description: 'Radio Fip gehört',
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
      <Text size={40} mt="sm" weight={500} style={{ lineHeight: 1 }}>
        {feature.title}
      </Text>
      <Text color="dimmed" size="md">
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
              cols={2}
              spacing={30}
              breakpoints={[{ maxWidth: 'md', cols: 2 }]}
              sx={{ overflow: 'hidden' }}
              style={{ overflow: 'visible' }}
            >
              {items}
            </SimpleGrid>
          </Col>
        </Grid>
      </Container>
    </Container>
  );
}
export default FeatureSectionIndex;
