import Sample from './Sample';

export default function Article({ params }: { params: { id: string } }) {
  switch (params.id) {
    case "sample":
      return <Sample />;
    case "hoge":
      return <div>hogehoge</div>;
  }
}