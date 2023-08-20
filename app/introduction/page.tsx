import Title from '../components/organisms/Title';
import Content from '../components/organisms/Content';

export default function Introduction() {
  return (
    <main>
      <Title
        subtitle='団体紹介'
        title='Introduction'
        description='ALOHAは、沖縄から難関大学を目指す高校生を応援する学生団体です。'
      />

      <Content subtitle='Philosophy' title='活動理念' isgreen={false}>
        <p>text</p>
      </Content>

      <Content subtitle='Activity' title='活動内容' isgreen={true}>
        <p>hoge</p>
      </Content>
    </main>
  );
}