import MainMenu from './MainMenu/MainMenu';
import Introduction from './Introduction/Introduction';
import Demonstration from './Demonstration/Demonstration'
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppContainer}>
      <div className={style.MainMenu}>
        <MainMenu/>
      </div>
      <div className={style.Introduction}>
        <Introduction/>
      </div>
      <div className={style.Demonstration}>
        <Demonstration/>
      </div>
    </div>
  );
}

export default App;
