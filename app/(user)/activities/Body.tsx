import ActivityUnit from './ActivityUnit';
import { ArticleProps } from '@/app/components/molecules/Article';
import Articles from '@/app/components/organisms/Articles';
import Content from '@/app/components/organisms/Content';

type ActivityProps = {
    name: string
    description: JSX.Element
    img: string
    imgSP: string
    id: string
    last: boolean
}

export default function Activities() {
    const activityDetails: ActivityProps[] = [
        {
            name: '勉強合宿',
            description:
                <>
                　2023年度の勉強合宿は、開邦高校と昭和薬科大学附属高校の二校の生徒で、一泊二日に渡り開催されました。
                テーマは「学びの相対化」と「非日常的な学びの探究」です。<br/>
                　ハイレベルな仲間と共に自身の勉強への姿勢を相対化するとともに、暗記大会や両校教師の特別授業、東大生との座談会など、通常の学習環境では得られない体験ができました。
                </>,
            img: "https://alohahp.s3.ap-northeast-1.amazonaws.com/activities/study_camp.jpg",
            imgSP: "https://alohahp.s3.ap-northeast-1.amazonaws.com/activities/study_camp.jpg",
            id: "study_camp",
            last: true,
        },
        {
            name: '東大生交流会',
            description:
                <>
                　2023年6月に昭和薬科大学附属高等学校・中学校で東大生交流会を実施しました。<br/>
                　5名の東大生が大学生活や受験体験談の紹介をした後、高校生との協力によるクイズ大会では東大生チームと対決し、大盛況となりました。
                自由交流時間にも多くの会話が生まれ、東大の魅力をより深く知り、モチベーションの向上に繋がりました。
                </>,
            img: "https://alohahp.s3.ap-northeast-1.amazonaws.com/activities/meetup.jpg",
            imgSP: "https://alohahp.s3.ap-northeast-1.amazonaws.com/activities/meetup.jpg",
            id: "meetup",
            last: false,
        },
        {
            name: 'キャンパスツアー',
            description:
                <>
                　2023年に那覇国際高校の修学旅行生360名を対象にキャンパスツアーを開催しました。
                生徒は各スポットごとに出題されるクイズに答えながら、キャンパスの魅力や歴史を学んでいました。<br/>
                　また、ツアー中に東大生に質問・相談をし、刺激をもらっている生徒も多く見かけました。
                この企画が生徒たちの未来の選択の一助となることを願っています。
                </>,
            img: "https://alohahp.s3.ap-northeast-1.amazonaws.com/activities/campus_tour.jpg",
            imgSP: "https://alohahp.s3.ap-northeast-1.amazonaws.com/activities/campus_tour.jpg",
            id: "campus_tour",
            last: true,
        },
    ];

    const articles: ArticleProps[] = [
        {
            image_url: "https://alohahp.s3.ap-northeast-1.amazonaws.com/activities/meetup.jpg",
            alt: "東大生交流会の様子",
            article_url: "/articles/meet-up",
            title: "東大生交流会@昭和薬科",
            summary: "2023年6月17日(土)に、昭和薬科大学附属高等学校・中...",
            date: "2023/12/18",
        },
        {
            image_url: "https://alohahp.s3.ap-northeast-1.amazonaws.com/activities/study_camp.jpg",
            alt: "勉強合宿の様子",
            article_url: "/articles/study-camp",
            title: "勉強合宿@沖縄ユースホステル",
            summary: "2023年9月9日から10日の2日間に渡り、沖縄県奥武山にあ...",
            date: "2023/12/18",
        },
        {
            image_url: "https://alohahp.s3.ap-northeast-1.amazonaws.com/articles/visiting-lecture1.jpg",
            alt: "出張講演会の様子",
            article_url: "/articles/visiting-lecture",
            title: "出張講演会@昭和薬科",
            summary: "2023年3月22日、沖縄県昭和薬科大学附属高校の生徒を対象...",
            date: "2023/12/18",
        },
        {
            image_url: "https://alohahp.s3.ap-northeast-1.amazonaws.com/articles/online-interview2.png",
            alt: "オンライン面談の様子",
            article_url: "/articles/online-interview",
            title: "オンライン面談",
            summary: "2023年10月、今年度2度目となるオンライン面談を実施しま...",
            date: "2023/12/22",
        },
  ];

    return (
        <section>
            <Content subtitle='articles' title='活動記事' isgreen={false} id='articles'>
                <Articles articles={articles} />
            </Content>
            <Content subtitle='activities' title='これまでの活動' isgreen={true} id='activities'>
                {
                    activityDetails.map((props) => (
                        <ActivityUnit
                            key={props.name}
                            name={props.name}
                            description={props.description}
                            img={props.img}
                            imgSP={props.imgSP}
                            id={props.id}
                            last={props.last}
                        />
                    ))
                }
            </Content>
        </section>
    );
}
