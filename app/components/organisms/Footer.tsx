import GroupInfo from '../molecules/GroupInfo';
import style from './Footer.module.css';
import PageInfo from '../molecules/PageInfo';
import SiteMapCard from '../molecules/SiteMapCard';

export default function Footer() {
  type Page= {
    name: string,
    href: string,
  }; 

  // 後からpage: Page[]にして詳細ページ数を可変にしても良い
  let pageInfos: {
    title: Page,
    page1: Page,
    page2: Page,
  }[] = [
    {
      title: {
        name: "団体紹介",
        href: "/introduction#",
      },
      page1: {
        name: "活動理念",
        href: "#",
      },
      page2: {
        name: "活動内容",
        href: "#",
      },
    },
    {
      title: {
        name: "メンバー紹介",
        href: "#",
      },
      page1: {
        name: "代表挨拶",
        href: "#",
      },
      page2: {
        name: "メンバー紹介",
        href: "#",
      },
    },
    {
      title: {
        name: "資料一覧",
        href: "#",
      },
      page1: {
        name: "東大プロジェクト参加要項",
        href: "#",
      },
      page2: {
        name: "東大生交流会プログラム",
        href: "#",
      },
    },
    {
      title: {
        name: "活動実績",
        href: "#",
      },
      page1: {
        name: "出張講演会",
        href: "#",
      },
      page2: {
        name: "東大ツアー",
        href: "#",
      },
    },
  ]

  return (
    <footer className={style.footer}>
      <GroupInfo />
      <div className={style.pageInfo}>
        {
          pageInfos.map((pageinfo, id) => (
            <PageInfo
              key={id}
              title={pageinfo.title}
              page1={pageinfo.page1}
              page2={pageinfo.page2}
            />
          ))
        }
      </div>
      <SiteMapCard />
    </footer>
  );
}