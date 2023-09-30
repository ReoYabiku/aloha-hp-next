import React, { useState } from 'react';
import axios from 'axios';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

// s3にアップロード
export function createS3Client() {
    const s3 = new S3Client({
        region: 'ap-northeast-1',
        credentials: {
            accessKeyId: '',
            secretAccessKey: '',
        },
    });
}

export function sendS3(s3, pdfData, docName) {
    s3.send(
        new PutObjectCommand({
            Bucket: 'alohahp',
            Key: 'documents/' + docName + '.pdf',
            Body: pdfData,
        })
    )
}

// google driveからダウンロード
export function downloadDocument(docId) {
  let downloadUrl = `https://drive.google.com/u/4/uc?id=${docId}&export=download`;

  axios.get(downloadUrl, {responseType: 'blob'})
    .then((response) => {
        const pdfData = response.data as Blob;
        return pdfData;
    })
    .catch((error) => {
        console.error('failde to download document.', error)
        return null;
    })
}