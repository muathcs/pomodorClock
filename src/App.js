import './App.css';
import ReactDOM from "react-dom/client";

import react, {useEffect, useState, useRef} from "react";


import TopBar from './components/topBar';
import Clock from './components/Clock'
import Actions from "./components/Actions"
import Settings from './components/settings';
import Projects from './components/Projects';
import AddPro from './components/AddPro';
import ProjectList from './components/ProjectList';
function App() {

  const [minutes, setMinutes] = useState("05");
  const[seconds, setSeconds] = useState("00");
  const[clockType, setClockType] = useState("")

  const[projectName, setProjectName] = useState("")
  const[projectTally, setProjectTally] = useState("")
 
  const [pomodorTimer, setPomodorTimer] = useState(30);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(10);
  const [pomodoros, setPomodoros] = useState(1);
  const [project, setProject] = useState([]);
 
  const timer = useRef(0)
  let start = useRef(0);

  function setTimer(here){
    timer = here * 60;
  }

  useEffect(() =>{
    setMinutes(pomodorTimer);
    setSeconds("00");
    timer.current = pomodorTimer * 60;
    setClockType("pomodor");
  },[])






  return (
    <div className="App">
      <p>Pomodor Clock</p>
        <TopBar setMinutes={setMinutes} setSeconds={setSeconds} seconds={setSeconds} timer={timer} start={start} setClockType={setClockType} setPomodorTimer={setPomodorTimer} setShortBreak={setShortBreak} setLongBreak={setLongBreak}  pomodorTimer={pomodorTimer} shortBreak={shortBreak} longBreak={longBreak}/>  
        <Clock minutes={minutes} seconds={seconds} /> 
        <Actions setPomodoros={setPomodoros} minutes={minutes} seconds={seconds} setMinutes={setMinutes} setSeconds={setSeconds} timer={timer} start={start} setClockType={setClockType} clockType={clockType} setPomodorTimer={setPomodorTimer} setPhortBreak={setShortBreak} setPongBreak={setLongBreak}  pomodorTimer={pomodorTimer} shortBreak={shortBreak} longBreak={longBreak} />
        {/* <Projects pomodoros={pomodoros}/> */}
        {/* <Projects pomodoros={pomodoros}/> */}



        <ProjectList project={project} setProject={setProject}/>
        <AddPro project={project} setProject={setProject} projectTally={projectTally} projectName={projectName} setProjectTally={setProjectTally} setProjectName={setProjectName}/>
    </div>
  );
}

export default App;
