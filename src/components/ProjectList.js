import React, { useState } from 'react'
import AddPro from './AddPro'
import Projects from './Projects'
import "./styles/Projects.css"

function ProjectList({projects, setProjects, pomodoros, counter}) {


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
            <Projects counter={counter} pomodoros={pomodoros} project={project}projects={projects} onClick={log} />
          </div>

        ))
        

            }

        </ul>
    </div>
  )
}

export default ProjectList