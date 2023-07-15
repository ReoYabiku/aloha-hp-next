import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import style from './NavigationUnit.module.css';

type Props = {
  path: string
  name: string
  img: StaticImageData
}

export default function NavigationUnit({ path, name, img }: Props) {
  // TODO: useRouterでコンポーネント全体にアンカーを有効化する
  return (
    <div className={style.container}>
      <Link href={path} className={style.link}>
        <Image 
          src={img}
          alt={name}
          className={style.content}
        />
      </Link>
      <h2 className={style.innerText}>{name}</h2>
    </div>
  );
}