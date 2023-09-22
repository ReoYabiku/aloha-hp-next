"use client"

import { useRouter } from 'next/navigation';
import style from './TextCard.module.css';

type TextCartProps = {
  text: string
  path: string
}

export default function TextCard({ text, path }: TextCartProps) {
  const router = useRouter();

  return (
    <div className={style.container} onClick={() =>router.push(path)}>
      <p className={style.text}>{text}</p>
    </div>
  );
}