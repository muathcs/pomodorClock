import React, { useState } from 'react';
import "./styles/Projects.css";
function Projects({pomodoros}) {

    const [isActive, setIsActive] = useState(false);


    const isClicked = () =>{
        setIsActive((current) => !current)
    }

    // console.log(document.querySelectorAll(".container").map((item) => console.log(item)))
    console.log()



  return (
    <div>
        <div  onClick={isClicked} className={`container ${isActive ? "isClicked" : ""}`} >
            <div id='project-name'>
                project Name
            </div>
            <div id='tally'>
                {pomodoros}/34
            </div>
        </div>
    </div>
  )
}

export default Projects