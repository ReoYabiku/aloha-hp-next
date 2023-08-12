import style from './Title.module.css';

export default function Title() {
  return (
    <section className={style.background}>
      <p className={style.subtitle}>団体紹介</p>
      <h1 className={style.title}>Introduction</h1>
      <h2 className={style.description}>ALOHAは、沖縄から難関大学を目指す高校生を応援する学生団体です。</h2>
    </section>
  );
}