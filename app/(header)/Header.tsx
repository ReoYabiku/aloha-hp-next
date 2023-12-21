import Link from 'next/link';
import style from './Header.module.css';
import Image from 'next/image';
import svg from './src/logo-string.svg';

export default function Header() {
  return (
    <header className={style.header}>
      <Link href={'/'} className={style.logo}>
        <div className={style.logo_img_wrapper}>
          <Image
            src={"https://alohahp.s3.ap-northeast-1.amazonaws.com/logo/logo_1.png"}
            alt="ALOHAのロゴ"
            width={70}
            height={70}
            style={{"objectFit": "contain"}}
          />
        </div>
        <div>
          <Image
            src={svg}
            alt="ALOHAのロゴ(文字)"
            width={120}
            height={30}
            style={{"objectFit": "contain"}}
            className={style.subtitle}
          />
          <h1 className={style.title}>ALOHA</h1>
        </div>
      </Link>
      <div className={style.nav}>
        <Link href={'/introduction'} className={style.other_pages}>団体紹介</Link>
        <Link href={'/members'} className={style.other_pages}>メンバー紹介</Link>
        <Link href={'/activities'} className={style.other_pages}>活動実績</Link>
        <Link href={'/documents'} className={style.other_pages}>資料一覧</Link>
      </div>
    </header>
  );
}