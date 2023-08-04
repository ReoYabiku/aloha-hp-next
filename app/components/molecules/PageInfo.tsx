import Link from 'next/link';
import style from "./PageInfo.module.css"

type Page = {
  name: string,
  href: string,
};

type PageInfoProps = {
  title: Page,
  page1: Page,
  page2: Page,
};

export default function PageInfo({ title, page1, page2 }: PageInfoProps) {
  return (
    <div className={style.container}>
      <Link href={title.href}><h3 className={style.title}>{title.name}</h3></Link>
      <div className={style.hr}></div>
      <Link href={page1.href}><p className={style.text}>{page1.name}</p></Link>
      <Link href={page2.href}><p className={style.text}>{page2.name}</p></Link>
    </div>
  );
}