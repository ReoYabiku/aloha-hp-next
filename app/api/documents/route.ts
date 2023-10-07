import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { Document } from '../../admin/new/Documents';
import { downloadDocument, createS3Client, sendS3 } from './tools/tool';

export async function POST(request: Request) {
  const documents= await request.json();
  const res = await SaveDocuments(documents);
  return NextResponse.json(res);
}

type DocumentForUpload = Document & {
  fileNameWithNumber: string;
};

// TODO: このまま実装すると誰でもdocumentsを編集できるので、認証機構を実装する

async function SaveDocuments(docs: Document[]): Promise<number> {
  console.log("SaveDocuments is called.")
  const s3 = createS3Client();
  const prisma = new PrismaClient();
  console.log(docs.length + " documents are found.");
  console.log('clients ready.');

  let newDocs: DocumentForUpload[] = addFileNameToDoc(docs);
  newDocs.map(async (doc) => {
    let pdfData = await downloadDocument(doc.documentID);
    if (pdfData === null) {
    } else {
      // s3にアップロード
      sendS3(s3, pdfData, doc.fileNameWithNumber);
      console.log(doc.title + "was uploaded to s3 as " + doc.fileNameWithNumber + ".pdf");
    }
  });

  const { count } = await prisma.documents.createMany({
    data: newDocs.map((doc) => ({
      title: doc.title,
      embed_url: "https://alohahp.s3.ap-northeast-1.amazonaws.com/documents/" + doc.fileNameWithNumber + ".pdf",
      description: doc.description,
      google_document_id: doc.documentID
    }),
    ),
  });

  return count;
}

function addFileNameToDoc(docs: Document[]): DocumentForUpload[]{
  const newDocs: DocumentForUpload[] = [];
  docs.map((doc) => {
    let fileNameWithNumber = doc.title + '_' +String(Math.floor(Math.random() * 10000));
    newDocs.push({ ...doc, fileNameWithNumber: fileNameWithNumber });
  });
  return newDocs;
}