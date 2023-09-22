import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { Document } from '../../admin/new/Documents';

export async function POST(request: Request) {
  const documents= await request.json();
  const res = await SaveDocuments(documents);
  return NextResponse.json(res);
}

// TODO: このまま実装すると誰でもdocumentsを編集できるので、認証機構を実装する

async function SaveDocuments(docs: Document[]): Promise<number> {
  const prisma = new PrismaClient();
  const { count } = await prisma.documents.createMany({
    data: docs.map((doc) => ({
      title: doc.title,
      embed_url: doc.pdf,
      description: doc.description,
      google_document_id: doc.documentID
    }),
    ),
  })

  return count;
}