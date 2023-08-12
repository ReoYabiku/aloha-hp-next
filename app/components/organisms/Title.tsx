import style from './Title.module.css';

type TitleProps = {
  subtitle: string,
  title: string,
  description: string,
}

export default function Title({subtitle, title, description}: TitleProps) {
  return (
    <section className={style.background}>
      <p className={style.subtitle}>{subtitle}</p>
      <h1 className={style.title}>{title}</h1>
      <h2 className={style.description}>{description}</h2>
    </section>
  );
}