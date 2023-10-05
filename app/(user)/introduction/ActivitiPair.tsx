import Image from 'next/image';
import style from './ActivePair.module.css';

type Position = "left" | "right";

type ActivityPairProps = {
  props1: ActivityCardProps
  props2: ActivityCardProps
}

export default function ActivityPair({props1, props2}: ActivityPairProps) {
  return (
    <div className={style.flex}>
      <ActivityCard
        image={props1.image}
        alt={props1.alt}
        title={props1.title}
        text={props1.text}
        position={props1.position}
      />
      <ActivityCard
        image={props2.image}
        alt={props2.alt}
        title={props2.title}
        text={props2.text}
        position={props2.position}
      />
    </div>
  );
}

export type ActivityCardProps = {
  image: string
  alt: string
  title: string
  text: string
  position: Position
};

export function ActivityCard({image, alt, title, text, position}: ActivityCardProps) {
  return (
    <div className={position == 'left' ? style.borderL : style.borderR}>
      <Image src={image} width={135} height={101} style={{objectFit: "cover"}} alt={alt}/>
      <div className={style.contents}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.text}>{text}</p>
      </div>
    </div>
  );
}