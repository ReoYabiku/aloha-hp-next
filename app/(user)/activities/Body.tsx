import ActivityUnit from './ActivityUnit';

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
                　キャンパスツアーの説明。実施場所、企画内容、参加人数等を記載する。
                団体としての信頼獲得を目的としているので、企画の目的やその効果を表現できるような説明文を記載したい。
                見た目を整えるために、写真と同じ幅まで文章が埋まっていると、なお望ましい。
                ああああああああああああああああああああああああ。
                </>,
            img: "https://alohahp.s3.ap-northeast-1.amazonaws.com/activities/campus_tour.jpg",
            imgSP: "https://alohahp.s3.ap-northeast-1.amazonaws.com/activities/campus_tour.jpg",
            id: "campus_tour",
            last: true,
        },
    ]

    return (
        <section>
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
        </section>
    );
}
