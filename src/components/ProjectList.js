import React, { useContext, useState } from 'react'
import AddPro from './AddPro'
import Projects from './Projects'
import "./styles/Projects.css"
import { ProjectContext } from '../Contexts/ProjectContext'
import Actions from './Actions'

function ProjectList({projects, setProjects, pomodoros, counter}) {


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


    const setClass = (index, className) => 
        toggleState === index ? className : '';



    const deleteProject = (id) =>{
      setProjects(projects.filter((project) => project.id != id))
    }
    
  
  return (



    <div >
        <ul className=''>{
          
        
        projects.map((project) => (
          <div onClick={() => {
            setProject(project)
            setIndex(project)}} className={`container ${setClass(project.id, "activeClass")}`} key={project.id}>
            {/* {setProject(project)} */}
            <Projects counter={counter} pomodoros={pomodoros} project={project}projects={projects} onClick={log} />
            <button onClick={() => deleteProject(project.id)} className='delete'>Delete</button>

            
          </div>

        ))
        

            }

        </ul>
    </div>
  )
}

export default ProjectList