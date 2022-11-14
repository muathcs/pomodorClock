import React, { useContext, useState } from 'react'
import AddPro from './AddPro'
import Projects from './Projects'
import "./styles/Projects.css"
import { ProjectContext } from '../Contexts/ProjectContext'
import Actions from './Actions'
import { useEffect } from 'react'

function ProjectList({projects, setProjects, pomodoros, counter, setProjectName}) {



  const projectNameArr = [];
  projects.map((proj) => projectNameArr.push(proj.text));

  console.log("my ARRay ", projectNameArr)
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

    useEffect(() => {
      if(projectNameArr.includes(project.text)){
        setProjectName(project.text);
      }else{
        setProjectName("");
      }
    }, [projects])

    const setClass = (index, className) => 
        toggleState === index ? className : '';



    const deleteProject = (id) =>{
      projectNameArr.pop();
      setProjects(projects.filter((project) => project.id != id))
    }
    
  
  return (



        <ul className="project-ul">{
          
        
        projects.map((project) => (
          <div onClick={() => {
            setProjectName(project.text);
            setProject(project)
            setIndex(project)}} className={`container ${setClass(project.id, "activeClass")}`} key={project.id}>

            <Projects counter={counter} pomodoros={pomodoros} project={project}projects={projects} onClick={log} />
            <button onClick={() => deleteProject(project.id)} className='delete'>Delete</button>

            
          </div>

        ))
        

            }

        </ul>
  )
}

export default ProjectList