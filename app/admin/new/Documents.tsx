"use client"

import { useState } from 'react';
import { PrismaClient } from '@prisma/client';
import style from './Documents.module.css';

type Document = {
  title: string,
  pdf: string,
  description: string,
  documentID: string,
}

export default function NewDocument() {
  const emptyDocument: Document = {
    title: "",
    pdf: "",
    description: "",
    documentID: "",
  };
  const [newDocuments, setNewDocuments] = useState<Array<Document>>([emptyDocument]);
  const [succeedRegister, setSucceedRegister] = useState<boolean>(false);

  console.log(newDocuments);

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
            Array.from({length: newDocuments.length}).map((_, idx) => (
              <DocumentUnit key={idx} id={idx} set={setNewDocuments}/>
            ))
          }
          <tr>
            <td colSpan={4}>
              <button
                className={style.changeNum}
                onClick={()=>setNewDocuments(docs => (
                  docs.length == 1 ? [emptyDocument] : docs.slice(0, -1)
                ))}
              >-</button>
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
              <button
                className={style.changeNum}
                onClick={()=>setNewDocuments(docs => docs.concat(emptyDocument))}
              >+</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={style.flex}>
        <button className={style.button} onClick={()=>SaveDocuments(newDocuments, setSucceedRegister)}>登録</button>
        {
          succeedRegister &&
          <p className={style.done}>登録完了しました！</p>
        }
      </div>
    </div>
  );
}

type DocumentUnitProps = {
  id: number
  set: React.Dispatch<React.SetStateAction<Document[]>>
}

function DocumentUnit({id, set}: DocumentUnitProps) {
  const handleChangeFor = (target: string) => (e: React.ChangeEvent<HTMLInputElement>)=>{
    set(docs => docs.map((doc, idx) => {
      if (idx == id) {
        return { ...doc, [target]: e.target.value }
      } else {
        return doc
      }
    }))
  };
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    set(docs => docs.map((doc, idx) => {
      if (idx == id) {
        return { ...doc, "description": e.target.value }
      } else {
        return doc
      }
    }))
  }

  return (
    <tr>
      <td><input type="text" size={30} onChange={handleChangeFor("title")}/></td>
      <td><input type="text" size={40} onChange={handleChangeFor("pdf")}/></td>
      <td><textarea name="" id="" cols={50} rows={6} onChange={handleDescriptionChange}></textarea></td>
      <td><input type="text" size={30} onChange={handleChangeFor("documentID")}/></td>
    </tr>
  );
}

async function SaveDocuments(docs: Document[], setSucceedRegister: React.Dispatch<React.SetStateAction<boolean>>) {
  const prisma = new PrismaClient();
  const document = await prisma.documents.createMany({
    data: docs.map((doc) => ({
      title: doc.title,
      embed_url: doc.pdf,
      description: doc.description,
      google_document_id: doc.documentID
    }),
    ),
  })
  setSucceedRegister(document !== null && document !== undefined);
  setTimeout(()=>(setSucceedRegister(false)), 1000);
}