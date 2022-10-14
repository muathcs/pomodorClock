import react, {useState} from 'react'


import check from "./Actions"
import startClock from "./Actions" 
import setUpClock from "./Actions"
import Actions from './Actions'

function Settings({timer, pomodorTimer, shortBreak, longBreak, children, setSeconds, setMinutes, setTrigger, trigger, setPomodorTimer, setShortBreak, setLongBreak}){


    const [pomodorInput, setPomodorInput] = useState('');
    const [shortBreakInput, setShortBreakInput] = useState('');
    const [longBreakInput, setLongBreakInput] = useState('');


    function close(){

        startClock(timer);
        setUpClock(timer);
        setTrigger(false);
    }

    function pomodor(e){
        console.log("xx", e.target.value);
        setPomodorInput(e.target.value);
        setPomodorTimer(e.target.value)
        pomodorTimer = e.target.value;
        timer.current = e.target.value * 60;
        // clearInterval(start.current);
        setMinutes(pomodorTimer);
        setSeconds("00");
        setUpClock("pomodor")


    }

    function shortBreakSet(e){
        setShortBreakInput(e.target.value);
        shortBreak = e.target.value;
        setShortBreak(e.target.value)
        timer.current = e.target.value * 60;
        setMinutes(shortBreak);
        setSeconds("00");
        setUpClock("shortbreak")

    }

    function longBreakSet(e){
        setLongBreakInput(e.target.value);
        setLongBreak(e.target.value)
        longBreak = e.target.value;
        timer.current = e.target.value * 60;
        setMinutes(longBreak);
        setSeconds("00");
        setUpClock("longBreak")

    }

    return(trigger) ? (
        <div className="settings">
            <div className='inner-settings'>
                <button onClick={() => close()} className="close-btn">close</button>
                {children}

                <form className='setTime'>

                <label>Pomodor:
                    <input value={pomodorInput} onChange={(e) => pomodor(e)} type="number" name="pomodor" id='pomodor' />
                </label>

                <label>Short-Break:
                <input type="number" value={shortBreakInput} onChange={(e) => shortBreakSet(e)} name="shortBreak" id='shortBreak' />
                </label>

                <label>Long-Break:
                    <input type="number" value={longBreakInput} onChange={(e) => longBreakSet(e)} name="longBreak" id='longBreak' />
                </label>
                </form>
            </div>
        </div>  
    ) : "";


    
}


export default Settings;