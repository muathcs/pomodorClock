import { useEffect, useState } from "react"

import Clock from "./Clock"

const Actions = () =>{

    const [clock, setClock] = useState(3)
    const startingMinutes = 5;
    let time = startingMinutes * 60;
    






    const checker = () =>{
        console.log(document.getElementById("seconds").innerText)
        
    }
    const setUpClock = () =>{
 
                const totalTime = document.querySelector(".clock");
                let countdownEl = document.querySelector("#clock");
                let Int;

                if (time > 0) {
                    time--;
                    let minutes = Math.floor(time / 60);
                    let seconds = time % 60;
                    seconds = seconds < 10 ? "0" + seconds : seconds;
                    minutes = minutes < 10 ? "0" + minutes : minutes;
                    localStorage.setItem("time", `${minutes}:${seconds}`);
                    let newArr = localStorage.getItem("time");
                    console.log(minutes)
                    console.log(seconds)
                    document.getElementById('minutes').innerText = minutes + ":";
                    document.getElementById('seconds').innerText = seconds;
                    // this.countdownEl[0].innerHTML = `${newArr}`
                } else {
                    // countdownEl[0].innerHTML = `00:00`;
                    // console.log("hello")
                    // clearInterval(Int);
                    clearInterval(start)
                }

              
            }

        let start;

        const startClock = () =>{
            start = setInterval(()=>{
                setUpClock()        
            }, 1000)
        }
        
        const stopClock = () =>{
             clearInterval(start)
        }

    return(
        <div id="actions">
            <button onClick={startClock}  id="start">Start</button>
            <button onClick={stopClock} id="stop">Stop</button>
            <button id="reset">Reset</button>
        </div>
    )
}

export default Actions