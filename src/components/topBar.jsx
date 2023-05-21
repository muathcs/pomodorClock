
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import Settings from "./settings";

import startClock from "./settings"
import check from "./settings"
import { clear } from "@testing-library/user-event/dist/clear";
import { useDispatch, useSelector } from "react-redux";
import { setMinutesR, setSecondsR } from "../redux/timer";

const TopBar = ({timer, start, setClockType}) => {


    const [trigger, setTrigger] = useState(false);
    const [ToggleState, setToggleState] = useState(1);
    const dispatch = useDispatch();

    const {pomodorTimer, longBreak, shortBreak, seconds, minutes } = useSelector((state) => state.timer);


    const tabs = [
        { label: "Pomodor", minutes: pomodorTimer, clockType: "pomodor", index: 1 },
        { label: "Short Break", minutes: shortBreak, clockType: "shortbreak", index: 2 },
        { label: "Long Break", minutes: longBreak, clockType: "longbreak", index: 3 },
      ];


     // Assigns the appropriate information to match the clicked clock type.  
    function setTimeAndStart(minutes, clockType){
        console.log("MINATES: ", minutes)
        setTrigger(false);
        clearInterval(start.current);
        dispatch(setSecondsR("00"));

        if(typeof minutes !== "undefined"){
            console.log("herexxx")
            dispatch(setMinutesR(minutes));
            timer.current = minutes * 60;
        }
        setClockType(clockType)


    }

    // adds a class to the clicked Clock type. 
    const setClass = (index, className) =>{
        return ToggleState == index ? className : ""

    }

    const ButtonStyle = "px-0 py-[10px] w-full max-w-[160px] bg-[#ff6347] hover:bg-[#dc5c45] cursor-pointer border-[0.1px] border-black "

    return(
        <div>
           <div className="top-sdiv flex justify-center">
            {tabs.map((tab) => (
                <button 
                key={tab.index}
                onClick={()=> {
                    setTimeAndStart(tab.minutes, tab.clockType);
                    setToggleState(tab.index)

                }}
                    className={ButtonStyle + setClass(tab.index, " selected")}
                >
                    {tab.label}
                </button>
            ))}
                <button onClick={() => {
                    
                    setTrigger(true); }} className={ButtonStyle } >Settings</button>
           </div>
           <div className="flex justify-center ">
           <Settings ToggleState={ToggleState} setClockType={setClockType} trigger={trigger} setTrigger={setTrigger} timer={timer} >
            </Settings>
           </div>
        </div>
    )
}

export default TopBar;