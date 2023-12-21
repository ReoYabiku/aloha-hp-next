import Article, { ArticleProps } from '../molecules/Article';
import style from './Articles.module.css';

type ArticlesProps = {
  articles: ArticleProps[]
}

export default function Articles({articles}: ArticlesProps) {
  return (
    <div className={style.container}>
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
  );
}