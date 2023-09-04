import Document, { DocumentProps } from './Document';
import style from './page.module.css';

export default function Documents() {
  const documents: DocumentProps[] = [
    {
      title: "ファイル名",
      embedURL: 'https://alohahp.s3.ap-northeast-1.amazonaws.com/documents/sample_file.pdf',
      description: '資料の説明。記載内容の概略や、使用目的等を記載する。全2ページ。',
      showURL: 'https://drive.google.com/file/d/1o7pJKk4XC8Pp3kga414XIj5BmDrbVsaw/view',
      downloadURL: 'https://drive.google.com/u/4/uc?id=1o7pJKk4XC8Pp3kga414XIj5BmDrbVsaw&export=download',
      isLast: false,
    },
    {
      title: "ファイル名",
      embedURL: 'https://alohahp.s3.ap-northeast-1.amazonaws.com/documents/sample_file.pdf',
      description: '資料の説明。記載内容の概略や、使用目的等を記載する。全2ページ。',
      showURL: 'https://drive.google.com/file/d/1o7pJKk4XC8Pp3kga414XIj5BmDrbVsaw/view',
      downloadURL: 'https://drive.google.com/u/4/uc?id=1o7pJKk4XC8Pp3kga414XIj5BmDrbVsaw&export=download',
      isLast: false,
    },
    {
      title: "ファイル名",
      embedURL: 'https://alohahp.s3.ap-northeast-1.amazonaws.com/documents/sample_file.pdf',
      description: '資料の説明。記載内容の概略や、使用目的等を記載する。全2ページ。',
      showURL: 'https://drive.google.com/file/d/1o7pJKk4XC8Pp3kga414XIj5BmDrbVsaw/view',
      downloadURL: 'https://drive.google.com/u/4/uc?id=1o7pJKk4XC8Pp3kga414XIj5BmDrbVsaw&export=download',
      isLast: false,
    },
    {
      title: "ファイル名",
      embedURL: 'https://alohahp.s3.ap-northeast-1.amazonaws.com/documents/sample_file.pdf',
      description: '資料の説明。記載内容の概略や、使用目的等を記載する。全2ページ。',
      showURL: 'https://drive.google.com/file/d/1o7pJKk4XC8Pp3kga414XIj5BmDrbVsaw/view',
      downloadURL: 'https://drive.google.com/u/4/uc?id=1o7pJKk4XC8Pp3kga414XIj5BmDrbVsaw&export=download',
      isLast: true,
    }
  ];

  return (
    <section>
      <h1 className={style.title}>資料一覧</h1>
      <div className={style.titleBar}></div>
      {
        documents.map((props) => (
          <Document
            key={props.title}
            title={props.title}
            embedURL={props.embedURL}
            description={props.description}
            showURL={props.showURL}
            downloadURL={props.downloadURL}
            isLast={props.isLast}
          />
        ))
      }
    </section>
  );
}