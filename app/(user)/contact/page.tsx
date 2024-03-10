import Content from '@/app/components/organisms/Content'
import Title from '@/app/components/organisms/Title'

export default function Contact() {
  return (
    <main>
      <Title
        subtitle='お問い合わせ'
        title='Contact'
        description='学生団体ALOHAや、東大プロジェクトに対するご要望・ご質問がございましたら、お気軽にお問い合わせください。'
      />
      <Content subtitle='contact information' title='連絡先' isgreen={false} id='contact'>
        <p>電話番号：080-3957-6033 (屋比久)</p>
        <p>メールアドレス：aloha.edu23@gmail.com</p>
      </Content>
    </main>
  );
}