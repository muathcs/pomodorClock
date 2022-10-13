import { clear } from "@testing-library/user-event/dist/clear";
import { useEffect, useRef } from "react";

const Actions = ({seconds, minutes, setMinutes, setSeconds, timer, start}) =>{



    

    // let time = useRef(timer*60);
    // let start = useRef(0);


    const setUpClock = () =>{
                let Int;

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

                clearInterval(start.current)
                start.current = setInterval(()=>{
                setUpClock()        
            }, 0)

        }

        const stopClock = () =>{
            clearInterval(start.current)
        }



    return(
        <div id="actions">
            <button id="start" onClick={startClock}>Start</button>
            <button id="stop" onClick={stopClock} id="stop">Stop</button>
            <button id="reset">Reset</button>
        </div>
    )
}

export default Actions