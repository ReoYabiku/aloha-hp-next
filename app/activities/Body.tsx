import Image from 'next/image';
import style from  './Body.module.css';
import GatheringPic from './東大生交流会 1.png';
import { StaticImageData } from 'next/image';
import ActivityUnit from './ActivityUnit';

type ActivityProps = {
    name: string
    description: JSX.Element
    img: StaticImageData
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
            img: GatheringPic,
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
            img: GatheringPic,
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
            img: GatheringPic,
            last: true,
        }
    ]

    return (
        <section className={style.background}>
            {
                activityDetails.map((props) => (
                    <ActivityUnit
                        key={props.name}
                        name={props.name}
                        description={props.description}
                        img={props.img}
                        last={props.last}
                            />
                ))
            }
        </section>
    );
}

{/*
export default function Test() {
    return(
        <section className={style.background}>
            <div className={style.container}>
                <Image
                    src={GatheringPic}
                    width={376}
                    height={299}
                    alt="Lecture"
                />
                <div className={style.child}>
                    <h1 className={style.title}>出張講演会</h1>
                    <p className={style.text}>
                    　出張講演会の説明。実施場所、企画内容、参加人数等を記載する。
                    団体としての信頼獲得を目的としているので、企画の目的やその効果を表現できるような説明文を記載したい。
                    見た目を整えるために、写真と同じ幅まで文章が埋まっていると、なお望ましい。<br/>
                    　このサムネイルをクリックするとイベントの詳細ページに遷移するので、興味を引きたい。
                    </p>
                </div>
            </div>
            <div className={style.bar}/>
        </section>
    )
}
*/}