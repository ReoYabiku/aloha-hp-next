"use client"

import { useEffect, useState } from 'react';
import style from '../Article.module.css';
import Image from 'next/image';

export default function StudyCamp() {
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
          <h2 className={style.title_text}>勉強合宿</h2>
        </div>
      </section>
      <div className={style.content}>
        <section className={style.text}>
          <div className={style.text_wrapper}>
            <h3 className={style.text_headline}>企画概要</h3>
            <p>2023年9月9日から10日の2日間に渡り、沖縄県奥武山にある沖縄国際ユースホステルで沖縄県立開邦高等学校と昭和薬科大学附属高等学校の生徒28名を対象に、２校合同勉強合宿を開催しました。</p>
            <p>今回の合宿では「生徒が自分自身の現状を把握し、能動的な学習をするためのきっかけを作る」という目的のもと、難関大学を目指す仲間と共に学び、共に高め合う機会を実現しました。</p>
            <p>以下では合宿の内容や参加生徒の様子についてご紹介します。</p>
            <h3 className={style.text_headline}>合宿の流れ</h3>
            <p>今回の合宿は以下のスケジュールで実施しました。</p>
            <Image
              className={style.image}
              width={780}
              height={400}
              style={{objectFit:"cover"}}
              alt='勉強合宿の二日間のスケジュール'
              src={"https://alohahp.s3.ap-northeast-1.amazonaws.com/articles/study-camp1.png"}
            />
            <h3 className={style.text_headline}>対抗戦</h3>
            <Image
              className={style.image}
              width={780}
              height={400}
              style={{objectFit:"cover"}}
              alt='対抗戦に取り組む生徒達'
              src={"https://alohahp.s3.ap-northeast-1.amazonaws.com/articles/study-camp2.jpg"}
            />
            <p>対抗戦では、チームに分かれて実際の入試問題を含んだ数学の問題を解き、その正解数を競い合うゲームを実施しました。</p>
            <p>チーム内の親睦を深めながら、他の人の解き方や思考を吸収する事を目的としました。1人で勉強している時にはなかった発想に出会い、同じレベルを目指す仲間から良い刺激を受ける機会になったと思います。</p>
            <h3 className={style.text_headline}>特別授業　数学＆国語</h3>
            <Image
              className={style.image}
              width={780}
              height={400}
              style={{objectFit:"cover"}}
              alt='数学の特別授業の様子'
              src={"https://alohahp.s3.ap-northeast-1.amazonaws.com/articles/study-camp3.jpg"}
            />
            <p>特別授業では、開邦と薬科の先生方をお招きして実際の入試問題を扱った授業を行いました。</p>
            <p>数学の授業では、「悩んでいる時間」にこそ価値があり数学的思考を鍛えられる時間だといった、普段の授業では教わらない難関大数学への取り組み方をご講義していただきました。</p>
            <p>国語の授業では、東大と京大の入試問題の比較を通して大学入試で求められる現代文の能力についてご講義していただきました。大学設立の変遷や問題の題材の選び方などから、それぞれの大学の求める人材について紹介していただきました。</p>
            <p>高校１年生、２年生の受験に不安を感じている生徒達に向けて、先生方から大学受験に向けた熱いエールもいただきました。</p>
            <h3 className={style.text_headline}>暗記演習</h3>
            <Image
              className={style.image}
              width={780}
              height={400}
              style={{objectFit:"cover"}}
              alt='暗記演習の様子'
              src={"https://alohahp.s3.ap-northeast-1.amazonaws.com/articles/study-camp4.jpg"}
            />
            <p>10分間の英語例文暗記と確認テストを繰り返し、暗記力と集中力の限界にチャレンジする特訓を行いました。</p>
            <p>生徒達は短時間での暗記に苦戦していましたが、回数をこなすほどに集中力が上がっていく様子が見受けられました。暗記が苦手な生徒の壁を突破するきっかけになってくれたら良いと思います。</p>
            <h3 className={style.text_headline}>東大生との座談会</h3>
            <p>３人の東大生を囲んで、学習に活かせるような質問を聞くコーナーを行いました。</p>
            <p>通常の東大生交流会とは違って「勉強合宿」の特色を活かせるよう、東大生が受験生であった時の勉強法やノートの使い方などを紹介しました。</p>
            <p>生徒同士の意見交換も行い、学校・学年・得意分野が違う仲間の勉強環境や意欲を聞くことができ、新鮮な経験になったと思います。</p>
            <h3 className={style.text_headline}>合宿を通して</h3>
            <p>この合宿の目的は、同じレベルの大学を目指す仲間とともに過ごすことで自らを相対化し、これからの受験勉強を改善するきっかけを作ることでした。</p>
            <p>休憩時間中でも数学や英語の問題で盛り上がった生徒の様子が見られたことから、仲間とお互いに刺激し合うことができた良い合宿であったと思います。</p>
            <p>この合宿を通して、参加生徒達には掲げた高い目標を達成するためのモチベーションを向上させ、受験を乗り越える気概を持ってもらえたら幸いです。</p>
          </div>
        </section>
        <div className={style.right_nav}>
          <section className={style.author}>
            <div className={style.author_wrapper}>
              <p><b>この記事の作者</b></p>
              <p>伊礼理貴</p>
              <p>東京大学　文科一類　１年</p>
            </div>
          </section>
          <section className={tableOfContentsClass}>
            <div className={style.table_of_contents_wrapper}>
              <p><b>目次</b></p>
              <p className={style.table_of_contents_text}>企画概要</p>
              <p className={style.table_of_contents_text}>合宿の流れ</p>
              <p className={style.table_of_contents_text}>対抗戦</p>
              <p className={style.table_of_contents_text}>特別授業　数学＆国語</p>
              <p className={style.table_of_contents_text}>暗記演習</p>
              <p className={style.table_of_contents_text}>東大生との座談会</p>
              <p className={style.table_of_contents_text}>合宿を通して</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}