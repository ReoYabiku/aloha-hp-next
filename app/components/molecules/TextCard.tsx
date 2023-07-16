import style from './TextCard.module.css';

type TextCartProps = {
  text: string
}

export default function TextCard({ text }: TextCartProps) {
  return (
    <div className={style.container}>
      <p className={style.text}>{text}</p>
    </div>
  );
}