import style from './FirstView.module.css';
import NewsCard from './NewsCard';
import Image from 'next/image';
import firstViewPic from './src/first_view.jpg';
import firstViewSPPic from './src/first_view_sp.png';

const FirstView = () => {
	return (
		<section className={style.first_view}>
			<Image
				className={style.image}
				src={firstViewPic}
				height={600}
				style={{"objectFit":"contain"}}
				alt="安田講堂"
			/>
			<Image
				className={style.imageSP}
				src={firstViewSPPic}
				fill={true}
				alt='安田講堂'
			/>

			{/* 三角形 */}
			<div className={style.triangle1}></div>
			<div className={style.triangle2}></div>

			{/* カード */}
			{/* <NewsCard
				message1='【最新イベント情報】'
				message2='一泊二日 勉強合宿開催決定'
				message3='参加申し込みはこちら ▶︎'
			/> */}

			<h2 className={style.copy1}>沖縄から</h2>
			<h2 className={style.copy2}>東大を</h2>
			<h2 className={style.copy3}>日常に</h2>

			<div className={style.border}></div>

			<h2 className={style.copySP1}>沖縄から東大を、</h2>
			<h2 className={style.copySP2}>日常に</h2>
		</section>
	);
}

export default FirstView;