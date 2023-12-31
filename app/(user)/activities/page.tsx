import Title from '../../components/organisms/Title';
import Body from './Body';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "活動実績",
}

export default function Activities() {
  return (
    <main>
      <Title
        subtitle='活動実績'
        title='Activities'
        description='沖縄の高校で展開している「東大プロジェクト」を中心に、ALOHAの活動内容をご紹介します。'
      />
      <Body
      />
    </main>
  );
}