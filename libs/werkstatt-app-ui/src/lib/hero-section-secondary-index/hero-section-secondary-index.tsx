import { Container, Overlay, Text, Title, createStyles } from '@mantine/core';
import { Service } from '@werkstatt/werkstatt-models';

export const useHeroSectionSecondaryStyle = createStyles(
  (theme, imageUrl: string) => ({
    wrapper: {
      position: 'relative',
      paddingTop: 180,
      paddingBottom: 130,
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',

      '@media (max-width: 520px)': {
        paddingTop: 80,
        paddingBottom: 50,
      },
    },

    inner: {
      position: 'relative',
      zIndex: 1,
    },

    title: {
      fontWeight: 800,
      fontSize: 60,
      letterSpacing: -1,
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      color: theme.white,
      marginBottom: theme.spacing.xs,
      textAlign: 'center',
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      '@media (max-width: 520px)': {
        fontSize: 28,
        textAlign: 'left',
      },
    },

    highlight: {
      color: theme.colors[theme.primaryColor][4],
    },

    description: {
      color: theme.colors.gray[0],
      textAlign: 'center',

      '@media (max-width: 520px)': {
        fontSize: theme.fontSizes.md,
        textAlign: 'left',
      },
    },

    controls: {
      marginTop: theme.spacing.xl * 1.5,
      display: 'flex',
      justifyContent: 'center',
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,

      '@media (max-width: 520px)': {
        flexDirection: 'column',
      },
    },

    control: {
      height: 42,
      fontSize: theme.fontSizes.md,

      '&:not(:first-of-type)': {
        marginLeft: theme.spacing.md,
      },

      '@media (max-width: 520px)': {
        '&:not(:first-of-type)': {
          marginTop: theme.spacing.md,
          marginLeft: 0,
        },
      },
    },

    secondaryControl: {
      color: theme.white,
      backgroundColor: 'rgba(255, 255, 255, .4)',

      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, .45) !important',
      },
    },
  })
);

export function HeroSectionSecondaryIndex(props: Service) {
  const { classes } = useHeroSectionSecondaryStyle(props.image);
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title
          variant="gradient"
          gradient={{ deg: 130, from: '#A97202', to: '#FAAE19' }}
          className={classes.title}
        >
          {props.title}
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            {props.content.catchPhrase}
          </Text>
        </Container>
      </div>
    </div>
  );
}
export default HeroSectionSecondaryIndex;
