import './App.css';
import './Button'
import Button from './Button';
import React from 'react';


const initialState = {
    word1: "",
    word2: "",
    key: 0,
    answered: false,
    correct: false,
    clicked: 0
  }


class App extends React.Component {

  constructor () {
    super();
    this.state = initialState
  }
  componentDidMount() {
    this.task();
  }
  task = () => {
    this.setState(initialState)
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:3000/words", requestOptions)
      .then(response => response.json())
      .then(data => {
        this.setState({word1: data.words[0]});
        this.setState({word2: data.words[1]});
        this.setState({key: data.whichOne});
      })
      .catch(error => console.log('error', error));
  }

  pick = (n) => {
    this.setState({answered: true});
    this.setState({clicked: n})
    if(this.state.key == n){
      this.setState({correct: true})
    }
    else{
      this.setState({correct: false})
    }
  }


  render() {
    const answeredOpacity = {
      opacity: this.state.answered ? 1 : 0,
      pointerEvents: this.state.answered ? 'all' : 'none'
    }
    const answeredOptions = {
      pointerEvents: this.state.answered ? 'none' : 'all'
    }

    return (
    <div className="App">
      <div className='cont'>
        <div className="task__name">
          Задание 4
        </div>
        <div className="task__desc">
          Выберите слово, где <b>верно</b> поставлено ударение:
        </div>
        <div className="task__cont" style={answeredOptions}>
          <Button value={this.state.word1} color={this.state.answered ? (this.state.clicked ? 'purple' : (this.state.correct ? 'green' : 'red')) : 'purple'} onClick={() => this.pick(0)}/>
          <Button value={this.state.word2} color={this.state.answered ? (this.state.clicked ? (this.state.correct ? 'green' : 'red') : 'purple') : 'purple'} onClick={() => this.pick(1)}/>
        </div>
        <div className="task__check" style={answeredOpacity}>
          <div className="task__check__clearness">
            {this.state.correct ? 'Верно!! УраУра' : (`Неверно!! Правильный вариант: ` + (this.state.key ? this.state.word2 : this.state.word1))}
          </div>
          <Button value="Продолжить" color="lightblue" onClick={() => this.task()}/>
        </div>
      </div>
    </div>
  );
  } 
}

export default App;
