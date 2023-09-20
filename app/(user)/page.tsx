import style from "./page.module.css";
import FirstView from './(top)/FirstView';
import Navigation from './(top)/Navigation';
import Main from './(top)/Main';

export default function Top() {
  return  (
    <main>
      <div className={style.blackBox}></div>
      <FirstView />
      <div className={style.blackBox}></div>
      <Navigation />
      <Main />
    </main>
  );
}