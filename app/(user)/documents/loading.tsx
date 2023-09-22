import style from './page.module.css';
import Document from './Document';

export default function Loading() {
  return (
    <section>
      <h1 className={style.title}>資料一覧</h1>
      <div className={style.titleBar}></div>
      <Document
        title="--------"
        embedURL="https://alohahp.s3.ap-northeast-1.amazonaws.com/documents/black.png"
        description="-------------"
        showURL="hogehoge"
        downloadURL="hogehoge"
        isLast={true}
      />
    </section>
  );
}