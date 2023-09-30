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
type RegisterationStatus = 
  | "succeeded" // 成功
  | "failed"    // 失敗
  | "loading"   // 処理中
  | "none";     // 処理前
export default function NewDocument() {
  const [newDocuments, setNewDocuments] = useState<Array<Document>>([emptyDocument]);
  const [registerationStatus, setRegistrationStatus] = useState<RegisterationStatus>("none");

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
              <DocumentUnit key={idx} id={idx} docs={newDocuments} set={setNewDocuments}/>
            ))
          }
          <RemoveRow setNewDocuments={setNewDocuments} />
          <AddRow setNewDocuments={setNewDocuments} />
        </tbody>
      </table>
      <div className={style.flex}>
        <SaveButton
          documents={newDocuments}
          setNewDocuments={setNewDocuments}
          setRegistrationStatus={setRegistrationStatus}
        />
        <RegistrationStatusText status={registerationStatus} />
      </div>
    </div>
  );
}

type DocumentUnitProps = {
  id: number,
  docs: Document[],
  set: React.Dispatch<React.SetStateAction<Document[]>>,
}
function DocumentUnit({id, docs, set}: DocumentUnitProps) {
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
      <td>
        <input type="text" size={30} value={docs[id].title} onChange={handleChangeFor("title")}/>
      </td>
      <td>
        <input type="text" size={40} value={docs[id].pdf} onChange={handleChangeFor("pdf")}/>
      </td>
      <td>
        <textarea name="" id="" cols={50} rows={6} value={docs[id].description} onChange={handleDescriptionChange}></textarea>
      </td>
      <td>
        <input type="text" size={30} value={docs[id].documentID} onChange={handleChangeFor("documentID")}/>
      </td>
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
  setNewDocuments: React.Dispatch<React.SetStateAction<Document[]>>,
  setRegistrationStatus: React.Dispatch<React.SetStateAction<RegisterationStatus>>,
}
function SaveButton({documents, setNewDocuments, setRegistrationStatus }: SaveButtonProps) {  // ここの処理を書き換える。
  const handleClick = async () => {
    setRegistrationStatus("loading");

    const res = await fetch('/api/documents', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(documents),
    }).then(res => {
      console.log(res);
      console.log(typeof res);
      return res.json();
    });

    if (res == documents.length) {
      setRegistrationStatus("succeeded")
      setTimeout(()=>setRegistrationStatus("none"), 1000);

      setNewDocuments([emptyDocument]);
    }
  };

  return <button className={style.button} onClick={handleClick}>登録</button>;
}

type RegistrationStatusProps = {
  status: RegisterationStatus,
};
function RegistrationStatusText({ status }: RegistrationStatusProps) {
  switch (status) {
    case "succeeded":
      return <p className={style.status}>登録完了しました！</p>
    case "failed":
      return <p className={style.status}>登録に失敗しました。</p>
    case "loading":
      return <p className={style.status}>登録中...</p>
    case "none":
      return
  }
}