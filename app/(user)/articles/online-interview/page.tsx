"use client"

import { useEffect, useState } from 'react';
import style from '../Article.module.css';
import Image from 'next/image';

export default function OnlineInterview() {
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
          <h2 className={style.title_text}>第2回オンライン面談｜東大プロジェクト</h2>
        </div>
      </section>
      <div className={style.content}>
        <section className={style.text}>
          <div className={style.text_wrapper}>
            <h3 className={style.text_headline}>実施概要</h3>
            <p>2023年10月、今年度2度目となるオンライン面談を実施しました。昭和薬科大学附属高等学校、開邦高校の生徒ら29名を対象に、オンラインで進路相談などを受け付けました。</p>
            <p>今回のオンライン面談では、模試の振り返りや定期試験対策などをテーマに事前に相談内容を募り、生徒一人当たり20分の面談を実施しました。</p>
            <p>本記事では、第2回オンライン面談についてご紹介していきます。</p>
            <h3 className={style.text_headline}>スケジュール</h3>
            <p>今回のオンライン面談は、10月9日から10月13日までの1週間にわたって実施しました。</p>
            <p>第一回は今年の7月に同じく1週間にわたって実施し、今回が3ヶ月ぶりの実施となります。</p>
            <h3 className={style.text_headline}>相談内容</h3>
            <Image
              className={style.image}
              width={780}
              height={400}
              style={{objectFit:"cover"}}
              alt='今回の面談の満足度'
              src={"https://alohahp.s3.ap-northeast-1.amazonaws.com/articles/online-interview2.png"}
            />
            <p>オンライン面談では、以下のような相談が寄せられました。</p>
            <ul>
              <li>やりたいけど将来の幅が広くない学部と、あまり興味はないがが将来の幅が広がる学部、どちらを選ぶべきか</li>
              <li>古文の助動詞の活用を覚えるにはどうしたらよいか</li>
              <li>周りが勉強してると勉強したくなくなるのはどうしたらいいのか</li>
              <li>有機化学の構造決定の解き方を教えてください</li>
            </ul>
            <p>20分という限られた時間ではありましたが、一つ一つの質問に丁寧に回答することを心がけました。</p>
            <p>また、相談だけでなく、成績が上がったことを伝えてくれた生徒もいました。</p>
            <p>中には保護者の方と一緒に面談に参加してくれた方もいました。</p>
            <h3 className={style.text_headline}>参加した高校生の満足度</h3>
            <p>面談に参加してくれた高校生にアンケートを実施したところ、回答者全員が「どちらかといえば満足」以上との回答をしてくれました。</p>
            <p>参加者全員から回答をもらえたわけではありませんが、全体的に満足度の高い面談を実施することができたのではないかと思います。</p>
            <Image
              className={style.image}
              width={780}
              height={400}
              style={{objectFit:"cover"}}
              alt='今回の面談の満足度'
              src={"https://alohahp.s3.ap-northeast-1.amazonaws.com/articles/online-interview1.png"}
            />
            <p></p>
            <h3 className={style.text_headline}>まとめ</h3>
            <p>今回のオンライン面談では普段の勉強や進路に関する相談を受け付け、充実した時間を過ごすことができました。</p>
            <p>ALOHAは、オンライン面談をはじめとして難関大を目指す高校生のサポートを行っています。</p>
            <p>この面談が、生徒のモチベーションや意思決定の助けとなれば幸いです。</p>
          </div>
        </section>
        <div className={style.right_nav}>
          <section className={style.author}>
            <div className={style.author_wrapper}>
              <p><b>この記事の作者</b></p>
              <p>屋比久怜央</p>
              <p>東京大学　工学部　4年</p>
            </div>
          </section>
          <section className={tableOfContentsClass}>
            <div className={style.table_of_contents_wrapper}>
              <p><b>目次</b></p>
              <p className={style.table_of_contents_text}>実施概要</p>
              <p className={style.table_of_contents_text}>スケジュール</p>
              <p className={style.table_of_contents_text}>相談内容</p>
              <p className={style.table_of_contents_text}>参加した高校生の満足度</p>
              <p className={style.table_of_contents_text}>まとめ</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}