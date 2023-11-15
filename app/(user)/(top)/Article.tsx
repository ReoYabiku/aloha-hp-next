"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import style from './Article.module.css';

export type ArticleProps = {
  image_url: string,
  alt: string,
  title: string,
  article_url: string,
  summary: string,
}

export default function Article({ image_url, alt, title, article_url, summary }: ArticleProps) {
  const router = useRouter();
  return (
    <div className={style.container} onClick={() => router.push(article_url)}>
      <Image
        className={style.image}
        src={image_url}
        sizes='100vw'
        style={{
          // "objectFit": "cover"
          width: '100%',
          height: 'auto',
        }}
        width={350}
        height={200}
        alt={alt}
      />
      <div className={style.text}>
        <h3>{title}</h3>
        <p className={style.summary}>{summary}</p>
      </div>
    </div>
  )
}