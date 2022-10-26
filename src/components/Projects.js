import React, { useState } from 'react';
import "./styles/Projects.css";
function Projects({pomodoros, project}) {

    const [isActive, setIsActive] = useState(false);


    const isClicked = () =>{
        setIsActive((current) => !current)
    }

    // console.log(document.querySelectorAll(".container").map((item) => console.log(item)))
    console.log()

    console.log("pomos", pomodoros)

  return (
    <div>
        <div  onClick={isClicked} className={`container ${isActive ? "isClicked" : ""}`} >
            <div id='project-name'>
                {project.text}
            </div>
            <div id='tally'>
                {pomodoros}/{project.tally}
            </div>
        </div>
    </div>
  )
}

export default Projects