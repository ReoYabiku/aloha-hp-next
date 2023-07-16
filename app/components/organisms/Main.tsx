import TextCard from '../molecules/TextCard';
import style from './Main.module.css';

type TextCartProps = {
  text: string
}

export default function Main() {
  const textCards: TextCartProps[] = [
    {
      text: "出張講演会"
    },
    {
      text: "東大ツアー"
    },
    {
      text: "東大生交流会"
    },
    {
      text: "勉強合宿"
    }
  ]

  return (
    <section>
      <h2 className={style.head}>活動実績</h2>
      <div className={style.cards}>
        {
          textCards.map((textCard) => (
            <TextCard
              text={textCard.text}
            />
          ))
        }
      </div>
      
    </section>
  );
}