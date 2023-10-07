import Title from '../../components/organisms/Title';
import Content from '../../components/organisms/Content';
import ActivityPair, { ActivityCardProps } from './ActivitiPair';
import gatheringPic from './gathering.png';

export default function Introduction() {
  const activities: ActivityCardProps[] = [
    {
      image: "https://alohahp.s3.ap-northeast-1.amazonaws.com/introduction/meetup.jpg",
      alt: "高校生を前に、教壇で話すALOHAメンバー",
      title: "東大生交流会",
      text: "昭和薬科大学附属高校にて、東大生交流会を行いました。東大紹介や受験体験談、クイズ大会を実施しました。",
      position: "left"
    },
    {
      image: "https://alohahp.s3.ap-northeast-1.amazonaws.com/introduction/campus_tour.jpg",
      alt: "安田講堂前に集まる、キャンパスツアー参加生徒たち",
      title: "キャンパスツアー",
      text: "那覇国際高校の生徒約100人を対象に、東京大学のキャンパスツアーを実施しました。",
      position: "right"
    },
    {
      image: "https://alohahp.s3.ap-northeast-1.amazonaws.com/introduction/study_camp.jpg",
      alt: "行動で自習に励む、東大プロジェクトメンバー",
      title: "勉強合宿",
      text: "開邦高校・昭和薬科大学附属高校の合同で、一泊二日の勉強合宿を開催しました。",
      position: "left"
    },
    {
      image: "https://alohahp.s3.ap-northeast-1.amazonaws.com/introduction/interview.png",
      alt: "面談の打ち合わせをするALOHAメンバー",
      title: "オンライン面談",
      text: "開邦高校・昭和薬科大学附属高校の生徒を対象に、定期試験や夏休みを振り返る面談を実施しました。",
      position: "right"
    },
  ];

  return (
    <main>
      <Title
        subtitle='団体紹介'
        title='Introduction'
        description='ALOHAは、沖縄から難関大学を目指す高校生を応援する学生団体です。'
      />

      <Content subtitle='Philosophy' title='活動理念' isgreen={false} id='philosophy'>
        <p>　私たちは、沖縄の教育における時代遅れの壁を打破し、沖縄の教育を進化させる使命を掲げます。現代は、自分が進むべき道について自由な選択ができ、その選択が尊重されるべき時代です。沖縄から東大を志望校として選んだ生徒には、彼らが全力を出し切れるような環境が与えられなけらばなりません。</p>
        <p>　しかし、沖縄にはまだその環境が整っていません。私たちは、東大を目指す生徒たちに向けて、さまざまな困難を共に乗り越える支援を提供し、彼らの夢を実現へと導きます。</p>
        <p>　私たちの使命は、沖縄から東大へ、そしてさらに世界へ、生徒たちの可能性を広げ、彼らが未来を切り拓く手助けをすることです。共に挑戦し、共に成長し、共に未来を築く。それが私たち学生団体の理念です。</p>
      </Content>

      <Content subtitle='Activity' title='活動内容' isgreen={true} id='activity'>
        <ActivityPair
          props1={activities[0]}
          props2={activities[1]}
        />

        <ActivityPair
          props1={activities[2]}
          props2={activities[3]}
        />
      </Content>
    </main>
  );
}