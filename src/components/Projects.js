import React, { useState } from 'react';
import "./styles/Projects.css";
function Projects({pomodoros, project, projects}) {

    const [isActive, setIsActive] = useState();

    const [toggleState, setToggleState] = useState(0);


    const setIndex = (index) => {
        setToggleState(index);
    }


    const setClass = (index, className) => 
        toggleState === index ? className : '';
    


    const isClicked = (index) =>{
        // console.log("hello")
        // console.log("toggle-State: ", toggleState, " Index: ", index);
    }



  return (
    <div>
        <div className={`container ${setClass(project.id, 'activeClass')}`} 
        
        onClick={() => {
            setIndex(project.id)
            isClicked();
            
            }} >


                <div id='project-name' className="divCard" item-color='1' title='Tab 1'>
                    {project.text} -- {isActive === project.id ? "Hello" : "Not hello"}
                </div>

            

            <div id='tally'>
                {pomodoros}/{project.tally}
            </div>

        </div>

  
    </div>
  )
}

export default Projects