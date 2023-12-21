import Article, { ArticleProps } from '../molecules/Article';
import DummyArticle from '../molecules/DummyArticle';
import style from './Articles.module.css';

type ArticlesProps = {
    articles: ArticleProps[]
}

export default function Articles({articles}: ArticlesProps) {
    const articlesPerRow = 3;
    const rows = Math.floor(articles.length / articlesPerRow);
    const rest = articles.length % articlesPerRow;

    return (
        <>
            {
                Array.from({length: rows}, (_, i) => (
                    <div className={style.container}>
                        {
                            articles.slice(i*articlesPerRow,(i+1)*articlesPerRow).map((article, id) => (
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
                ))
            }
            <div className={style.container}>
                {
                    articles.slice(rows*articlesPerRow,rows*articlesPerRow+rest).map((article, id) => (
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
                {
                    Array.from({length: (articlesPerRow-rest)%3}).map((_,i) => <DummyArticle key={i}/>)
                }
            </div>
        </>
    );
}