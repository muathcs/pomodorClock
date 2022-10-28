import React, { useState } from 'react';
import "./styles/Projects.css";
function Projects({pomodoros, project, projects}) {


    // const [toggleState, setToggleState] = useState(0);


    // const setIndex = (index) => {
    //     setToggleState(index);
    // }


    // const setClass = (index, className) => 
    //     toggleState === index ? className : '';
    


    // const isClicked = (index) =>{
    //     // console.log("hello")
    //     // console.log("toggle-State: ", toggleState, " Index: ", index);
    // }



  return (
    <div>
        <div>
                <div id='project-name' className="divCard" item-color='1' title='Tab 1'>
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