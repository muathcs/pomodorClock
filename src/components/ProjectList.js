import React, { useState } from 'react'
import AddPro from './AddPro'
import Projects from './Projects'
import "./styles/Projects.css"

function ProjectList({projects, setProjects, pomodoros}) {


  const log = (id) =>{
    console.log(id)
  }


  const [toggleState, setToggleState] = useState(0);


    const setIndex = (index) => {
        setToggleState(index);
    }


    const setClass = (index, className) => 
        toggleState === index ? className : '';
    
  
  return (



    <div>
        <ul>{
          
        
        projects.map((project) => (
          <div onClick={() => setIndex(project.id)} className={`container ${setClass(project.id, "activeClass")}`} key={project.id}>
            <Projects pomodoros={pomodoros} project={project}projects={projects} onClick={log} />
          </div>

        ))
        

            }

        </ul>
    </div>
  )
}

export default ProjectList