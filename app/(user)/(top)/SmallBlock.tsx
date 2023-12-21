import style from './SmallBlock.module.css';
import { SvgIcon } from '@mui/material';
import Link from 'next/link';

export type SmallBlockProps = {
  url: string,
  icon: React.ReactNode,
  name: string,
}

export default function SmallBlock({ url, icon, name }: SmallBlockProps) {
  return (
    <Link href={url}  className={style.container} >
      <SvgIcon className={style.icon}>
        {icon}
      </SvgIcon>
      <p className={style.text}>{name}</p>
    </Link>
  );
}