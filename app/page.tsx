import style from "./page.module.css";
import FirstView from './(user)/(top)/FirstView';
import Navigation from './(user)/(top)/Navigation';
import Main from './(user)/(top)/Main';

export default function Top() {
  return  (
    <main>
      <div className={style.blackBox}></div>
      <FirstView />
      <div className={style.blackBox}></div>
      {/* <Navigation /> */}
      <Main />
    </main>
  );
}