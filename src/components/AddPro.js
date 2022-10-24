import React, { useState } from 'react'
import "./styles/Projects.css"
function AddPro({project, setProject, projectName, projectTally, setProjectName, setProjectTally}) {

  const [trigger, setTrigger] = useState(false);


  const handleProjectName = (e) =>{
    setProjectName(e.target.value);
  }
  const handlePrjectTally = (e) =>{
    setProjectTally(e.target.value);
  }


  const addProject = (e) =>{

    setProject([
      ...project, 
      {text:projectName,
          tally:projectTally,
      }
  ]);

  setProjectName("");


  }


  return (trigger) ? (
    
    <div className='projects'>

    <div>
      <div onClick={() => {

        setTrigger(!trigger)
        addProject();
      
      }}  id='add-button'>
          +
      </div>
    </div>
     <div className="settings"> 
            <div className='inner-settings'>
                <button className="close-btn">close</button>

                <form className='setTime'>

                <label>Name:
                    <input value={projectName} onChange={handleProjectName} name="pomodor" id='pomodor' />
                </label>

                <label>Time:
                <input min={0} type="number" onChange={handlePrjectTally} name="shortBreak" id='shortBreak' />
                </label>

                </form>
            </div>
        </div>  
        </div>
  
  ) : (
    <div>
        <div onClick={()=> {

          setTrigger(!trigger)
          addProject();
        }}  id='add-button'>
            +
        </div>
    </div>
  )

 
    
  
}

export default AddPro