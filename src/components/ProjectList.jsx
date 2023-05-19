import React, { useContext, useState } from 'react'
import AddPro from './AddPro'
import Projects from './Projects'
import { ProjectContext } from '../Contexts/ProjectContext'
import Actions from './Actions'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setName } from '../redux/trigger'

function ProjectList({projects, setProjects, projectName, pomodoros, counter, setProjectName}) {


  // const {projectName} = useSelector((state) => state.projectName);
  const dispatch = useDispatch();
  const {trg} = useSelector((state) => state.trigger);
  const [projectID, setProjectID]  = useState("");
  const projectNameArr = [];
  projects.map((proj) => projectNameArr.push(proj.text));

  // console.log("my ARRay ", projectNameArr)
  const log = (id, project) =>{
    // console.log(id)
  }

 


  const [toggleState, setToggleState] = useState(0);
  const {project, setProject} = useContext(ProjectContext);

    const setIndex = (project) => {
        setToggleState(project.id);
        // setProject(project)
        // console.log(project.id,":", project.counter)

    }

    useEffect((project) => {
      
      setProjectName("");
      // console.log(project)

    }, [projects])

    const setClass = (index, className) => 
    toggleState === index ? className : '';



    const deleteProject = (e, project, id) =>{
      setProjects(projects.filter((proj) => proj.id != project.id))


      //this check means if the project is clicked and then deleted, then remove the project Name, but if the project is not clicked, and deleted, then don't mutate the project name. 
      if(project.id == id)
        dispatch(setName(""))//this changes the state from redux doesn't change either.
   
      

    }
    const containerStyle =  " "
    
  
  return (



        <ul className="project-ul w-full flex flex-col justify-center items-center pl-0">{
          
        
        projects.map((project) => (
          <div onClick={() => {

            setProjectName(project.text);
            dispatch(setName(project.text))
            setProjectID(project.id)
            setProject(project);
            setIndex(project)}}



            className={`
            w-full max-w-[480px] h-[66px] ml-[0.1em] mb-[0.3em] rounded-[5px] relative flex items-center cursor-pointer border-l-[5px] border-transparent hover:border-l-[5px] hover:border-[#838383] bg-[#fad7d7]
            
            
            container ${containerStyle} ${setClass(project.id, "activeClass")}`} key={project.id}>

            <Projects counter={counter} project={project}projects={projects} onClick={log} />
            <button onClick={(e) => {
              e.stopPropagation();
              deleteProject(e, project, projectID)}} className='h-full  bg-red-600 hover:bg-gradient text-white rounded-[5px] border-none py-[2px] px-[1px] absolute right-0 top-0 cursor-pointer'>Delete</button>

            
          </div>

        ))
        

            }

        </ul>
  )
}

export default ProjectList