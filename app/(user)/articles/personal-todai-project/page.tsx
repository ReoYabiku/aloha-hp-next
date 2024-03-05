"use client"

import { useEffect, useState } from 'react';
import style from '../Article.module.css';
import { useRouter } from 'next/navigation';

export default function PersonalTodaiProject() {
  const [tableOfContentsClass, setTableOfContentsClass] = useState(style.table_of_contents)
  const router = useRouter();
  
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
          <h2 className={style.title_text}>「個人版東大プロジェクト」始動！！</h2>
        </div>
      </section>
      <div className={style.content}>
        <section className={style.text}>
          <div className={style.text_wrapper}>
            <h3 className={style.text_headline}>はじめに</h3>
            <p>沖縄から東京大学を目指す中高生を支援する<strong>「東大プロジェクト」</strong>に、このたび<strong>「個人版」</strong>が新設されることになりました！</p>
            <p>これまで、学校版東大プロジェクトとして県内の２校と提携し、さまざまなイベントや面談などを通して生徒のみなさんをサポートして参りました。</p>
            <p>そして今回、学校の枠を超えてより多くの中高生を応援したいという想いから、学校を介さない<strong>「個人版東大プロジェクト」</strong>を新設することになりました。</p>
            <div className={style.button_wrapper}>
              <button onClick={() => router.push("https://forms.gle/XSjMNUa2U3fsGkBz6")} className={style.button}>
                <strong>入会申し込みフォームはこちら</strong>
              </button>
            </div>
            <h3 className={style.text_headline}>プロジェクト詳細</h3>
            <table className={style.table}>
              <tbody>
                <tr>
                  <th>対象者</th>
                  <td>沖縄県内の中学生・高校生（現状の成績や志望校は問いません）</td>
                </tr>
                <tr>
                  <th>内容</th>
                  <td>オンライン面談(4回〜/年)・オンライン交流会(1回〜/年)・その他（ご要望に応じて随時イベントを企画する予定です）</td>
                </tr>
                <tr>
                  <th>入会諸費用</th>
                  <td>入会費¥2,000・年会費¥2,000</td>
                </tr>
              </tbody>
            </table>
            <h3 className={style.text_headline}>＊＊プロジェクト新設記念イベント＊＊</h3>
            <p>個人版東大プロジェクトの新設を記念して、2024年3月末までにご入会の方は入会費を<strong>¥2,000→《¥0》</strong>とさせていただいております！</p>
            <p>ご友人様へのご紹介も大歓迎ですので、みなさまぜひこの機会にご参加ください！</p>
            <h3 className={style.text_headline}>入会方法</h3>
            <ol>
              <li><strong>入会申し込みフォームを提出する</strong></li>
              <li><strong>入会諸費用を振り込む</strong></li>
              <li><strong>Google Classroomへ参加する(生徒様のみ)</strong></li>
            </ol>
            <div className={style.button_wrapper}>
              <button onClick={() => router.push("https://forms.gle/XSjMNUa2U3fsGkBz6")} className={style.button}>
                <strong>入会申し込みフォームはこちら</strong>
              </button>
            </div>
            <p>お問い合わせは公式LINEよりお気軽にご連絡ください。</p>
            <p>担当：仲本</p>
          </div>
        </section>
        <div className={style.right_nav}>
          <section className={style.author}>
            <div className={style.author_wrapper}>
              <p>この記事の作者</p>
              <p>仲本梨乃奈</p>
              <p>東京大学　理科二類　２年</p>
            </div>
          </section>
          <section className={tableOfContentsClass}>
            <div className={style.table_of_contents_wrapper}>
              <p>はじめに</p>
              <p>プロジェクト詳細</p>
              <p>＊＊プロジェクト新設記念イベント＊＊</p>
              <p>入会方法</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}