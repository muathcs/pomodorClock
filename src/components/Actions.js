import { clear } from "@testing-library/user-event/dist/clear";
import { useEffect, useRef } from "react";

const Actions = ({seconds, minutes, setMinutes, setSeconds, timer, start, clockType, pomodorTimer, shortBreak, longBreak, setPomodoros}) =>{

    // timer = timer.current;
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
                    

                    if(clockType == "pomodor" ){

                        setPomodoros((prevPomo) => prevPomo+1);
                    }
                    console.log("sdfjhljadsflhkjs")
                    clearInterval(start.current)
                }
            }

        const startClock = () =>{
            // switch (clockType){
            //     case "pomodor":
            //         // timer.current = pomodorTimer * 60;
            //         break;
            //     case "shortbreak":
            //         timer.current = shortBreak * 60;
            //         break;
            //     case "longbreak":
            //         timer.current = longBreak * 60;
            //         break;

            // }
            
                clearInterval(start.current)
                start.current = setInterval(()=>{
                setUpClock(timer)    
            }, 1000)

        }

        
        const stopClock = () =>{
            clearInterval(start.current)
        }

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

