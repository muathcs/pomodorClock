import React, { useContext, useState } from 'react'
import AddPro from './AddPro'
import Projects from './Projects'
import "./styles/Projects.css"
import { ProjectContext } from '../Contexts/ProjectContext'
import Actions from './Actions'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setName } from '../redux/trigger'

function ProjectList({projects, setProjects, projectName, pomodoros, counter, setProjectName}) {


  // const {projectName} = useSelector((state) => state.projectName);
  const dispatch = useDispatch();
  const {trg} = useSelector((state) => state.trigger);

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



    const deleteProject = (id) =>{
      setProjects(projects.filter((project) => project.id != id))
      dispatch(setName("nothing"))
    }
    
  
  return (



        <ul className="project-ul">{
          
        
        projects.map((project) => (
          <div onClick={() => {
            setProjectName(project.text);
            setProject(project)
            dispatch(setName(project.text))
            setIndex(project)}} className={`container ${setClass(project.id, "activeClass")}`} key={project.id}>


            <Projects counter={counter} project={project}projects={projects} onClick={log} />
            <button onClick={() => {
              dispatch(setName("nothing"))
              deleteProject(project.id)}} className='delete'>Delete</button>

            
          </div>

        ))
        

            }

        </ul>
  )
}

export default ProjectList