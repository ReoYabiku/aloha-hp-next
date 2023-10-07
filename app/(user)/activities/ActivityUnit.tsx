import style from './ActivityUnit.module.css';
import Image from 'next/image';

type Props = {
    name: string
    description: JSX.Element
    img: string
    imgSP: string
    id: string
    last: boolean
}

export default function ActivityUnit({ name, description, img, imgSP, id, last }: Props) {
    return (
        <div id={id}>
            <div className={style.container}>
                <Image
                    className={style.image}
                    src={img}
                    alt={name}
                    width={376}
                    height={299}
                />
                <Image
                    className={style.imageSP}
                    src={imgSP}
                    alt={name}
                    width={300}
                    height={160}
                />
                <div className={style.child}>
                    <h1 className={style.title}>{name}</h1>
                    <p className={style.text}>{description}</p>
                </div>
            </div>
            {last ? false : <div className={style.bar} />}
        </div>
    );
}