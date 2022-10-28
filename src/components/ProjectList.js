import React from 'react'
import AddPro from './AddPro'
import Projects from './Projects'

function ProjectList({projects, setProjects, pomodoros}) {


  const log = () =>{
    console.log("1238932478924378")
  }
  return (



    <div>
        <ul>{
          
        
        projects.map((project) => (
            <Projects pomodoros={pomodoros} project={project} key={project.id} projects={projects} />

        ))
        

            }

        </ul>
    </div>
  )
}

export default ProjectList