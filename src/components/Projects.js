import React, { useState } from 'react';
import "./styles/Projects.css";
function Projects({pomodoros, project, projects}) {

    const [isActive, setIsActive] = useState();


    const isClicked = () =>{
        // setIsActive((current) => !current)
    }

    // console.log(document.querySelectorAll(".container").map((item) => console.log(item)))


  return (
    <div>
        <div  onClick={() => {
            setIsActive(project.id);
            console.log(projects)

        }} className={`container ${isActive === project.id ? "isClicked" : ""}`} >

            {projects.map((item) => (
                <div id='project-name' onClick={() => setIsActive(item.id)} key={item.id}>
                    {project.text} -- {isActive === project.id ? "Hello" : "Not hello"}
                </div>

            ))}
            

            <div id='tally'>
                {pomodoros}/{project.tally}
            </div>

        </div>
    </div>
  )
}

export default Projects