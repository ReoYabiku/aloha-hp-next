import Image from 'next/image';
import SamplePersonPic from "./sample_person.png";
import style from './Person.module.css';

export default function Person() {
  return (
    <div className={style.border}>
      <Image
        src={SamplePersonPic}
        height={201}
        width={238}
        alt='フリー素材の顔写真'
        className={style.image}
      />
      <div className={style.card}>
        <h3 className={style.name}>伊礼漢</h3>
        <p className={style.affiliation}>東京大学　経済学部　3年</p>
      </div>
    </div>
  );
}