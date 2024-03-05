"use client"

import { useRouter } from 'next/navigation';
import style from './NewsCard.module.css';

type Props = {
	message1: string,
	message2: string,
	message3: string,
};

const NewsCard = ({message1, message2, message3}: Props) => {
	const router = useRouter();

	return (
		<div className={style.card} onClick={() => router.push("https://docs.google.com/forms/d/e/1FAIpQLSe2ErvOnVZPEU3-1YsTU3I2s6e_Shk03gS8dcg8FCjD3Gq9rA/viewform?usp=sf_link")}>
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