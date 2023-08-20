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
        <p>　「ではみなさんは、そういうふうに川だと云いわれたり、乳の流れたあとだと云われたりしていたこのぼんやりと白いものがほんとうは何かご承知ですか。」</p>
        <p>　先生は、黒板に吊つるした大きな黒い星座の図の、上から下へ白くけぶった銀河帯のようなところを指さしながら、みんなに問といをかけました。 </p>
        <p>　カムパネルラが手をあげました。それから四五人手をあげました。ジョバンニも手をあげようとして、急いでそのままやめました。たしかにあれがみんな星だと、いつか雑誌で読んだのでしたが、このごろはジョバンニはまるで毎日教室でもねむく、本を読むひまも読む本もないので、なんだかどんなこともよくわからないという気持ちがするのでした。</p>
        <p>　ところが先生は早くもそれを見附みつけたのでした。「ジョバンニさん。あなたはわかっているのでしょう。」ジョバンニは勢いきおいよく立ちあがりましたが、立って見るともうはっきりとそれを答えることができないのでした。</p>
      </Content>

      <Content subtitle='Activity' title='活動内容' isgreen={true}>
        <p>hoge</p>
      </Content>
    </main>
  );
}