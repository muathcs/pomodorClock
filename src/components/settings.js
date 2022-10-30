import react, {useState} from 'react'


import check from "./Actions"
import startClock from "./Actions" 
import setUpClock from "./Actions"
import Actions from './Actions'

function Settings({timer, pomodorTimer, shortBreak, longBreak, children, setSeconds, setMinutes, setTrigger, trigger, setPomodorTimer, setShortBreak, setLongBreak, breakTime, setBreakTime}){


    const [pomodorInput, setPomodorInput] = useState('');
    const [shortBreakInput, setShortBreakInput] = useState('');
    const [longBreakInput, setLongBreakInput] = useState('');
    const [BreakInput, setBreakInput] = useState('');


    function close(){

        // startClock(timer);
        // setUpClock(timer);
        setTrigger(false);
    }

    function pomodor(e){
        setPomodorInput(e.target.value);
        setPomodorTimer(e.target.value)
        pomodorTimer = e.target.value;
        timer.current = e.target.value * 60;
        setSeconds("00");


    }

    function shortBreakSet(e){
        setShortBreakInput(e.target.value);
        shortBreak = e.target.value;
        setShortBreak(e.target.value)
        timer.current = e.target.value * 60;
        setSeconds("00");

    }

    function longBreakSet(e){
        setLongBreakInput(e.target.value);
        setLongBreak(e.target.value)
        longBreak = e.target.value;
        timer.current = e.target.value * 60;
        setSeconds("00");

    }





    return(trigger) ? (
        <div className="settings">
            <div className='inner-settings'>
                <button onClick={() => close()} className="close-btn">close</button>
                {children}

                <form className='setTime'>

                <label>Pomodor:
                    <input value={pomodorInput} onChange={(e) => pomodor(e)} min="0" type="number" name="pomodor" id='pomodor' />
                </label>

                <label>Short-Break:
                <input type="number" value={shortBreakInput} onChange={(e) => {
                    shortBreakSet(e)
                }} name="shortBreak" id='shortBreak' />
                </label>

                <label>Long-Break:
                    <input type="number" value={longBreakInput} onChange={(e) => {
                        longBreakSet(e)}} name="longBreak" id='longBreak' />
                </label>
                </form>
            </div>
        </div>  
    ) : "";


    
}


export default Settings;