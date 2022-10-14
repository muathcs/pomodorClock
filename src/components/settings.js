import react, {useState} from 'react'

function Settings(props){


    const [input, setInput] = useState(props?.value ?? '')

    function close(){
        props.setTrigger(false);
    }

    function log(e){
        console.log(e.target.value);
        setInput(e.target.value);
        props.timer.current = e.target.value * 60;

    }
    return(props.trigger) ? (
        <div className="settings">
            <div className='inner-settings'>
                <button onClick={() => close()} className="close-btn">close</button>
                {props.children}

                <form className='setTime'>

                <label>Pomodor:
                    <input value={input} onChange={(e) => log(e)} type="number" name="pomodor" id='pomodor' />
                </label>

                <label>Short-Break:
                <input type="number" name="shortBreak" />
                </label>

                <label>Long-Break:
                    <input type="number" name="longBreak" />
                </label>
                </form>
            </div>
        </div>  
    ) : "";


    
}


export default Settings;