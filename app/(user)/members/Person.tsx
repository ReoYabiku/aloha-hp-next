import Image from 'next/image';
import style from './Person.module.css';

type Member = {
  name: string,
  affiliation: string,
  imageURL: string,
};

export default function Person({ name, affiliation, imageURL }: Member) {
  return (
    <div className={style.border}>
      <Image
        src={imageURL}
        height={200}
        width={200}
        alt='フリー素材の顔写真'
        style={{objectFit: "cover"}}
        className={style.image}
      />
      <div className={style.card}>
        <h3 className={style.name}>{name}</h3>
        <p className={style.affiliation}>{affiliation}</p>
      </div>
    </div>
  );
}