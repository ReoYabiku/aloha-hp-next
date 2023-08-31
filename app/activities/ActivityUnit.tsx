import { StaticImageData } from 'next/image';
import style from './ActivityUnit.module.css';
import Image from 'next/image';

type Props = {
    name: string
    description: JSX.Element
    img: StaticImageData
    last: boolean
}

export default function ActivityUnit({ name, description, img, last }: Props) {
    return (
        <div>
            <div className={style.container}>
                <Image
                    src={img}
                    alt={name}
                    width={376}
                    height={299}
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