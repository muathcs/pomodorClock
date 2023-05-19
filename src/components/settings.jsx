import react, {useState} from 'react'
import { useReducer } from 'react'


import check from "./Actions"
import startClock from "./Actions" 
import setUpClock from "./Actions"
import Actions from './Actions'

let value;
function reducer(state, action, e){
    // console.log(action);
    // console.log(action.target.value)
    // let input = action;
    switch(action.type){
        case 'pomodoro':
            state.setPomodorTimer(action.e.target.value);
            state.timer.current = action.e.target.value * 60;
            state.setPomodorTimer(action.e.target.value);
            state.pomodorTimer = action.e.target.value;
            state.setSeconds("00");
            return state;

        case 'shortBreak':
            state.setShortBreak(action.e.target.value);
            state.timer.current = action.e.target.value * 60;
            state.setShortBreak(action.e.target.value);
            state.shortBreak = action.e.target.value;
            state.setSeconds("00");
            return state;

        case 'longBreak':
            state.setLongBreak(action.e.target.value);
            state.timer.current = action.e.target.value * 60;
            state.setLongBreak(action.e.target.value);
            state.shortBreak = action.e.target.value;
            state.setSeconds("00");
            return state;

    }

}

function Settings({timer, pomodorTimer, shortBreak, longBreak, children, setSeconds, setMinutes, setTrigger, trigger, setPomodorTimer, setShortBreak, setLongBreak, breakTime, ToggleState}){

    const [pomodorInput, setPomodorInput] = useState('');
    const [shortBreakInput, setShortBreakInput] = useState('');
    const [longBreakInput, setLongBreakInput] = useState('');
    const [BreakInput, setBreakInput] = useState('');
    // setPomodorTimer(30);
    const initialState = {
        pomodorTimer:pomodorTimer,
        setPomodorTimer:setPomodorTimer,
        shortBreak:shortBreak,
        setShortBreak:setShortBreak,
        longBreak:longBreak,
        setLongBreak:setLongBreak,
        timer:timer,
        setSeconds:setSeconds
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    // console.log("toggle", ToggleState)
    function close(){

        // startClock(timer);
        // setUpClock(timer);
        setTrigger(false);

        switch (ToggleState){
            case 1:
                setMinutes(pomodorTimer);
                break;
            case 2:
                setMinutes(shortBreak);
                break;
            case 3:
                setMinutes(longBreak);
                break

        }
    }

    // function pomodor(e){
    //     setPomodorInput(e.target.value);
    //     setPomodorTimer(e.target.value)
    //     pomodorTimer = e.target.value;
    //     timer.current = e.target.value * 60;
    //     setSeconds("00");


    // }

    // function shortBreakSet(e){
    //     setShortBreakInput(e.target.value);
    //     shortBreak = e.target.value;
    //     setShortBreak(e.target.value)
    //     timer.current = e.target.value * 60;
    //     setSeconds("00");
    // }

    // function longBreakSet(e){
    //     setLongBreakInput(e.target.value);
    //     setLongBreak(e.target.value)
    //     longBreak = e.target.value;
    //     timer.current = e.target.value * 60;
    //     setSeconds("00");

    // }

    return(trigger) ? (
        <div className="settings bg-white border-2 w-[400px] h-[350px] z-10 border-black rounded-[20px] fixed">
            <div className='inner-settings '>
                <button onClick={() => close()} className="close-btn border-2 rounded-md px-4 py-1 bg-green-300 hover:bg-green-400">close</button>
                {children}

                <form className='setTime w-full flex flex-row mt-[1em] gap-2 '>

                <label className=' w-[33%]'>Pomodor:
                    <input className='border-2 border-black w-full p-0 input rounded-lg text-center ' value={value} onChange={(e) => dispatch({type: "pomodoro", e})} min="0" type="number" name="pomodor" id='pomodor' />
                </label>

                <label className=' w-[33%]'>Short-Break:
                <input type="number" className='border-2 border-black w-full rounded-lg' value={value} onChange={(e) => {dispatch({type: "shortBreak", e})}} name="shortBreak" id='shortBreak' />
                </label>

                <label className=' w-[33%]' >Long-Break:
                    <input type="number" className='border-2 border-black w-full rounded-lg' value={value} onChange={(e) => {dispatch({type: "longBreak", e})}} name="longBreak" id='longBreak' />
                </label>
                </form>
            </div>
        </div>  
    ) : "";


    
}


export default Settings;