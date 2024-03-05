"use client"

import { useEffect, useState } from 'react';
import style from '../Article.module.css';
import Image from 'next/image';

export default function MeetUp() {
  const [tableOfContentsClass, setTableOfContentsClass] = useState(style.table_of_contents)
  
  useEffect(() => {
    const handleScroll = () => {
    
      if (typeof window !== 'undefined') {
        var scrollY = window.scrollY;
        var min = document.body.scrollHeight - 780;
        if (scrollY > min) {
          setTableOfContentsClass(() => `${style.table_of_contents} ${style.static}`)
        } else if (scrollY > 410) {
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
          <h2 className={style.title_text}>東大生交流会＠昭和薬科大学附属高等学校・中学校</h2>
        </div>
      </section>
      <div className={style.content}>
        <section className={style.text}>
          <div className={style.text_wrapper}>
            <Image
              className={style.image}
              width={780}
              height={400}
              style={{objectFit:"cover"}}
              alt='教壇で話すALOHA代表伊礼'
              src={"https://alohahp.s3.ap-northeast-1.amazonaws.com/articles/meet-up1.jpg"}
            />
            <h3 className={style.text_headline}>概要</h3>
            <p>2023年6月17日(土)に、昭和薬科大学附属高等学校・中学校で東大生交流会を実施しました。</p>
            <p>本企画には昭和薬科大学附属高等学校出身の現役東大生５名が参加し、東京大学についての紹介やリアルな受験体験談などをお話ししたほか、東大生チームに挑むクイズ大会や、おしゃべりしながら質問や相談ができる自由な交流時間などもあり、内容が盛りだくさんの楽しい企画となりました。</p>
            <p>東京大学を目指している中高生に限らず、大学受験を控える皆さんにとって有意義な時間になったと思います。</p>
            <p>以下では、交流会の内容を具体的にご紹介します。</p>
            <h3 className={style.text_headline}>プログラム</h3>
            <table>
              <tbody>
                <tr><td>13:15~</td><td>開始</td></tr>
                <tr><td>13:20~</td><td>ALOHA・東大pj紹介</td></tr>
                <tr><td>13:30~</td><td>東大紹介</td></tr>
                <tr><td>13:40~</td><td>受験体験談①</td></tr>
                <tr><td>13:50~</td><td>受験体験談②</td></tr>
                <tr><td>14:00~</td><td>受検体験談③</td></tr>
                <tr><td>14:10~</td><td>質疑応答</td></tr>
                <tr><td>      </td><td>休憩</td></tr>
                <tr><td>14:30~15:00</td><td>クイズ大会</td></tr>
                <tr><td>~15:05</td><td>全体会終了</td></tr>
                <tr><td>15:10~15:45</td><td>グループ交流会</td></tr>
                <tr><td>~15:50</td><td>終了</td></tr>
              </tbody>
            </table>
            <h3 className={style.text_headline}>１東大紹介</h3>
            <p>まずはじめに、東京大学の授業やプログラム、キャンパス内の施設などをご紹介しました。特色ある授業内容や立派な図書館などに、皆さん興味津々の様子でした。東京大学がどんなところなのか、少しイメージを持っていただけたと思います。</p>
            <h3 className={style.text_headline}>２受験体験談</h3>
            <p>受験体験談の発表では、３人の東大生が自身の受験体験談を紹介しました。３人とも、文系・理系や部活動への参加、勉強への向き合い方などが異なり、それぞれ個性溢れる体験談を語っていました。中高生の皆さんは、自分に合いそうなものを選んで、ぜひ受験生活に生かしてほしいと思います。</p>
            <Image
              className={style.image}
              width={780}
              height={400}
              style={{objectFit:"cover"}}
              alt='受験体験談'
              src={"https://alohahp.s3.ap-northeast-1.amazonaws.com/articles/meet-up2.jpg"}
            />
            <h3 className={style.text_headline}>３クイズ大会</h3>
            <p>クイズ大会は、昭和薬科大学附属高等学校・中学校のクイズ研究会の皆さんにご協力いただきました。クイズ研究会の皆さんが作ってくれた、東大に関するクイズや昭和薬科大学附属高等学校・中学校に関するクイズなどはどれも面白く、非常に盛り上がりました。結果は東大生チームの負け・・・。悔しいですが、中高生の皆さんの生き生きとした笑顔を見られてよかったです！</p>
            <Image
              className={style.image}
              width={780}
              height={400}
              style={{objectFit:"cover"}}
              alt='チームでクイズの答えを考える、昭和薬科の生徒達'
              src={"https://alohahp.s3.ap-northeast-1.amazonaws.com/articles/meet-up3.jpg"}
            />
            <h3 className={style.text_headline}>４自由交流</h3>
            <p>最後の自由交流時間では、中高生の皆さんと楽しくおしゃべりしたり、受験に関する質問や相談に応じたりしながら、仲を深めました。東大生の”恋愛事情”など、現役東大生にしか話せないような話題も！？最後まで和気あいあいとした雰囲気で交流することができました。</p>
            <h3 className={style.text_headline}>まとめ</h3>
            <p>東大生交流会終了後、「東大に行きたくなった！」と言うお声を聞くことができました。東京大学が素晴らしい場所であることや、沖縄からも目指せる大学であることなど、私たちの想いが皆さんに伝わったと思うと大変嬉しいです。もちろん、東大を目指していない方にも、今回の交流会で得たものをこれからの学校生活、受験生活に生かしてほしいと思います。また皆さんに会える日を楽しみにしています！</p>
            <Image
              className={style.image}
              width={780}
              height={400}
              style={{objectFit:"cover"}}
              alt='昭和薬科の生徒とALOHAメンバーの集合写真'
              src={"https://alohahp.s3.ap-northeast-1.amazonaws.com/articles/meet-up4.jpg"}
            />
          </div>
        </section>
        <div className={style.right_nav}>
          <section className={style.author}>
            <div className={style.author_wrapper}>
              <p><b>この記事の作者</b></p>
              <p>仲本梨乃奈</p>
              <p>東京大学　理科二類　２年</p>
            </div>
          </section>
          <section className={tableOfContentsClass}>
            <div className={style.table_of_contents_wrapper}>
              <p><b>目次</b></p>
              <p className={style.table_of_contents_text}>概要</p>
              <p className={style.table_of_contents_text}>プログラム</p>
              <p className={style.table_of_contents_text}>１東大紹介</p>
              <p className={style.table_of_contents_text}>２受験体験</p>
              <p className={style.table_of_contents_text}>３クイズ大会</p>
              <p className={style.table_of_contents_text}>４自由交流</p>
              <p className={style.table_of_contents_text}>まとめ</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}