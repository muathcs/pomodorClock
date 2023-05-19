import React, { useState } from 'react'
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
    
    <div className='w-[480px] rounded-xl h-[80px] flex pl-0 justify-center select-none '>

      <div className=' clicked rounded-md bg-pink-50 border-2 border-black rouned-[5px] p-[5px] w-full max-width[480px] h-[7rem] transition duration-[0.1s] flex flex-col select-none'>
        <div className=''>

                <button onClick={() => dispatch(flip())} className="close-btn-proj bg-red-600 text-white p-2 rounded-lg ">close</button>
        </div>

                <form className='setTime flex mb-2  relative bottom-2'>

                <label>Project Name:
                    <input value={projectName} onChange={e => setProjectName(e.target.value)} name="pomodor" id='pomodor-proj' className="p-2 rounded-md focus:outline-none border border-black mr-1" />
                </label>

                <label>Time:
                <input min={0} type="number" onChange={e => setProjectTally(e.target.value)} name="shortBreak" id='shortBreak-proj' className='p-2 rounded-md focus:outline-none border border-black ' />
                </label>

                <button className=' bg-yellow-300 hover:bg-yellow-400 ml-1 rounded-xl p-2' onClick={addProject}>Add</button>

                </form>
    </div>
     
      </div>
  
  ) : (
    <div className=' m-0 p-0 w-[100%] flex justify-center'>
        <div onClick={()=> {

          dispatch(flip())
          // console.log("clicked")
         
        }}  className={` w-full max-w-[480px] h-[66px] bg-pink-50 rounded-[5px] flex items-center justify-center text-[66px] cursor-pointer border-[1px] border-black hover:bg-pink-100 hover:text-white hover:h-full transition duration-[0.1s]  ${trigger ? "add-button-proj-clicked" : ""}`}>
            +
        </div>
    </div>
  )

 
    
  
}

export default AddPro