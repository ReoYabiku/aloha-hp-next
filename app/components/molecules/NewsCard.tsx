import style from './NewsCard.module.css';

type Props = {
    message1: string,
    message2: string,
    message3: string,
    top: string,
    left: string
};

const NewsCard = ({message1, message2, message3, top, left}: Props) => {
    return (
        <div className={style.card} style={{top: top, left: left}}>
            <div className={style.top}></div>
            <div className={style.content}>
                <p>&nbsp;&nbsp;{message1}</p>
                <p>&nbsp;&nbsp;{message2}</p>
            </div>
            <div className={style.bottom}>
                <p>&nbsp;&nbsp;{message3}</p>
            </div>
        </div>
    );
}

export default NewsCard;