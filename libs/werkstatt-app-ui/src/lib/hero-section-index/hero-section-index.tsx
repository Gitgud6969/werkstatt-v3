import { Center, Container, useMantineTheme } from '@mantine/core';
import { WerkstattLogo } from '../werkstatt-logo/werkstatt-logo';
import { StaticImageData } from 'next/image';
import { Parallax } from 'react-scroll-parallax';

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
        backdropFilter: 'brightness(50%)',
        backgroundImage: `url(${props.background_image.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        overflow: 'hidden',
      })}
    >
      <Parallax speed={-30} style={{ width: '100%', height: '100%' }}>
        <Center
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <WerkstattLogo size={'30vw'} />
        </Center>
      </Parallax>
    </Container>
  );
}

export default HeroSectionIndex;
