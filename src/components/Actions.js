import { clear } from "@testing-library/user-event/dist/clear";
import { useEffect, useRef } from "react";

const Actions = ({seconds, minutes, setMinutes, setSeconds, timer, start, clockType, pomodorTimer, shortBreak, longBreak}) =>{

    // timer = timer.current;
    const setUpClock = (timer) =>{
        console.log(timer)
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
                    clearInterval(start)
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
                console.log("HERE", timer.current / 60)    
                setUpClock(timer)    
            }, 1000)

        }

        
        const stopClock = () =>{
            clearInterval(start.current)
        }

        const reset = () =>{
            console.log(timer);
            setSeconds("00");
            clearInterval(start.current);

            switch (clockType){
                case "pomodor":
                    setMinutes(pomodorTimer / 60);
                    timer.current = pomodorTimer * 60;
                    console.log("myCase", pomodorTimer);
                    break;
                case "shortbreak":
                    setMinutes(shortBreak / 60);
                    console.log("cases", shortBreak)
                    timer.current = shortBreak * 60;
                    break;
                case "longbreak":
                    setMinutes(longBreak / 60);
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

