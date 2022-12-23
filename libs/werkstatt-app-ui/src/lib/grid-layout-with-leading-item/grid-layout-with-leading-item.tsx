import {
  Text,
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
  createStyles,
  Stack,
} from '@mantine/core';
import { Service } from '@werkstatt/werkstatt-models';
import Image from 'next/image';

/* eslint-disable-next-line */
export interface GridLayoutWithLeadingItemProps {
  content: Service;
}
const useStyles = createStyles(
  (theme, { primaryHeight, secondaryHeight }: Record<string, number>) => ({
    big_wrap: {
      position: 'relative',
      minHeight: primaryHeight,
      width: '100%',
    },
    small_wrap: {
      position: 'relative',
      minHeight: secondaryHeight,
      width: '100%',
    },
  })
);
const PRIMARY_COL_HEIGHT = 300;

export function GridLayoutWithLeadingItem(
  props: GridLayoutWithLeadingItemProps
) {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;
  const { classes } = useStyles({ PRIMARY_COL_HEIGHT, SECONDARY_COL_HEIGHT });

  return (
    <Container my="md">
      <SimpleGrid
        cols={2}
        spacing="md"
        breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
      >
        <div className={classes.big_wrap}>
          <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
        </div>
        <Grid gutter="md">
          <Grid.Col>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <div className={classes.small_wrap}>
              {props.content.secondaryImage ? (
                <Image
                  src={props.content.secondaryImage}
                  alt={`Secondary image of ${props.content.title}`}
                  fill
                  quality={20}
                />
              ) : (
                <Skeleton
                  height={SECONDARY_COL_HEIGHT}
                  radius="md"
                  animate={false}
                />
              )}
            </div>
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}
