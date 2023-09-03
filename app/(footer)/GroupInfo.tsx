import style from "./GroupInfo.module.css";

export default function GroupInfo() {
  return (
    <div className={style.container}>
      <h2 className={style.title}>ALOHA</h2>
      <h3 className={style.subtitle}>沖縄から東大を、<wbr />日常に</h3>
      <p className={style.text}>お問い合わせ：080-1234-1234（伊礼）</p>
    </div>
  );
}