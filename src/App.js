import './App.css';
import ReactDOM from "react-dom/client";

import react, {useEffect, useState, useRef} from "react";


import TopBar from './components/topBar';
import Clock from './components/Clock'
import Actions from "./components/Actions"
import Settings from './components/settings';
function App() {

  const [minutes, setMinutes] = useState("05");
  const[seconds, setSeconds] = useState("00");
  const[clockType, setClockType] = useState("")

  const [pomodorTimer, setPomodorTimer] = useState(30);
  const [shortBreak, setShortBreak] = useState(4);
  const [longBreak, setLongBreak] = useState(11);
  const timer = useRef(0)
  let start = useRef(0);






  return (
    <div className="App">
      <p>Pomodor Clock</p>
        <TopBar setMinutes={setMinutes} setSeconds={setSeconds} seconds={setSeconds} timer={timer} start={start} setClockType={setClockType} setPomodorTimer={setPomodorTimer} setShortBreak={setShortBreak} setLongBreak={setLongBreak}  pomodorTimer={pomodorTimer} shortBreak={shortBreak} longBreak={longBreak} />  
        <Clock minutes={minutes} seconds={seconds} /> 
        <Actions minutes={minutes} seconds={seconds} setMinutes={setMinutes} setSeconds={setSeconds} timer={timer} start={start} setClockType={setClockType} clockType={clockType} setPomodorTimer={setPomodorTimer} setPhortBreak={setShortBreak} setPongBreak={setLongBreak}  pomodorTimer={pomodorTimer} shortBreak={shortBreak} longBreak={longBreak}  />
    </div>
  );
}

export default App;
