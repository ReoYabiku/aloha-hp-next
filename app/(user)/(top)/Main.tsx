import style from './Main.module.css';
import { ArticleProps } from '../../components/molecules/Article';
import LargeBlock, { LargeBlockProps } from './LargeBlock';
import SmallBlock, { SmallBlockProps } from './SmallBlock';

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import GroupsIcon from '@mui/icons-material/Groups';

import DescriptionIcon from '@mui/icons-material/Description';
import PhoneIcon from '@mui/icons-material/Phone';
import TwitterIcon from '@mui/icons-material/Twitter';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Articles from '../../components/organisms/Articles';
import Image from 'next/image';
import TodaiPJPoster from './src/todai_pj_poster.jpg';

export default function Main() {

  const articles: ArticleProps[] = [
    {
      image_url: "",
      alt: "",
      article_url: "/articles/personal-todai-project",
      title: "個人版東大プロジェクト始動！",
      summary: "沖縄から東京大学を目指す中高生を支援する「東大プロ...",
      date: "2023/03/05",
    },
    {
      image_url: "https://alohahp.s3.ap-northeast-1.amazonaws.com/activities/meetup.jpg",
      alt: "東大生交流会の様子",
      article_url: "/articles/meet-up",
      title: "東大生交流会@昭和薬科",
      summary: "2023年6月17日(土)に、昭和薬科大学附属高等学校・中...",
      date: "2023/12/18",
    },
    {
      image_url: "https://alohahp.s3.ap-northeast-1.amazonaws.com/activities/study_camp.jpg",
      alt: "勉強合宿の様子",
      article_url: "/articles/study-camp",
      title: "勉強合宿@沖縄国際ユースホステル",
      summary: "2023年9月9日から10日の2日間に渡り、沖縄県奥武山にあ...",
      date: "2023/12/18",
    },
    // {
    //   image_url: "https://alohahp.s3.ap-northeast-1.amazonaws.com/articles/visiting-lecture1.jpg",
    //   alt: "説明",
    //   article_url: "/articles/visiting-lecture",
    //   title: "出張講演会@昭和薬科",
    //   summary: "2023年3月22日、沖縄県昭和薬科大学附属高校の生徒を対象...",
    //   date: "2023/12/18",
    // },
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
      url: "/contact",
      icon: <PhoneIcon />,
      name: "お問い合わせ",
    },
    {
      url: "https://twitter.com/ALOHA_u_tokyo",
      icon: <TwitterIcon />,
      name: "公式X",
    },
    {
      url: "/articles/personal-todai-project",
      icon: <MeetingRoomIcon />,
      name: "募集中のイベント",
    },
  ];

  return (
    <>
      <section className={style.new_articles}>
        <h2 className={style.head}>新着記事</h2>
        <div className={style.articles}>
          <Articles articles={articles} />
        </div>
      </section>

      <section>
        <h2 className={style.head}>ALOHAについて</h2>
        <div className={style.about}>
          <div className={style.large_blocks}>
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
          <div className={style.small_blocks}>
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
      </section>
      <section className={style.todaiProject}>
        <h2 className={style.head}>学校版東大プロジェクト</h2>
        <div className={style.todaiProjectContent}>
          <div className={style.todaiProjectImage}>
            <Image
              src={TodaiPJPoster}
              alt='東大プロジェクトのポスター'
              width={300}
              objectFit='fill'
              style={{display: "block", margin: "auto"}}
              className={style.todaiProjectPoster}
            />
          </div>
          <div className={style.todaiProjectInfo}>
            <p>　沖縄から東京大学を志望する生徒を応援すべく「<strong>東大プロジェクト</strong>」を始動しました！</p>
            <p>　現在(2023年度)、<strong>開邦高校</strong>と<strong>昭和薬科大学附属高校</strong>の2校と連携し、「東大生交流会」「勉強合宿」「出張模擬講義」「東大生面談」などの多くのプログラムを実行しております。</p>
            <p>　入会は提携学校を通すことが必須条件となっております。提携学校に所属していない場合は「<strong><a href="/articles/personal-todai-project">個人版東大プロジェクト</a></strong>」をご参照ください。</p>
          </div>
        </div>
      </section>
    </>
  );
}