import Title from '../components/organisms/Title';
import Content from '../components/organisms/Content';
import Person from './Person';
import style from './page.module.css';

type Member = {
  name: string,
  affiliation: string,
  imageURL: string,
};

export default function Members() {
  const members: Member[] = [
    {
      name: "仲本 梨乃奈",
      affiliation: "東京大学 理科二類 ２年",
      imageURL: "https://alohahp.s3.ap-northeast-1.amazonaws.com/members/nakamoto_rinona.jpeg",
    },
    {
      name: "屋比久 怜央",
      affiliation: "東京大学 工学部 ４年",
      imageURL: "https://alohahp.s3.ap-northeast-1.amazonaws.com/members/yabiku_reo.jpg",
    },
    {
      name: "名嘉山 結月",
      affiliation: "東京大学 文科二類 ２年",
      imageURL: "https://alohahp.s3.ap-northeast-1.amazonaws.com/members/nakayama_yuzuki.JPG",
    },
    {
      name: "伊礼 理貴",
      affiliation: "東京大学 理科一類 １年",
      imageURL: "https://alohahp.s3.ap-northeast-1.amazonaws.com/members/irei_riki.jpeg",
    },
    {
      name: "當眞 嗣丈",
      affiliation: "東京大学 理科一類 ２年",
      imageURL: "https://alohahp.s3.ap-northeast-1.amazonaws.com/members/touma_shijou.jpeg",
    },
    {
      name: "友利 寧唯",
      affiliation: "東京大学 文科一類 １年",
      imageURL: "https://alohahp.s3.ap-northeast-1.amazonaws.com/members/tomori_nei.jpg",
    },
    {
      name: "前田 春樹",
      affiliation: "東京大学 理科一類 １年",
      imageURL: "https://alohahp.s3.ap-northeast-1.amazonaws.com/members/maeda_haruki.jpeg",
    },
    {
      name: "游 盈",
      affiliation: "東京大学 教育学部 ４年",
      imageURL: "https://alohahp.s3.ap-northeast-1.amazonaws.com/members/you_ying.jpeg",
    },
    {
      name: "新垣 梨穂",
      affiliation: "東京大学 文学部 ４年",
      imageURL: "https://alohahp.s3.ap-northeast-1.amazonaws.com/members/arakaki_riho.jpg",
    },
    {
      name: "大見謝 恒和",
      affiliation: "東京大学 理科一類 ２年",
      imageURL: "https://alohahp.s3.ap-northeast-1.amazonaws.com/members/omija_tsunekazu.jpg",
    },
  ];
  return (
    <main>
      <Title
        subtitle='メンバー紹介'
        title='Members'
        description='メンバー紹介に関するいい感じの文章。長めの文章にしたいけど書くことないから適当に引き伸ばしています。'
      />

      <Content subtitle='Leader' title='代表挨拶' isgreen={false}>
        <div className={style.flex}>
          <Person
            name='伊礼漢'
            affiliation='東京大学 経済学部 三年'
            imageURL='https://alohahp.s3.ap-northeast-1.amazonaws.com/members/irei_kan.jpeg'
          />
          <div className={style.text}>
            <p>　「ではみなさんは、そういうふうに川だと云いわれたり、乳の流れたあとだと云われたりしていたこのぼんやりと白いものがほんとうは何かご承知ですか。」</p>
            <p>　先生は、黒板に吊つるした大きな黒い星座の図の、上から下へ白くけぶった銀河帯のようなところを指さしながら、みんなに問といをかけました。 </p>
            <p>　カムパネルラが手をあげました。それから四五人手をあげました。ジョバンニも手をあげようとして、急いでそのままやめました。たしかにあれがみんな星だと、いつか雑誌で読んだのでしたが、このごろはジョバンニはまるで毎日教室でもねむく、本を読むひまも読む本もないので、なんだかどんなこともよくわからないという気持ちがするのでした。</p>
            <p>　ところが先生は早くもそれを見附みつけたのでした。「ジョバンニさん。あなたはわかっているのでしょう。」ジョバンニは勢いきおいよく立ちあがりましたが、立って見るともうはっきりとそれを答えることができないのでした。</p>
          </div>
        </div>
      </Content>

      <Content subtitle='Members' title='メンバー紹介' isgreen={true}>
        <div className={style.flexwrap}>
          {
            members.map((member, index) => (
              <Person
                key={index}
                name={member.name}
                affiliation={member.affiliation}
                imageURL={member.imageURL}
              />
            ))
          }
        </div>
      </Content>
    </main>
  );
}