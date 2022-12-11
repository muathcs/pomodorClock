import { clear } from "@testing-library/user-event/dist/clear";
import { useContext, useEffect, useRef } from "react";
import project from "./Projects"
import { ProjectContext } from "../Contexts/ProjectContext";

const Actions = ({seconds, minutes, setMinutes, setSeconds, timer, start, clockType, pomodorTimer, shortBreak, longBreak, setCounter, counter, projectName}) =>{


    const {project, setProject} = useContext(ProjectContext);
    
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
                    
                    // this if statement checks if a project has been clicked, 
                    // this is to prevent undefined error when incremening the project.counter since there is no project. 
                    if(clockType == "pomodor" && project != undefined){
                        project.counter++;
                    }
                }
            }

            
            // Start the clock
        const startClock = () =>{

            //clearInterval before every start, to prevent the clock for speeding up. 
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

        /*
        * When the timer ends, this function will be called, it has a switch statement, 
        * to see which timer just ended, and reset the timer accordingly. 
        */
        const reset = () =>{
            setSeconds("00");
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
        <>
        <div className="actions">
            <button id="start" onClick={startClock}>Start</button>
            <button id="stop" onClick={stopClock}>Stop</button>
            <button onClick={reset} id="reset">Reset</button>
        </div>

        <p>{projectName}</p>
        </>
    )
}

export default Actions;

