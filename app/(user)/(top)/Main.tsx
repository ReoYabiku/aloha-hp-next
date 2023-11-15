import TextCard from './TextCard';
import style from './Main.module.css';
import Article, { ArticleProps } from './Article';

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
      article_url: "/activities",
      title: "タイトル",
      summary: "こんな感じのイベントを実施しました！記事読んでね〜",
    },
    {
      image_url: "https://alohahp.s3.ap-northeast-1.amazonaws.com/activities/meetup.jpg",
      alt: "説明",
      article_url: "/activities",
      title: "タイトル",
      summary: "こんな感じのイベントを実施しました！記事読んでね〜",
    },
    {
      image_url: "https://alohahp.s3.ap-northeast-1.amazonaws.com/activities/meetup.jpg",
      alt: "説明",
      article_url: "/activities",
      title: "タイトル",
      summary: "こんな感じのイベントを実施しました！記事読んでね〜",
    },
  ]

  return (
    <section>
      <h2 className={style.head}>新着記事</h2>
      <div>
        <div className={style.articles}>
          {
            articles.map((article, id) => (
              <Article
                key={id}
                image_url={article.image_url}
                alt={article.alt}
                article_url={article.article_url}
                title={article.title}
                summary={article.summary}
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