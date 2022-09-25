import './App.css';
import './Button'
import Button from './Button';

function App() {
  return (
    <div className="App">
      <div className='cont'>
        <div className="task__name">
          Задание 4
        </div>
        <div className="task__desc">
          Выберите слово, где <b>верно</b> поставлено ударение:
        </div>
        <div className="task__cont">
          <Button value="аэропОрты" color='purple'/>
          <Button value="аэропортЫ" color='purple'/>
        </div>
        <div className="task__check">
          <div className="task__check__clearness">
            -
          </div>
          <Button value="Продолжить" color="lightblue"/>
        </div>
      </div>
    </div>
  );
}

export default App;
