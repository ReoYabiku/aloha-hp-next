"use client"

import { useEffect, useState } from 'react';
import style from './Article.module.css';
import Image from 'next/image';

export default function VisitingLecture() {
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
          <h2 className={style.title_text}>出張模擬講義</h2>
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
              alt='宇野先生の講義に集中する生徒たち'
              src={"https://alohahp.s3.ap-northeast-1.amazonaws.com/articles/visiting-lecture1.jpg"}
            />
            <h3 className={style.text_headline}>企画概要</h3>
            <p>2023年3月22日、沖縄県昭和薬科大学附属高校の生徒を対象に、同高校にて出張模擬講義を開催しました。</p>
            <p>今回の出張模擬講義では、東京大学で教鞭を取られている宇野健司先生を東京からお呼びしました。宇野先生は大和総研にて副部長を務めながら、東京大学にて宇野ゼミと呼ばれる講義を毎週開講されてますい。同様の講義を東北大学、北海道大学、上智大学などでも展開されています。</p>
            <p>以下にて、模擬講義の内容及び生徒様たちのご様子に関するご報告を行います。</p>
            <h3 className={style.text_headline}>模擬講義の流れ</h3>
            <p>本模擬講義は、以下のようなタイムスケジュールで行いました。</p>
            <table>
              <tbody>
                <tr><td>14:00〜15:50</td><td>模擬講義</td></tr>
                <tr><td>15:50〜16:00</td><td>休憩</td></tr>
                <tr><td>16:00〜16:10</td><td>東大魅力紹介</td></tr>
                <tr><td>16:10〜16:30</td><td>質疑応答</td></tr>
              </tbody>
            </table>
            <h3 className={style.text_headline}>模擬講義</h3>
            <Image
              className={style.image}
              width={780}
              height={400}
              style={{objectFit:"cover"}}
              alt='宇野先生の講義に集中する生徒たち'
              src={"https://alohahp.s3.ap-northeast-1.amazonaws.com/articles/visiting-lecture1.jpg"}
            />
            <p>模擬講義では、宇野先生に東大などで実際に行っている講義と同様のものを行っていただきました。</p>
            <p>宇野ゼミの講義は「問題解決のための思考法」を学ぶことができる授業であり、大学の他の講義と比べ、学んだことを実際に日常の考え方に生かすことができます。</p>
            <Image
              className={style.image}
              width={780}
              height={400}
              style={{objectFit:"cover"}}
              alt='積極的に講義に参加する生徒たち'
              src={"https://alohahp.s3.ap-northeast-1.amazonaws.com/articles/visiting-lecture3.jpg"}
            />
            <p>宇野先生が用意したケースを用いて、生徒様はそのケースの問題点や解決策を考え、グループでディスカッションを行いました。その後、意見発表の時間では必ず一人一回は意見を言う決まりがありました。はじめは緊張していた生徒も、周りの生徒に触発されて自分からしっかり意見を言えるようになっていました。</p>
            <p>「講義」と聞くと、生徒が受け身になる一方通行的な講義がイメージされがちですが、宇野先生の講義は先生と生徒との双方向のコミュニケーションを大事にする講義になっており、生徒だけでなく高校の先生からも非常に好評でした。</p>
            <h3 className={style.text_headline}>東大魅力紹介</h3>
            <Image
              className={style.image}
              width={780}
              height={400}
              style={{objectFit:"cover"}}
              alt='東大の魅力を紹介するALOHA代表'
              src={"https://alohahp.s3.ap-northeast-1.amazonaws.com/articles/visiting-lecture2.jpg"}
            />
            <p>このコーナーでは、私たち学生団体ALOHAのメンバーが自身の経験をもとに東京大学の魅力を生徒様に伝えました。</p>
            <p>沖縄県から東大を志望する生徒が少ない理由の一つとして、東大への憧れの低さがあげられます。それは、生徒が東大がどういう大学か知らないからです。もう少し正しく言うと、東京大学というものに触れる機会が少なく、東大を志望しようと思うきっかけがほとんどないのです。</p>
            <p>この問題を解消するため、沖縄の生徒が東大の情報を得る機会を私たちは作っています。このコーナーはその機会の一つです。</p>
            <h3 className={style.text_headline}>まとめ</h3>
            <p>今回の出張模擬講義は、生徒様からも先生方からも好評をいただきました。</p>
            <p>宇野先生の双方向の講義は、その内容の充実度だけでなく生徒様が発言しやすい空気を作ってくれました。その後の質疑応答では宇野先生や我々ALOHAメンバーへの質問が耐えなかったです。</p>
            <p>この模擬講義を通して、生徒様が東京大学に少しでも興味を持っていただけたら幸いです。</p>
          </div>
        </section>
        <div className={style.right_nav}>
          <section className={style.author}>
            <div className={style.author_wrapper}>
              <p><b>記事の作者</b></p>
              <p>伊礼漢</p>
              <p>東京大学　経済学部　３年</p>
            </div>
          </section>
          <section className={tableOfContentsClass}>
            <div className={style.table_of_contents_wrapper}>
              <p><b>目次</b></p>
              <p className={style.table_of_contents_text}>企画概要</p>
              <p className={style.table_of_contents_text}>模擬講義の流れ</p>
              <p className={style.table_of_contents_text}>模擬講義</p>
              <p className={style.table_of_contents_text}>東大魅力紹介</p>
              <p className={style.table_of_contents_text}>まとめ</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}