import react, {useState} from 'react'
import { useReducer } from 'react'


import check from "./Actions"
import startClock from "./Actions" 
import setUpClock from "./Actions"
import Actions from './Actions'
import { useDispatch, useSelector } from 'react-redux'
import { setLongBreakR, setMinutesR, setPomodorTimerR, setShortBreakR } from '../redux/timer'

let value;
// function reducer(state, action, e){
//     switch(action.type){
//         case 'pomodoro':
//             state.setPomodorTimer(action.e.target.value);
//             state.timer.current = action.e.target.value * 60;
//             state.setPomodorTimer(action.e.target.value);
//             state.pomodorTimer = action.e.target.value;
//             state.setSeconds("00");
//             return state;

//         case 'shortBreak':
//             state.setShortBreak(action.e.target.value);
//             state.timer.current = action.e.target.value * 60;
//             state.setShortBreak(action.e.target.value);
//             state.shortBreak = action.e.target.value;
//             state.setSeconds("00");
//             return state;

//         case 'longBreak':
//             state.setLongBreak(action.e.target.value);
//             state.timer.current = action.e.target.value * 60;
//             state.setLongBreak(action.e.target.value);
//             state.shortBreak = action.e.target.value;
//             state.setSeconds("00");
//             return state;

//     }

// }

function Settings({setTrigger, trigger}){
    
    
    const { pomodorTimer, shortBreak, longBreak } = useSelector((state) => state.timer);

    const dispatch = useDispatch();



    function settingSetter(clockType, e){
        switch(clockType){
            case "pomodoro":
                dispatch(setPomodorTimerR(e.target.value));
                dispatch(setMinutesR(pomodorTimer))

                break;

            case "shortBreak":
                    dispatch(setShortBreakR(e.target.value));
                dispatch(setMinutesR(shortBreak))

                    break;

            case "longBreak":
                dispatch(setLongBreakR(e.target.value))
                dispatch(setMinutesR(longBreak))

                console.log("Inisde long Break")
                break;
        }
    }



  
    return(trigger) ? (
        <div className="settings bg-white border-2 w-[400px] h-[350px] z-10 border-black rounded-[20px] fixed">
            <div className='inner-settings '>
                <button onClick={() => {
                    setTrigger(() => !trigger)}
                    } className="close-btn border-2 rounded-md px-4 py-1 bg-yellow-300 hover:bg-yellow-400">close</button>

                <form className='setTime w-full flex flex-row mt-[1em] gap-2 '>

                <label className=' w-[33%]'>Pomodor:
                    <input className='border-2 border-black w-full p-0 input rounded-lg text-center ' value={value} onChange={(e) => settingSetter("pomodoro", e)} min="0" type="number" name="pomodor" id='pomodor' />
                </label>

                <label className=' w-[33%]'>Short-Break:
                <input type="number" className='border-2 border-black w-full rounded-lg text-center ' value={value} onChange={(e) => settingSetter("shortBreak", e)} name="shortBreak" id='shortBreak' />
                </label>

                <label className=' w-[33%]' >Long-Break:
                    <input type="number" className='border-2 border-black w-full rounded-lg text-center ' value={value} onChange={(e) => settingSetter("longBreak", e) } name="longBreak" id='longBreak' />
                </label>
                </form>
            </div>
        </div>  
    ) : "";


    
}


export default Settings;