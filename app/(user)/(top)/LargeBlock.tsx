"use client"

import style from './LargeBlock.module.css';
import { SvgIcon, SvgIconTypeMap } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Link from 'next/link';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type LargeBlockProps = {
  url: string,
  icon: React.ReactNode;
  name: string,
}

export default function LargeBlock({ url, icon, name }: LargeBlockProps) {

  return (
    <Link href={url}  className={style.container} >
      <SvgIcon className={style.icon}>
        {icon}
      </SvgIcon>
      <p className={style.text}>{name}</p>
    </Link>
  );
}