import MeetupPic from './src/meetup.png';
import MeetupSPPic from './src/meetup_sp.png';
import { StaticImageData } from 'next/image';
import ActivityUnit from './ActivityUnit';

type ActivityProps = {
    name: string
    description: JSX.Element
    img: StaticImageData
    imgSP: StaticImageData
    last: boolean
}

export default function Activities() {
    const activityDetails: ActivityProps[] = [
        {
            name: '出張講演会',
            description:
                <>
                　出張講演会の説明。実施場所、企画内容、参加人数等を記載する。
                団体としての信頼獲得を目的としているので、企画の目的やその効果を表現できるような説明文を記載したい。
                見た目を整えるために、写真と同じ幅まで文章が埋まっていると、なお望ましい。<br/>
                　このサムネイルをクリックするとイベントの詳細ページに遷移するので、興味を引きたい。
                </>,
            img: MeetupPic,
            imgSP: MeetupSPPic,
            last: false,
        },
        {
            name: '東大生交流会',
            description:
                <>
                　東大生交流会の説明。実施場所、企画内容、参加人数等を記載する。
                団体としての信頼獲得を目的としているので、企画の目的やその効果を表現できるような説明文を記載したい。
                見た目を整えるために、写真と同じ幅まで文章が埋まっていると、なお望ましい。<br/>
                　このサムネイルをクリックするとイベントの詳細ページに遷移するので、興味を引きたい。
                </>,
            img: MeetupPic,
            imgSP: MeetupSPPic,
            last: false,
        },
        {
            name: 'オンライン面談',
            description:
                <>
                　オンライン面談の説明。実施場所、企画内容、参加人数等を記載する。
                団体としての信頼獲得を目的としているので、企画の目的やその効果を表現できるような説明文を記載したい。
                見た目を整えるために、写真と同じ幅まで文章が埋まっていると、なお望ましい。<br/>
                　このサムネイルをクリックするとイベントの詳細ページに遷移するので、興味を引きたい。
                </>,
            img: MeetupPic,
            imgSP: MeetupSPPic,
            last: true,
        }
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
