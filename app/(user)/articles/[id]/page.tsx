import Sample from './Sample';
import OnlineInterview from './OnlineInterview';
import VisitingLecture from './VisitingLecture';
import MeetUp from './MeetUp';
import StudyCamp from './StudyCamp';

export default function Article({ params }: { params: { id: string } }) {
  switch (params.id) {
    case "sample":
      return <Sample />;
    case "online-interview":
      return <OnlineInterview />
    case "visiting-lecture":
      return <VisitingLecture />
    case "meet-up":
      return <MeetUp />
    case "study-camp":
      return <StudyCamp />
    case "hoge":
      return <div>hogehoge</div>;
  }
}