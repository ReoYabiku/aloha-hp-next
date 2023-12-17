import Sample from './Sample';
import OnlineInterview from './OnlineInterview';
import VisitingLecture from './VisitingLecture';

export default function Article({ params }: { params: { id: string } }) {
  switch (params.id) {
    case "sample":
      return <Sample />;
    case "online-interview":
      return <OnlineInterview />
    case "visiting-lecture":
      return <VisitingLecture />
    case "hoge":
      return <div>hogehoge</div>;
  }
}