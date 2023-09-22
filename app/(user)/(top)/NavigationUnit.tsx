"use client"

import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import style from './NavigationUnit.module.css';

type Props = {
  path: string
  name: string
  img: StaticImageData
}

export default function NavigationUnit({ path, name, img }: Props) {
  const router = useRouter();

  return (
    <div className={style.container} onClick={() => router.push(path)}>
      <Image 
        src={img}
        alt={name}
        className={style.content}
      />
      <h2 className={style.innerText}>{name}</h2>
    </div>
  );
}