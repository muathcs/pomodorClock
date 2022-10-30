
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import Settings from "./settings";

import startClock from "./settings"
import check from "./settings"

const TopBar = ({setMinutes, timer, setSeconds, start, setClockType, pomodorTimer, shortBreak, longBreak, setPomodorTimer, setShortBreak, setLongBreak}) => {


    const [trigger, setTrigger] = useState(false);
    const [ToggleState, setToggleState] = useState(1);

    
    function pomodor(){
        setTrigger(false);
        clearInterval(start.current);
        setMinutes(pomodorTimer);
        setSeconds("00");
        console.log(pomodorTimer)
        timer.current = pomodorTimer * 60;
        setClockType("pomodor");

    }

    function shortBreakSet(){
        setTrigger(false);
        clearInterval(start.current);
        setMinutes(shortBreak);
        // timer.current = 5 * 60;
        timer.current = shortBreak * 60;
        setSeconds("00");
        setClockType("shortbreak");

    }
    
    function longBreakSet(){
        setTrigger(false);
        clearInterval(start.current);
        setMinutes(longBreak);
        // timer.current = 10 * 60;
        timer.current = longBreak * 60;
        setSeconds("00");
        setClockType("longbreak");
    }


    function openSettings(){
        setTrigger(true);
    }

    const toggleTab = (index) => {
        setToggleState(index)
    }

    const setClass = (index, className) =>{
        if(ToggleState == index){
            return className
        }else{
            return ""
        }
        
        // ToggleState === index ? className : "null";

    }

    return(
        <div>
           <div className="top-div">
                <button onClick={() => {pomodor(); toggleTab(1)}} className={`${setClass(1, "active-top")}`} >Pomodor</button>
                <button onClick={() => {shortBreakSet(); toggleTab(2)}} className={`${setClass(2, "active-top")}`} >Short Break</button>
                <button onClick={() => {longBreakSet(); toggleTab(3)}} className={`${setClass(3, "active-top")}`}>Long Long Break</button>
                <button onClick={() => {openSettings()}} >Settings</button>
           </div>
           <Settings setClockType={setClockType} trigger={trigger} setTrigger={setTrigger} timer={timer} pomodorTimer={pomodorTimer} shortBreak={shortBreak} longBreak={longBreak} setMinutes={setMinutes} setSeconds={setSeconds} setPomodorTimer={setPomodorTimer} setShortBreak={setShortBreak} setLongBreak={setLongBreak}>
            </Settings>
        </div>
    )
}

export default TopBar;