import Link from 'next/link';
import style from './Document.module.css';

type DocumentProps = {
  title: string,
  embedURL: string,
  description: string,
  showURL: string,
  downloadURL: string,
  isLast: boolean,
};

export default function Document({title, embedURL, description, showURL, downloadURL, isLast}: DocumentProps) {
  return (
    <section>
      <div className={style.container}>
        <div className={style.fileSample}>
          <h2 className={style.title} id={title}>{title}</h2>
          <iframe src={embedURL} height={267} width={190} className={style.iframe}></iframe>
        </div>
        <div className={style.text}>
          <p className={style.description}>{description}</p>
          <ul className={style.lists}>
            <li className={style.eraseDot}>
              <u className={style.link}>
                <Link href={showURL} className={style.link}>閲覧はこちら</Link>
              </u>
            </li>
            <li className={style.eraseDot}>
              <u className={style.link}>
                <Link href={downloadURL} className={style.link}>ダウンロードはこちら</Link>
              </u>
            </li>
          </ul>
        </div>
      </div>
        {
          !isLast && <div className={style.bar}></div>
        }
    </section>
  );
}
