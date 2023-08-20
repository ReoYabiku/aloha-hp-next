import Title from '../components/organisms/Title';
import Content from '../components/organisms/Content';

export default function Members() {
  return (
    <main>
      <Title
        subtitle='メンバー紹介'
        title='Members'
        description='メンバー紹介に関するいい感じの文章。長めの文章にしたいけど書くことないから適当に引き伸ばしています。'
      />

      <Content subtitle='Leader' title='代表挨拶' isgreen={false}>
        <p>hoge</p>
      </Content>
      
      <Content subtitle='Members' title='メンバー紹介' isgreen={true}>
        <p>content</p>
      </Content>
    </main>
  );
}