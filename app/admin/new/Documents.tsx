"use client"

import { useState } from 'react';
import style from './Documents.module.css';

export type Document = {
  title: string,
  pdf: string,
  description: string,
  documentID: string,
}
const emptyDocument: Document = {
  title: "",
  pdf: "",
  description: "",
  documentID: "",
};
export default function NewDocument() {
  const [newDocuments, setNewDocuments] = useState<Array<Document>>([emptyDocument]);
  const [succeedRegister, setSucceedRegister] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

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
          <RemoveRow setNewDocuments={setNewDocuments} />
          <AddRow setNewDocuments={setNewDocuments} />
        </tbody>
      </table>
      <div className={style.flex}>
        <SaveButton
          documents={newDocuments}
          setSucceedRegister={setSucceedRegister}
          setLoading={setLoading}
        />
        {
          succeedRegister ?
            <p className={style.done}>登録完了しました！</p>
          : loading &&
          <p className={style.done}>登録中...</p>
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

type RemoveRowProps = {
  setNewDocuments: React.Dispatch<React.SetStateAction<Document[]>>
}
function RemoveRow({ setNewDocuments }: RemoveRowProps) {
  return (
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
  );
}

type AddRowProps = {
  setNewDocuments: React.Dispatch<React.SetStateAction<Document[]>>
}
function AddRow({ setNewDocuments }: AddRowProps) {
  return (
    <tr>
      <td colSpan={4}>
        <button
          className={style.changeNum}
          onClick={()=>setNewDocuments(docs => docs.concat(emptyDocument))}
        >+</button>
      </td>
    </tr>
  );
}

type SaveButtonProps = {
  documents: Document[],
  setSucceedRegister: React.Dispatch<React.SetStateAction<boolean>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
}
function SaveButton({documents, setSucceedRegister, setLoading}: SaveButtonProps) {
  const handleClick = async () => {
    setLoading(true);

    const res = await fetch('/api/documents', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(documents),
    }).then(res => res.json())

    setLoading(false);

    if (res == documents.length) {
      setSucceedRegister(true);
      setTimeout(()=>setSucceedRegister(false), 1000);
    }
  };

  return <button className={style.button} onClick={handleClick}>登録</button>;
}