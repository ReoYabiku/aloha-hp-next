import style from './Content.module.css';

type ContentProps = {
  subtitle: string,
  title: string,
  text: string,
  isgreen: boolean,
}

export default function Content({subtitle, title, text, isgreen}: ContentProps) {
  return (
    <section className={isgreen ? style.backgroundGreen:  style.backgroudWhite}>
      <p className={style.subtitle}>{subtitle}</p>
      <h2 className={style.title}>{title}</h2>
      <p className={style.text}>
        {text}
      </p>
    </section>
  );
}