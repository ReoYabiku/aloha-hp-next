import Link from 'next/link';
import style from './Header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={style.header}>
      <Link href={'/'} className={style.logo}>
        <div className={style.logo_img_wrapper}>
          <Image
            src={"https://alohahp.s3.ap-northeast-1.amazonaws.com/logo/aloha.png"}
            alt="ALOHAのロゴ"
            width={45}
            height={45}
          />
        </div>
        <div>
          <h1 className={style.title}>ALOHA</h1>
          <p className={style.subtitle}>沖縄から東大を、日常に</p>
        </div>
      </Link>
      <div className={style.nav}>
        <Link href={'/introduction'} className={style.other_pages}>団体紹介</Link>
        <Link href={'/members'} className={style.other_pages}>メンバー紹介</Link>
        <Link href={'/documents'} className={style.other_pages}>資料一覧</Link>
        <Link href={'/activities'} className={style.other_pages}>活動実績</Link>
      </div>
    </header>
  );
}