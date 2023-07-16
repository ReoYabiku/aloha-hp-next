import FirstView from './components/organisms/FirstView';
import Navigation from './components/organisms/Navigation';
import Main from './components/organisms/Main';

export default function Top() {
  return  (
    <main>
      <FirstView />
      <Navigation />
      <Main />
    </main>
  );
}