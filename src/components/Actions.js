import { clear } from "@testing-library/user-event/dist/clear";
import { useEffect, useRef } from "react";

const Actions = ({seconds, minutes, setMinutes, setSeconds}) =>{



    

    let time = useRef(5*60);
    let start = useRef(0);


    const setUpClock = () =>{
                let Int;

                if (time.current > 0) {
                    time.current--;
                    let minutes = Math.floor(time.current / 60);

                    let seconds = time.current % 60;
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
            }, 1000)

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