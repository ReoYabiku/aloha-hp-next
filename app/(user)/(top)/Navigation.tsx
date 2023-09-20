import NavigationUnit from './NavigationUnit';
import introductionPic from './src/introduction.png';
import membersPic from './src/members.png';
import documentsPic from './src/documents.png';
import activiriesPic from './src/activities.png';
import { StaticImageData } from 'next/image';
import style from './Navigation.module.css';

type NavigationUnitProps = {
  path: string
  name: string
  img: StaticImageData
}

export default function Navigation() {
	const navDetails: NavigationUnitProps[] = [
		{
			path: '/introduction',
			name: '団体紹介',
			img: introductionPic
		},
		{
			path: '/members',
			name: 'メンバー紹介',
			img: membersPic
		},
		{
			path: '/documents',
			name: '資料一覧',
			img: documentsPic
		},
		{
			path: '/activities',
			name: '活動実績',
			img: activiriesPic
		}
	]

	return (
		<section className={style.container}>
			{
				navDetails.map((props) => (
					<NavigationUnit
						key={props.name}
						path={props.path}
						name={props.name}
						img={props.img}
					/>
				))
			}
		</section>
	);
}