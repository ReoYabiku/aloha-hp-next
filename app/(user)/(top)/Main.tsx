import TextCard from './TextCard';
import style from './Main.module.css';
import Article, { ArticleProps } from './Article';
import LargeBlock, { LargeBlockProps } from './LargeBlock';
import SmallBlock, { SmallBlockProps } from './SmallBlock';

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import GroupsIcon from '@mui/icons-material/Groups';

import DescriptionIcon from '@mui/icons-material/Description';
import PhoneIcon from '@mui/icons-material/Phone';
import TwitterIcon from '@mui/icons-material/Twitter';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

type TextCartProps = {
  text: string
  path: string
}

export default function Main() {

  // TODO: 各活動に合わせて#以降を記載する
  const textCards: TextCartProps[] = [
    {
      text: "出張講演会",
      path: "/activities#"
    },
    {
      text: "東大ツアー",
      path: "/activities#"
    },
    {
      text: "東大生交流会",
      path: "/activities#"
    },
    {
      text: "勉強合宿",
      path: "/activities#"
    }
  ]

  const articles: ArticleProps[] = [
    {
      image_url: "https://alohahp.s3.ap-northeast-1.amazonaws.com/activities/meetup.jpg",
      alt: "説明",
      article_url: "/articles",
      title: "タイトル",
      summary: "こんな感じのイベントを実施しました！記事読んでね〜",
      date: "2023/11/21",
    },
    {
      image_url: "https://alohahp.s3.ap-northeast-1.amazonaws.com/activities/meetup.jpg",
      alt: "説明",
      article_url: "/articles",
      title: "タイトル",
      summary: "こんな感じのイベントを実施しました！記事読んでね〜",
      date: "2023/11/21",
    },
    {
      image_url: "https://alohahp.s3.ap-northeast-1.amazonaws.com/activities/meetup.jpg",
      alt: "説明",
      article_url: "/articles",
      title: "タイトル",
      summary: "こんな感じのイベントを実施しました！記事読んでね〜",
      date: "2023/11/21",
    },
  ];

  const largeBlocks: LargeBlockProps[] = [
    {
      url: "/introduction",
      icon: <AccountBalanceIcon />,
      name: "団体紹介",
    },
    {
      url: "/activities",
      icon: <MilitaryTechIcon />,
      name: "活動実績",
    },
    {
      url: "/members",
      icon: <GroupsIcon />,
      name: "メンバー紹介",
    },
  ];

  const smallBlocks: SmallBlockProps[] = [
    {
      url: "/documents",
      icon: <DescriptionIcon />,
      name: "資料一覧",
    },
    {
      url: "#",
      icon: <PhoneIcon />,
      name: "お問い合わせ",
    },
    {
      url: "https://twitter.com/ALOHA_u_tokyo",
      icon: <TwitterIcon />,
      name: "公式X",
    },
    {
      url: "#",
      icon: <MeetingRoomIcon />,
      name: "募集中のイベント",
    },
  ];

  return (
    <section>
      <h2 className={`${style.head} ${style.onlyPC}`}>新着記事</h2>
      <div>
        <div className={`${style.articles} ${style.onlyPC}`}>
          {
            articles.map((article, id) => (
              <Article
                key={id}
                image_url={article.image_url}
                alt={article.alt}
                article_url={article.article_url}
                title={article.title}
                summary={article.summary}
                date={article.date}
              />
              ))
            }
        </div>
      </div>
      <h2 className={`${style.head} ${style.onlyPC}`}>ALOHAについて</h2>
      <div className={style.about}>
        <div className={`${style.large_blocks} ${style.onlyPC}`}>
          {
            largeBlocks.map((largeBlock, id) => (
              <LargeBlock
                key={id}
                url={largeBlock.url}
                icon={largeBlock.icon}
                name={largeBlock.name}
              />
              ))
            }
        </div>
        <div className={`${style.small_blocks} ${style.onlyPC}`}>
          {
            smallBlocks.map((smallBlock, id) => (
              <SmallBlock
                key={id}
                url={smallBlock.url}
                icon={smallBlock.icon}
                name={smallBlock.name}
              />
              ))
            }
        </div>
      </div>
      <h2 className={style.head}>活動実績</h2>
      <div className={style.cards}>
        {
          textCards.map((textCard) => (
            <TextCard
              key={textCard.text}
              text={textCard.text}
              path={textCard.path}
            />
          ))
        }
      </div>
      
    </section>
  );
}