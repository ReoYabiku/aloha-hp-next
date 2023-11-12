import { Metadata } from 'next';
import Document from './Document';
import style from './page.module.css';
import { PrismaClient } from '@prisma/client';

export const metadata: Metadata = {
  title: "資料一覧",
}

export default async function Documents() {
  const prisma = new PrismaClient();
  const documents = await prisma.documents.findMany({
    where: {
      status: "PUBLIC",
    },
    orderBy: {
      id: "asc",
    }
  });
  const docSize = documents.length;

  return (
    <section>
      <h1 className={style.title}>資料一覧</h1>
      <div className={style.titleBar}></div>
      {
        documents.map((doc, idx) => (
          <Document
            key={doc.id}
            title={doc.title}
            embedURL={doc.embed_url}
            description={doc.description}
            showURL={`https://drive.google.com/file/d/${doc.google_document_id}/view`}
            downloadURL={`https://drive.google.com/u/4/uc?id=${doc.google_document_id}&export=download`}
            isLast={idx == docSize - 1}
          />
        ))
      }
    </section>
  );
}