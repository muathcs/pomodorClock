import { clear } from "@testing-library/user-event/dist/clear";
import { useEffect, useRef } from "react";

const Actions = ({seconds, minutes, setMinutes, setSeconds, timer, start, clockType, pomodorTimer, shortBreak, longBreak}) =>{


    const setUpClock = (timerType) =>{

                if (timerType.current > 0) {
                    timerType.current--;
                    let minutes = Math.floor(timerType.current / 60);

                    let seconds = timerType.current % 60;
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

        const startClock = (timerType) =>{
            // console.log("her", timer);

            switch (clockType){
                case "pomodor":
                    timer.current = pomodorTimer * 60;
                    console.log("myCase", pomodorTimer);
                    break;
                case "shortbreak":
                    timer.current = shortBreak * 60;
                    break;
                case "longbreak":
                    timer.current = longBreak * 60;
                    break;

            }
            
                clearInterval(start.current)
                start.current = setInterval(()=>{
                setUpClock(timerType)        
            }, 1000)

        }

        
        const stopClock = () =>{
            clearInterval(start.current)
        }

        const reset = () =>{
            console.log(timer.current);
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
                    timer.current = longBreak * 60;
                    break;

            }
        }






    return(
        <div id="actions">
            <button id="start" onClick={() => startClock(timer)}>Start</button>
            <button id="stop" onClick={stopClock}>Stop</button>
            <button onClick={reset} id="reset">Reset</button>
        </div>
    )
}

export default Actions;

