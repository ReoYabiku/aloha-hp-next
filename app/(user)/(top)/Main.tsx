import TextCard from './TextCard';
import style from './Main.module.css';

type TextCartProps = {
  text: string
  path: string
}

export default function Main() {

  // TODO: 各活動に合わせて#以降を記載する
  const textCards: TextCartProps[] = [
    {
      text: "出張講演会",
      path: "/activities#"
    },
    {
      text: "東大ツアー",
      path: "/activities#"
    },
    {
      text: "東大生交流会",
      path: "/activities#"
    },
    {
      text: "勉強合宿",
      path: "/activities#"
    }
  ]

  return (
    <section>
      <h2 className={style.head}>活動実績</h2>
      <div className={style.cards}>
        {
          textCards.map((textCard) => (
            <TextCard
              key={textCard.text}
              text={textCard.text}
              path={textCard.path}
            />
          ))
        }
      </div>
      
    </section>
  );
}