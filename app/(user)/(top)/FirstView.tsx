import style from './FirstView.module.css';
import Image from 'next/image';
import firstViewCopy from './src/first_view_copy.svg';
import firstViewSP from './src/first_view_sp.jpg';
import NewsCard from './NewsCard';

const FirstView = () => {
	return (
		<section className={style.first_view}>
			<Image
				className={style.image}
				src={"https://alohahp.s3.ap-northeast-1.amazonaws.com/top/first_view.jpg"}
				// height={590}
				fill={true}
				priority
				alt="安田講堂"
			/>
			<Image
				className={style.imageSP}
				src={firstViewSP}
				height={627}
				priority
				alt='安田講堂'
			/>
			<Image
				src={firstViewCopy}
				alt="手書きのキャッチコピー"
				className={style.hand_copy}
				width={700}
				height={360}
			/>

			{/* 三角形 */}
			{/* <div className={style.triangle1}></div>
			<div className={style.triangle2}></div> */}

			{/* カード */}
			<NewsCard
				message1='【新プロジェクト】'
				message2='個人版東大プロジェクト始動！'
				message3='参加申し込みはこちら ▶︎'
			/>

			{/* <h2 className={style.copy1}>沖縄から</h2>
			<h2 className={style.copy2}>東大を</h2>
			<h2 className={style.copy3}>日常に</h2> */}

			<div className={style.border}></div>
		</section>
	);
}

export default FirstView;