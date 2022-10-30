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
import {ProjectContext} from "./Contexts/ProjectContext"
function App() {

  const [minutes, setMinutes] = useState("05");
  const[seconds, setSeconds] = useState("00");
  const[clockType, setClockType] = useState("")

  const[projectName, setProjectName] = useState("")
  const[projectTally, setProjectTally] = useState("");
  const[counter, setCounter] = useState(1);
 
  const [pomodorTimer, setPomodorTimer] = useState(0.1);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(10);
  const [pomodoros, setPomodoros] = useState(1);
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState();
 
  const timer = useRef(0)
  let start = useRef(0);

  function setTimer(here){
    timer = here * 60;
  }

  useEffect(() =>{
    console.log("APPx", project);

    getProjects();
    setMinutes(pomodorTimer);
    setSeconds("00");
    timer.current = pomodorTimer * 60;
    setClockType("pomodor");
  },[])


  useEffect(() => {
    console.log("APP", project);
    saveLocalProjects();
  }, [projects, pomodoros])

  const saveLocalProjects = () => {
    localStorage.setItem("projects", JSON.stringify(projects))
  }

  const getProjects = () => {

    if(localStorage.getItem("projects") === null){
      localStorage.setItem("projects", JSON.stringify([]));
    }else{
      setProjects(JSON.parse(localStorage.getItem("projects")))
    }
  }



  return (
    <div className="App">
      <p>Pomodor Clock</p>
      <ProjectContext.Provider value={{project, setProject}}>
          <TopBar setMinutes={setMinutes} setSeconds={setSeconds} seconds={setSeconds} timer={timer} start={start} setClockType={setClockType} setPomodorTimer={setPomodorTimer} setShortBreak={setShortBreak} setLongBreak={setLongBreak}  pomodorTimer={pomodorTimer} shortBreak={shortBreak} longBreak={longBreak}/>  
          <Clock minutes={minutes} seconds={seconds} /> 
          <Actions counter={counter} setCounter={setCounter} setPomodoros={setPomodoros} minutes={minutes} seconds={seconds} setMinutes={setMinutes} setSeconds={setSeconds} timer={timer} start={start} setClockType={setClockType} clockType={clockType} setPomodorTimer={setPomodorTimer} setPhortBreak={setShortBreak} setPongBreak={setLongBreak}  pomodorTimer={pomodorTimer} shortBreak={shortBreak} longBreak={longBreak} />
          {/* <Projects pomodoros={pomodoros}/> */}
          {/* <Projects pomodoros={pomodoros}/> */}


          <div className='outer'>
          <ProjectList counter={counter} pomodoros={pomodoros} projects={projects} setProjects={setProjects}/>
          <AddPro counter={counter} projects={projects} setProjects={setProjects} projectTally={projectTally} projectName={projectName} setProjectTally={setProjectTally} setProjectName={setProjectName}/>
          </div>
      </ProjectContext.Provider>
    </div>
  );
}

export default App;
