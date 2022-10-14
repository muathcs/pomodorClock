import { clear } from "@testing-library/user-event/dist/clear";
import { useEffect, useRef } from "react";

const Actions = ({seconds, minutes, setMinutes, setSeconds, timer, start, clockType}) =>{


    const setUpClock = () =>{

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
            console.log("her", timer);
                clearInterval(start.current)
                start.current = setInterval(()=>{
                setUpClock()        
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
                    setMinutes("30");
                    timer.current = 30 * 60;
                    break;
                case "shortbreak":
                    setMinutes("05");
                    timer.current = 5 * 60;
                    break;
                case "longbreak":
                    setMinutes("10");
                    timer.current = 5 * 60;
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

export default Actions