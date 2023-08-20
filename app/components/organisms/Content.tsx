import { ReactNode } from 'react';
import style from './Content.module.css';

type ContentProps = {
  subtitle: string,
  title: string,
  isgreen: boolean,
  children: ReactNode
}

export default function Content({subtitle, title, isgreen, children}: ContentProps) {
  return (
    <section className={isgreen ? style.backgroundGreen:  style.backgroudWhite}>
      <div className={style.center}>
        <p className={style.subtitle}>{subtitle}</p>
        <h2 className={style.title}>{title}</h2>
        <div className={style.childrenWrapper}>
          {children}
        </div>
      </div>
    </section>
  );
}