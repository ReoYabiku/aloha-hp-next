import Link from 'next/link';
import style from "./SiteMapcard.module.css";

export default function SiteMapCard() {
  let pages: {
    name: string,
    href: string,
  }[] = [
    {
      name: "サイトマップ",
      href: "#"
    },
    {
      name: "お問い合わせ",
      href: "#",
    },
    {
      name: "プライパシーポリシー",
      href: "#",
    },
  ]

  return (
    <div className={style.card}>
      <ul className={style.border}>
        {
          pages.map((page) => (
            <li className={style.list} key={page.name}>
              <Link href={page.href}>{page.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}