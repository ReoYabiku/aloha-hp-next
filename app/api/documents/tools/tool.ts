import axios from 'axios';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

// s3にアップロード
export function createS3Client() {
  const s3 = new S3Client({
    region: 'ap-northeast-1',
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID!,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
    },
  });
  return s3;
}

export function sendS3(s3: S3Client, pdfData: Blob, docName: string) {
  s3.send(
    new PutObjectCommand({
      Bucket: 'alohahp',
      ContentType: 'application/pdf',
      Key: 'documents/' + docName + '.pdf',
      Body: pdfData,
    })
  )
}

// google driveからダウンロード
export async function downloadDocument(docId: string) {
  let downloadUrl = `https://drive.google.com/u/4/uc?id=${docId}&export=download`;

  const doc = await axios.get(downloadUrl, { responseType: 'arraybuffer' })
    .then((response) => {
      const pdfData = response.data as Blob;
      return pdfData;
    })
    .catch((error) => {
      console.error('failed to download document.', error)
      return null;
    });
  return doc;
}