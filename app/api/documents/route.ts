import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { Document } from '../../admin/new/Documents';
import { downloadDocument, createS3Client, sendS3 } from './tools/tool';

export async function POST(request: Request) {
  const documents= await request.json();
  const res = await SaveDocuments(documents);
  return NextResponse.json(res);
}

// TODO: このまま実装すると誰でもdocumentsを編集できるので、認証機構を実装する

async function SaveDocuments(docs: Document[]): Promise<number> {
  console.log("SaveDocuments is called.")
  const s3 = createS3Client();
  const prisma = new PrismaClient();
  const titles = []
  console.log(docs.length + " documents are found.")
  console.log('clients ready.')

  docs.map(async (doc) => {
    let pdfData = await downloadDocument(doc.documentID);
    if (pdfData === null) {
    } else {
      // s3にアップロード
      sendS3(s3, pdfData, doc.title);
      console.log(doc.title);
      titles.push(doc.title);
    }
  });

  console.log(titles.length + " documents are uploaded to s3.")

  const { count } = await prisma.documents.createMany({
    data: docs.map((doc) => ({
      title: doc.title,
      // 本当はkeyを使ってawsからurlを取得した方が良いかも。
      embed_url: "https://alohahp.s3.ap-northeast-1.amazonaws.com/documents/" + doc.title + ".pdf",
      description: doc.description,
      google_document_id: doc.documentID
    }),
    ),
  })

  return count;
}
