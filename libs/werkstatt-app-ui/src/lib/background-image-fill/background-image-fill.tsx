import Image, { StaticImageData } from 'next/image';

export interface BackgroundImageFillProps {
  background_image: StaticImageData;
}

export function BackgroundImageFill(props: BackgroundImageFillProps) {
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
        src={props.background_image}
        layout="responsive"
      />
    </div>
  );
}

export default BackgroundImageFill;
