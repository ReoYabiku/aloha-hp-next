import Document from './Document';
import style from './page.module.css';
import { PrismaClient } from '@prisma/client';

export default async function Documents() {
  const prisma = new PrismaClient();
  const documents = await prisma.documents.findMany({
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
            key={doc.title}
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