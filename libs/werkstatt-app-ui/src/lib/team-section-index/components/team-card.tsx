import { IconEye, IconMessageCircle } from '@tabler/icons';
import { Card, Text, Group, Center, createStyles, List } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
const useStyles = createStyles((theme, _params, getRef) => {
  const image = getRef('image');

  return {
    next_link: {
      textDecoration: 'none',
    },
    card: {
      position: 'relative',
      height: 500,
      [`&:hover .${image}`]: {
        transform: 'scale(1.03)',
      },
    },

    image: {
      ref: image,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      objectFit: 'cover',
      transition: 'transform 500ms ease',
    },

    overlay: {
      position: 'absolute',
      top: '20%',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage:
        'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)',
    },

    content: {
      height: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      zIndex: 1,
    },

    title: {
      color: theme.white,
      marginBottom: 5,
      textDecoration: 'none',
    },

    bodyText: {
      color: theme.colors.dark[2],
      marginLeft: 7,
      textDecoration: 'none',
    },

    subtitle: {
      color: theme.colors.dark[2],
    },
  };
});

interface TeamCardProps {
  link: string;
  image: string;
  title: string;
  subtitle: string[];
}

export function TeamCard({ image, title, subtitle, link }: TeamCardProps) {
  const { classes, theme } = useStyles();

  return (
    <Link href={link} className={classes.next_link}>
      <Card p="lg" shadow="lg" className={classes.card} radius="md">
        <Image
          src={image}
          alt={`Backgound image of ${title}`}
          fill
          quality={20}
          className={classes.image}
        />
        <div className={classes.overlay} />

        <div className={classes.content}>
          <div>
            <Text size="lg" className={classes.title} weight={500}>
              {title}
            </Text>

            {subtitle.map((text, index) => (
              <Text color="dimmed" key={`${text}-${index}`}>
                {text}
              </Text>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}
