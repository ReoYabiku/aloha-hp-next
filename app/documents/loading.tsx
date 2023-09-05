import style from './page.module.css';
import Document from './Document';

export default function Loading() {
  return (
    <section>
      <h1 className={style.title}>資料一覧</h1>
      <div className={style.titleBar}></div>
      <Document
        title="ファイル名"
        embedURL="https://alohahp.s3.ap-northeast-1.amazonaws.com/documents/loading.png"
        description="説明文　　　　　　　　　　　　　　　　　　　　　　　　　　　"
        showURL="hogehoge"
        downloadURL="hogehoge"
        isLast={true}
      />
    </section>
  );
}