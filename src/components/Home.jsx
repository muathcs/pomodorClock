import { useEffect, useRef, useState } from "react";
import { ProjectContext } from "../Contexts/ProjectContext";
import Actions from "./Actions";
import AddPro from "./AddPro";
import Clock from "./Clock";
import ProjectList from "./ProjectList";
import TopBar from "./topBar";

const Home = () => {

    console.log("here")
      // const {count} = useSelector((state) => state.counter);
  // const dispatch = useDispatch();
  const [minutes, setMinutes] = useState("10");

  const[seconds, setSeconds] = useState("00");
  const[clockType, setClockType] = useState("")

  const[projectName, setProjectName] = useState("")
  const[projectTally, setProjectTally] = useState("");
  const[counter, setCounter] = useState(1);
 
  const [pomodorTimer, setPomodorTimer] = useState(0.1);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(10);
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState();
 
  const timer = useRef(0)
  let start = useRef(0);

  function setTimer(here){
    timer = here * 60;
  }

  useEffect(() =>{

    getProjects();
    setMinutes(pomodorTimer);
    setSeconds("00");
    timer.current = pomodorTimer * 60;
    setClockType("pomodor");
  },[])


  useEffect(() => {
    console.log(projects)
    saveLocalProjects();
  })

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
        <>
        <p>Pomodor Clock</p>

        <ProjectContext.Provider value={{project, setProject}}>
          <TopBar setMinutes={setMinutes} setSeconds={setSeconds} seconds={setSeconds} timer={timer} start={start} setClockType={setClockType} setPomodorTimer={setPomodorTimer} setShortBreak={setShortBreak} setLongBreak={setLongBreak}  pomodorTimer={pomodorTimer} shortBreak={shortBreak} longBreak={longBreak}/>  
          <Clock minutes={minutes} seconds={seconds} /> 
          <Actions projectName={projectName} counter={counter} setCounter={setCounter}  minutes={minutes} seconds={seconds} setMinutes={setMinutes} setSeconds={setSeconds} timer={timer} start={start} setClockType={setClockType} clockType={clockType} setPomodorTimer={setPomodorTimer} setPhortBreak={setShortBreak} setPongBreak={setLongBreak}  pomodorTimer={pomodorTimer} shortBreak={shortBreak} longBreak={longBreak} />


          <div className='outer flex gap[5px] flex-col justify-center items-center'>
          <ProjectList setProjectName={setProjectName} counter={counter} projects={projects} setProjects={setProjects}/>
          <AddPro counter={counter} projects={projects} setProjects={setProjects} projectTally={projectTally} projectName={projectName} setProjectTally={setProjectTally} setProjectName={setProjectName}/>
          </div>
      </ProjectContext.Provider>
        </>
     );
}
 
export default Home;