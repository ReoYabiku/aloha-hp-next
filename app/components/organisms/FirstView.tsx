import style from './FirstView.module.css';
import NewsCard from '../molecules/NewsCard';
import Image from 'next/image';
import firstViewPic from './first_view.jpg';

const FirstView = () => {
	return (
		<section className={style.first_view}>
			<Image
				className={style.image}
				src={firstViewPic}
				alt="安田講堂"
			/>

			{/* 三角形 */}
			<div className={style.triangle1}></div>
			<div className={style.triangle2}></div>

			{/* カード */}
			<NewsCard
				message1='【最新イベント情報】'
				message2='一泊二日 勉強合宿開催決定'
				message3='参加申し込みはこちら ▶︎'
				top='20px'
				left='20px'
			/>

			<h2 className={style.copy}>
				沖縄から東大を、<br />
				日常に
			</h2>
		</section>
	);
}

export default FirstView;