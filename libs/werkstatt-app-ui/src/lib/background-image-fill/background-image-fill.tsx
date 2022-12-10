import Image, { StaticImageData } from 'next/image';

export interface BackgroundImageFillProps {
  background_image: StaticImageData;
}

export function BackgroundImageFill(props: BackgroundImageFillProps) {
  const { theme } = useStyles();
  return (
    <div
      style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: '0',
      }}
    >
      <Image
        placeholder="blur"
        alt="Einfahrt Werkstatt"
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 100vw,
              100vw"
        src={props.background_image}
      />
    </div>
  );
}

export default BackgroundImageFill;
