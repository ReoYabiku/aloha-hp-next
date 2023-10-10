"use client"

import { members } from '@prisma/client';
import Person from './Person';
import style from './MemberRows.module.css';
import { useEffect, useState } from 'react';

type MemberRowsProps = {
  members: members[]
}

export default function MemberRows({ members }: MemberRowsProps) {
  let defaultWidth = 1500;
  console.log(navigator.userAgent);
  if (navigator.userAgent.match(/(iPhone)|(Android)|(Mobile)|(Windows Phone)/)) {
    defaultWidth = 450;
  }
  const [width, setWidth] = useState<number>(defaultWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    })
  })

  var NumPerRow: number = 2;
  const Nmember = members.length;
  if (width > 1200) {
    NumPerRow = 4;
  } else if (width > 950) {
    NumPerRow = 3;
  } else if (width > 700) {
    NumPerRow = 2;
  } else if (width < 500) {
    NumPerRow = 1;
  }

  return (
    <>
      {
        [...Array(Nmember / NumPerRow + 1 | 0)].map((_, i) => i).map((row) => (
          (row+1)*NumPerRow < Nmember ?
          <div className={style.spacebetween} key={row}>
            {
              members.slice(NumPerRow*row, NumPerRow*(row+1)).map((member) => (
                <Person
                  key={member.id}
                  name={member.name}
                  affiliation={member.affiliation}
                  imageURL={member.image_url}
                />
              ))
            }
          </div> :
          <div className={style['flexleft'+Nmember%NumPerRow]} key={row}>
            {
              members.slice(NumPerRow*row, NumPerRow*(row+1)).map((member) => (
                <Person
                  key={member.id}
                  name={member.name}
                  affiliation={member.affiliation}
                  imageURL={member.image_url}
                />
              ))
            }
          </div>
        ))
      }
    </>
  );
}