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
    e.preventDefault();

    setTrigger(!trigger)

    setProject([
      ...project, 
      {text:projectName,
          tally:projectTally,
          id:Math.random()*1000
      }
  ]);



  setProjectName("");


  }

  const DisplayProj = (e) =>{

    // e.preventDefault();

    return(

      <div>
        hjsafdhjsafdhjk
      </div>
    )
  }


  return (trigger) ? (
    
    <div className='projects'>

    <div className='clickedx'>
      <div className='add-button clicked' onClick={() => {

      
      }} >



          <div className="settings-proj"> 
            <div className='inner-settings-proj'>
                <button onClick={() => setTrigger(false)} className="close-btn-proj">close</button>

                <form className='setTime'>

                <label>Name:
                    <input value={projectName} onChange={handleProjectName} name="pomodor" id='pomodor-proj' />
                </label>

                <label>Time:
                <input min={0} type="number" onChange={handlePrjectTally} name="shortBreak" id='shortBreak-proj' />
                </label>

                <button onClick={addProject}>Add</button>

                </form>
            </div>
        </div>  
      </div>
    </div>
     
      </div>
  
  ) : (
    <div>
        <div onClick={()=> {

          setTrigger(!trigger)
        }}  className='add-button-proj'>
            +
        </div>
    </div>
  )

 
    
  
}

export default AddPro