import { useEffect, useRef, useState } from "react";
import { ProjectContext } from "../Contexts/ProjectContext";
import Actions from "./Actions";
import AddPro from "./AddPro";
import Clock from "./Clock";
import ProjectList from "./ProjectList";
import TopBar from "./topBar";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNewProject } from "../redux/projectsSlicer";

const Home = () => {

  const[clockType, setClockType] = useState("")

  const[projectName, setProjectName] = useState("")
  const[projectTally, setProjectTally] = useState("");
  const[counter, setCounter] = useState(1);
 
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState();
 
  const timer = useRef(0)
  let start = useRef(0);

  const projectList = useSelector(state => state.projectList)
  const dispatch = useDispatch(); 



  useEffect(() =>{

    getProjects();
    setClockType("pomodor");
  },[])


  useEffect(() => {
    saveLocalProjects();
  }, [projectList])

  const saveLocalProjects = () => {
    localStorage.setItem("projects", JSON.stringify(projectList))
  }

  const getProjects = () => {

    if(localStorage.getItem("projects") === null){
      localStorage.setItem("projects", JSON.stringify([]));
    }else{
      dispatch(addNewProject(JSON.parse(localStorage.getItem("projects"))))
      // setProjects(JSON.parse(localStorage.getItem("projects")))
    }
  }

    return ( 
        <>
        <p>Pomodor Clock</p>

        <ProjectContext.Provider value={{project, setProject}}>
          <TopBar timer={timer} start={start} setClockType={setClockType}/>  
          <Clock /> 
          <Actions projectName={projectName} counter={counter} setCounter={setCounter}   timer={timer} start={start} setClockType={setClockType} clockType={clockType}  />


          <div className='outer flex gap[5px] flex-col justify-center items-center'>
          <ProjectList setProjectName={setProjectName} counter={counter} projects={projects} setProjects={setProjects}/>
          <AddPro counter={counter} projects={projects} setProjects={setProjects} projectTally={projectTally} projectName={projectName} setProjectTally={setProjectTally} setProjectName={setProjectName}/>
          </div>
      </ProjectContext.Provider>
        </>
     );
}
 
export default Home;