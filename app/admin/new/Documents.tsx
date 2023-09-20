"use client"

import { useState } from 'react';
import style from './Documents.module.css';

export default function NewDocument() {
  const [newDocumentCount, setNewDocumentCount] = useState(1);
  const [succeedRegister, setSucceedRegister] = useState(false);

  return (
    <div>
      <table>
        <thead>
          <tr style={{textAlign: "center"}}>
            <th>ファイル名</th>
            <th>PDFのリンク</th>
            <th>説明文</th>
            <th>google documentのID</th>
          </tr>
        </thead>
        <tbody>
          {
            Array.from({length: newDocumentCount}).map(() => (
              <tr>
                <td><input type="text" size={30}/></td>
                <td><input type="text" size={40} /></td>
                <td><textarea name="" id="" cols={50} rows={6}></textarea></td>
                <td><input type="text" size={30}/></td>
              </tr>
            ))
          }
          <tr>
            <td colSpan={4}>
              <button className={style.changeNum} onClick={()=>setNewDocumentCount(i => Math.max(i-1, 1))}>-</button>
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
              <button className={style.changeNum} onClick={()=>setNewDocumentCount(i => i+1)}>+</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={style.flex}>
        <button className={style.button} onClick={()=>SaveDocuments(setSucceedRegister)}>登録</button>
        {
          succeedRegister &&
          <p className={style.done}>登録完了しました！</p>
        }
      </div>
    </div>
  );
}

function SaveDocuments(setSucceedRegister: React.Dispatch<React.SetStateAction<boolean>>) {
  setSucceedRegister(true);
  setTimeout(()=>(setSucceedRegister(false)), 1000);
}