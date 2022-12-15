import React, { useState } from 'react'
import "./styles/Projects.css"
import { useDispatch, useSelector } from 'react-redux';
import { flip, setName } from '../redux/trigger';
import { useEffect } from 'react';

function AddPro({projects,projectName, setProjects, projectTally, setProjectName, setProjectTally, counter}) {

  const {trigger} = useSelector((state) => state.trigger);
  // const {projectName} = useSelector((state) => state.projectName);
  const dispatch = useDispatch();
  // const [trigger, setTrigger] = useState(false);


  useEffect(() => {
  
    
    setProjectName("");

  }, [projects])

  const addProject = (e) =>{
    e.preventDefault();

    // setTrigger(!trigger)
    setProjects([
      ...projects, 
      {text:projectName,
        tally:projectTally,
        
        counter:counter,
        id:Math.random()*1000
      }
    ]);
    
    // setProjectName("");
    dispatch(flip());

  }

  /*
    * The trigger boolean is used to check which div to display, the div with the Plus icon to be clicked, or the div with two inputs to add a project and time. 
    * When the div with the plus is clicked, the trigger is turned to true, and this allows for the div with the input fields to pop up, when the div with the input field
    * is closed, the tirgger become false, and so the div with the plus icon is displayed. 
  */
  return (trigger) ? (
    
    <div className='project-container'>

      <div className='project-set clicked '>

                <button onClick={() => dispatch(flip())} className="close-btn-proj">close</button>

                <form className='setTime'>

                <label>Name:
                    <input value={projectName} onChange={e => setProjectName(e.target.value)} name="pomodor" id='pomodor-proj' />
                </label>

                <label>Time:
                <input min={0} type="number" onChange={e => setProjectTally(e.target.value)} name="shortBreak" id='shortBreak-proj' />
                </label>

                <button onClick={addProject}>Add</button>

                </form>
    </div>
     
      </div>
  
  ) : (
    <div className='project-holder'>
        <div onClick={()=> {

          dispatch(flip())
          // console.log("clicked")
         
        }}  className={`add-button-proj ${trigger ? "add-button-proj-clicked" : ""}`}>
            +
        </div>
    </div>
  )

 
    
  
}

export default AddPro