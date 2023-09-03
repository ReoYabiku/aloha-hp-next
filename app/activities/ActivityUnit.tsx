import { StaticImageData } from 'next/image';
import style from './ActivityUnit.module.css';
import Image from 'next/image';

type Props = {
    name: string
    description: JSX.Element
    img: StaticImageData
    imgSP: StaticImageData
    last: boolean
}

export default function ActivityUnit({ name, description, img, imgSP, last }: Props) {
    return (
        <div>
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
                    width={125}
                    height={99}
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