"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import style from './Article.module.css';
import { useEffect } from 'react';

export type ArticleProps = {
  image_url: string,
  alt: string,
  title: string,
  article_url: string,
  summary: string,
  date: string,
}

export default function Article({ image_url, alt, title, article_url, summary, date }: ArticleProps) {
  const router = useRouter();

  useEffect(() => router.prefetch(article_url));

  return (
    <div className={style.container} onClick={() => router.push(article_url)}>
      <Image
        className={style.image}
        src={image_url}
        sizes='100vw'
        style={{
          objectFit: 'cover',
          width: '100%',
          height: 'auto',
        }}
        width={360}
        height={200}
        alt={alt}
      />
      <div className={style.text}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.summary}>{summary}</p>
        <p className={style.date}>{date}</p>
      </div>
    </div>
  )
}