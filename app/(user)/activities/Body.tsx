import ActivityUnit from './ActivityUnit';

type ActivityProps = {
    name: string
    description: JSX.Element
    img: string
    imgSP: string
    last: boolean
}

export default function Activities() {
    const activityDetails: ActivityProps[] = [
        {
            name: '勉強合宿',
            description:
                <>
                　昭和薬科大学附属高校・開邦高校合同で、一泊二日の勉強合宿を実施しました。
                団体としての信頼獲得を目的としているので、企画の目的やその効果を表現できるような説明文を記載したい。
                見た目を整えるために、写真と同じ幅まで文章が埋まっていると、なお望ましい。
                ああああああああああああああああああああああああ。
                </>,
            img: "https://alohahp.s3.ap-northeast-1.amazonaws.com/activities/study_camp.jpg",
            imgSP: "https://alohahp.s3.ap-northeast-1.amazonaws.com/activities/study_camp.jpg",
            last: true,
        },
        {
            name: '東大生交流会',
            description:
                <>
                　東大生交流会の説明。実施場所、企画内容、参加人数等を記載する。
                団体としての信頼獲得を目的としているので、企画の目的やその効果を表現できるような説明文を記載したい。
                見た目を整えるために、写真と同じ幅まで文章が埋まっていると、なお望ましい。
                ああああああああああああああああああああああああ。
                </>,
            img: "https://alohahp.s3.ap-northeast-1.amazonaws.com/activities/meetup.jpg",
            imgSP: "https://alohahp.s3.ap-northeast-1.amazonaws.com/activities/meetup.jpg",
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
                        last={props.last}
                    />
                ))
            }
        </section>
    );
}
