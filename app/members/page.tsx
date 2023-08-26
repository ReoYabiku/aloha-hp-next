import Title from '../components/organisms/Title';
import Content from '../components/organisms/Content';
import Person from './Person';
import style from './page.module.css';

export default function Members() {
  return (
    <main>
      <Title
        subtitle='メンバー紹介'
        title='Members'
        description='メンバー紹介に関するいい感じの文章。長めの文章にしたいけど書くことないから適当に引き伸ばしています。'
      />

      <Content subtitle='Leader' title='代表挨拶' isgreen={false}>
        <div className={style.flex}>
          <Person />
          <div className={style.text}>
            <p>　「ではみなさんは、そういうふうに川だと云いわれたり、乳の流れたあとだと云われたりしていたこのぼんやりと白いものがほんとうは何かご承知ですか。」</p>
            <p>　先生は、黒板に吊つるした大きな黒い星座の図の、上から下へ白くけぶった銀河帯のようなところを指さしながら、みんなに問といをかけました。 </p>
            <p>　カムパネルラが手をあげました。それから四五人手をあげました。ジョバンニも手をあげようとして、急いでそのままやめました。たしかにあれがみんな星だと、いつか雑誌で読んだのでしたが、このごろはジョバンニはまるで毎日教室でもねむく、本を読むひまも読む本もないので、なんだかどんなこともよくわからないという気持ちがするのでした。</p>
            <p>　ところが先生は早くもそれを見附みつけたのでした。「ジョバンニさん。あなたはわかっているのでしょう。」ジョバンニは勢いきおいよく立ちあがりましたが、立って見るともうはっきりとそれを答えることができないのでした。</p>
          </div>
        </div>
      </Content>

      <Content subtitle='Members' title='メンバー紹介' isgreen={true}>
        <p>content</p>
      </Content>
    </main>
  );
}