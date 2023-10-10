import Title from '../../components/organisms/Title';
import Content from '../../components/organisms/Content';
import Person from './Person';
import style from './page.module.css';
import { members, PrismaClient } from '@prisma/client';
import MemberRows from './MemberRows';

export default async function Members() {
  const prisma = new PrismaClient();
  const leader = await prisma.members.findFirst({
    where: {
      status: "PUBLIC",
      is_leader: true,
    }
  });
  const members: members[] = await prisma.members.findMany({
    where: {
      status: "PUBLIC",
      is_leader: false,
    },
    orderBy: {
      id: "asc",
    }
  });

  return (
    <main>
      <Title
        subtitle='メンバー紹介'
        title='Members'
        description='沖縄に対して代表が抱く思いと共に、私たちALOHAのメンバーを紹介しています。'
      />

      <Content subtitle='Leader' title='代表挨拶' isgreen={false} id='leader'>
        <div className={style.flex}>
          {leader && (
            <div className={style.floatLeft}>
              <Person
                name={leader.name}
                affiliation={leader.affiliation}
                imageURL={leader.image_url}
              />
            </div>
          )}
          <div className={style.text}>
            <p>　私たち学生団体ALOHAは、沖縄の生徒たちが抱える東京大学への心理的障壁を取り払い、東大への道を広げることを使命としています。沖縄の生徒たちの多くは、東大へのポテンシャルを持っている生徒でさえ、固定観念や誤解から、東大を選択肢として考えることができない現状にあります。</p>
            <p>　私たちの原動力は、自身の受験期に沖縄から東大へ進む難しさを実感した経験にあります。本土の進学校とは異なり、適切な指導や情報が不足し、東大を目指す仲間や先輩との交流が不十分だったことから、私たちも不安を抱えました。</p>
            <p>　しかし、東大での学びや東大生との交流を通じて、東大の素晴らしさと可能性を知りました。東大は優れた教授陣と志を同じくする仲間たちで溢れ、刺激と知識が溢れています。</p>
            <p>　東大の素晴らしさと可能性を知りました。東大は優れた教授陣と志を同じくする仲間たちで溢れ、刺激と知識が溢れています。</p>
            <p>　私たちの信念は、沖縄から東大への進学を促進することで、沖縄の未来を変えることができるということです。私たちは、東大での経験が個人の成長に大きな影響を与えることを理解しています。また、沖縄の発展には次世代への教育が鍵であると確信しています。特に、東大のような日本のトップ環境から沖縄出身の生徒を送り出すことで、彼らが将来沖縄の発展に貢献することを期待しています。私たち学生団体ALOHAは、沖縄の未来を拓くために、教育を通じて次世代のリーダーを育て、沖縄の可能性を広げることに全力を注ぎます。</p>
            <p>　皆様と共に、沖縄の未来を輝かせるために努力し続けます。</p>
          </div>
        </div>
      </Content>
      

      <Content subtitle='Members' title='メンバー紹介' isgreen={true} id='members'>
        <MemberRows members={members} />
      </Content>
    </main>
  );
}