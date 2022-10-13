import './App.css';
import ReactDOM from "react-dom/client";

import react, {useEffect, useState, useRef} from "react";


import TopBar from './components/topBar';
import Clock from './components/Clock'
import Actions from "./components/Actions"
function App() {

  const [minutes, setMinutes] = useState("05");
  const[seconds, setSeconds] = useState("00");
  const timer = useRef(0)
  let start = useRef(0);





  // console.log(seconds)
  const [pomodor, setPomodor] = useState("FirstSignhaha");


  return (
    <div className="App">
      <p>Pomodor Clock</p>
        <TopBar setMinutes={setMinutes} setSeconds={setSeconds} seconds={setSeconds} timer={timer} start={start} />  
        <Clock minutes={minutes} seconds={seconds} /> 
        <Actions minutes={minutes} seconds={seconds} setMinutes={setMinutes} setSeconds={setSeconds} timer={timer} start={start}  />
    </div>
  );
}

export default App;
