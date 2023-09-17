import {
  Button,
  Container,
  Group,
  Text,
  Title,
  createStyles,
} from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons';
import { Service } from '@werkstatt/werkstatt-models';
import { useRouter } from 'next/router';

/* eslint-disable-next-line */
export interface TextSectionProps {
  content: Service;
  prev: { title: string; key: string };
  next: { title: string; key: string };
}
export const useTextSectionClasses = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: 'relative',
    height: '100%',

    [theme.fn.smallerThan('sm')]: {
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  title: {
    color: theme.white,
    fontSize: 40,
    fontWeight: 900,
    lineHeight: 1.1,
    paddingBottom: theme.spacing.md,
    [theme.fn.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  description: {
    paddingBottom: theme.spacing.sm,
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

export function TextSection(props: TextSectionProps) {
  const { classes } = useTextSectionClasses();
  const { push } = useRouter();
  return (
    <Container className={classes.container}>
      <Title className={classes.title} order={1}>
        {props.content.subtitle?.join(', ')}
      </Title>
      {props.content.content.mainContent.map((text, index) => (
        <Text
          className={classes.description}
          fz={'lg'}
          key={`${index}-service-content-line`}
        >
          {text}
        </Text>
      ))}
      <Group mt="xl">
        <Button
          variant="outline"
          leftIcon={<IconChevronLeft />}
          onClick={() => push(props.prev.key)}
        >
          {props.prev?.title}
        </Button>
        <Button
          variant="outline"
          rightIcon={<IconChevronRight />}
          onClick={() => push(props.next.key)}
        >
          {props.next?.title}
        </Button>
      </Group>
    </Container>
  );
}

export default TextSection;
