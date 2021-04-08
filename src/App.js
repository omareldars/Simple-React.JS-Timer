// import logo from './logo.svg';
import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import ButtonMinus from './components/buttonminus';
import ButtonPlus from './components/buttonplus';
import Seconds from './components/seconds';
// 
const App = (props) => {
  const [minutes, setMinutes] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <ButtonMinus minutes={minutes} setMinutes={setMinutes} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label class="lbl" for="minuteno">{`${minutes} Minute`}</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <ButtonPlus minutes={minutes} setMinutes={setMinutes} />
      </header>
      <div class="counter">
        { minutes > 0 ? <Seconds minutes={minutes} setMinutes={setMinutes}/> : null}
      </div>
    </div>
  );
}
// 
export default App;
// 