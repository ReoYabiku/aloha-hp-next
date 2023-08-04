import style from './NewsCard.module.css';

type Props = {
	message1: string,
	message2: string,
	message3: string,
};

const NewsCard = ({message1, message2, message3}: Props) => {
	return (
		<div className={style.card}>
			<div className={style.top}></div>
			<div className={style.content}>
				<p className={style.text}>&nbsp;&nbsp;{message1}</p>
				<p className={style.text}>&nbsp;&nbsp;{message2}</p>
			</div>
			<div className={style.bottom}>
				<p className={style.text}>&nbsp;&nbsp;{message3}</p>
			</div>
		</div>
	);
}

export default NewsCard;