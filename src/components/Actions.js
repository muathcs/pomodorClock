import { clear } from "@testing-library/user-event/dist/clear";
import { useContext, useEffect, useRef } from "react";
import project from "./Projects"
import { ProjectContext } from "../Contexts/ProjectContext";

const Actions = ({seconds, minutes, setMinutes, setSeconds, timer, start, clockType, pomodorTimer, shortBreak, longBreak, setPomodoros, setCounter, counter}) =>{


    const {project, setProject} = useContext(ProjectContext);
     // use effect to set the project after you get the data
     useEffect(()=>{
         // get the project context

        //  if(project != null) console.log(project);
         console.log(project ? project : "goodbye");
         
     }, [project]) //optionally render again when project is updated);
    
    // The actual clock
    const setUpClock = (timer) =>{
        if (timer.current > 0) {
            timer.current--;
            let minutes = Math.floor(timer.current / 60);
            
            let seconds = timer.current % 60;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            localStorage.setItem("time", `${minutes}:${seconds}`);
            let newArr = localStorage.getItem("time");
            
            setSeconds(seconds)
            setMinutes(minutes)

                } else {
                    
                    reset();
                    
                    if(clockType == "pomodor" ){
                        
                        project.counter++;
                        setPomodoros((prevPomo) => prevPomo+1);
                    }
                    clearInterval(start.current)
                }
            }

            // Start the clock

        const startClock = () =>{

                clearInterval(start.current)
                start.current = setInterval(()=>{
                setUpClock(timer)    
            }, 1000)

        }

        // Stop the clock
    
        const stopClock = () =>{
            clearInterval(start.current)
        }

        //Reset the clock

        const reset = () =>{
            setSeconds("00");
            clearInterval(start.current);

            switch (clockType){
                case "pomodor":
                    setMinutes(pomodorTimer);
                    timer.current = pomodorTimer * 60;
                    break;
                case "shortbreak":
                    setMinutes(shortBreak);
                    timer.current = shortBreak * 60;
                    break;
                case "longbreak":
                    setMinutes(longBreak);
                    timer = longBreak * 60;
                    break;

            }
        }






    return(
        <div id="actions">
            <button id="start" onClick={startClock}>Start</button>
            <button id="stop" onClick={stopClock}>Stop</button>
            <button onClick={reset} id="reset">Reset</button>
        </div>
    )
}

export default Actions;

