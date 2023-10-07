import { ReactNode } from 'react';
import style from './Content.module.css';

type ContentProps = {
  subtitle: string,
  title: string,
  isgreen: boolean,
  children: ReactNode,
  id: string,
}

export default function Content({subtitle, title, isgreen, children, id}: ContentProps) {
  return (
    <section className={isgreen ? style.backgroundGreen:  style.backgroudWhite} id={id}>
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