"use client"

import { useEffect, useState } from 'react';
import style from './page.module.css';

export default function Articles() {
  const [tableOfContentsClass, setTableOfContentsClass] = useState(style.table_of_contents)
  
  useEffect(() => {
    const handleScroll = () => {
    
      if (typeof window !== 'undefined') {
        var scrollY = window.scrollY;
        var min = document.body.scrollHeight - 780;
        if (scrollY > min) {
          setTableOfContentsClass(() => `${style.table_of_contents} ${style.static}`)
        } else if (scrollY > 430) {
          setTableOfContentsClass(() => `${style.table_of_contents} ${style.fix}`)
        } else {
          setTableOfContentsClass(() => style.table_of_contents)
        }
      }

    }
    window.addEventListener("scroll", handleScroll)
  }, []);

  return (
    <div className={style.container}>
      <section className={style.title}>
        <div className={style.title_box}>
          <h2 className={style.title_text}>タイトル</h2>
        </div>
      </section>
      <div className={style.content}>
        <section className={style.text}>
          <div className={style.text_wrapper}>
            <h3 className={style.text_headline}>小見出し</h3>
            <p>本文。ちゃんと長い文章を書かないと横幅が確保できないのは問題かも？ちゃんと長い文章を書かないと横幅が確保できないのは問題かも？</p>
            <h3 className={style.text_headline}>小見出し</h3>
            <p>本文。</p>
            <h3 className={style.text_headline}>小見出し</h3>
            <p>本文。</p>
            <h3 className={style.text_headline}>小見出し</h3>
            <p>本文。</p>
            <h3 className={style.text_headline}>小見出し</h3>
            <p>本文。</p>
            <h3 className={style.text_headline}>小見出し</h3>
            <p>本文。</p>
          </div>
        </section>
        <div className={style.right_nav}>
          <section className={style.author}>
            <div className={style.author_wrapper}>
              <p>作者情報</p>
            </div>
          </section>
          <section className={tableOfContentsClass}>
            <div className={style.table_of_contents_wrapper}>
              <p>目次</p>
              <p>小見出し1</p>
              <p>小見出し2</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}