import { Center, Container, Grid, useMantineTheme } from '@mantine/core';
import {
  BackgroundImageFill,
  WerkstattLogo,
} from '@werkstatt/werkstatt-app-ui';
import { StaticImageData } from 'next/image';

export interface HeroSectionIndexProps {
  background_image: StaticImageData;
}

export function HeroSectionIndex(props: HeroSectionIndexProps) {
  const theme = useMantineTheme();
  return (
    <Container
      id="hero_section_index"
      className="page-section"
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
        backgroundImage: `url(${props.background_image.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      })}
    >
      <Center style={{ width: '100%', height: '100%' }}>
        <WerkstattLogo addBackgroundColor={theme.colorScheme === 'light'} />
      </Center>
    </Container>
  );
}

export default HeroSectionIndex;
