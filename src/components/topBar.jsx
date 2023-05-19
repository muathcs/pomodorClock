
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import Settings from "./settings";

import startClock from "./settings"
import check from "./settings"

const TopBar = ({setMinutes, timer, setSeconds, start, setClockType, pomodorTimer, shortBreak, longBreak, setPomodorTimer, setShortBreak, setLongBreak}) => {


    const [trigger, setTrigger] = useState(false);
    const [ToggleState, setToggleState] = useState(1);

    
    function pomodor(){
        // console.log("here")
        setTrigger(false);
        clearInterval(start.current);
        setMinutes(pomodorTimer);
        setSeconds("00");
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

    const ButtonStyle = "px-0 py-[10px] w-full max-w-[160px] bg-[#ff6347] hover:bg-[#dc5c45] cursor-pointer border-[0.1px] border-black"

    return(
        <div>
           <div className="top-sdiv flex justify-center">
                <button onClick={() => {pomodor(); toggleTab(1)}} className={ButtonStyle + `${setClass(1, " selected")}`} >Pomodor</button>
                <button onClick={() => {shortBreakSet(); toggleTab(2)}} className={ButtonStyle + `${setClass(2, " selected")}`} >Short Break</button>
                <button onClick={() => {longBreakSet(); toggleTab(3)}} className={ButtonStyle + `${setClass(3, " selected")}`}>Long Long Break</button>
                <button onClick={() => {openSettings(); }} className={ButtonStyle } >Settings</button>
           </div>
           <div className="flex justify-center ">
           <Settings ToggleState={ToggleState} setClockType={setClockType} trigger={trigger} setTrigger={setTrigger} timer={timer} pomodorTimer={pomodorTimer} shortBreak={shortBreak} longBreak={longBreak} setMinutes={setMinutes} setSeconds={setSeconds} setPomodorTimer={setPomodorTimer} setShortBreak={setShortBreak} setLongBreak={setLongBreak}>
            </Settings>
           </div>
        </div>
    )
}

export default TopBar;