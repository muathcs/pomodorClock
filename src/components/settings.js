import react from 'react'

function Settings(props){

    console.log("trgger", props.useTrigger)

    function close(){
        props.setTrigger(false);
    }
    return(props.trigger) ? (
        <div className="settings">
            <div className='inner-settings'>
                <button onClick={close} className="close-btn">close</button>
                {props.children}

                <form className='setTime'>

                <label>Pomodor:
                    <input type="number" name="pomodor" />
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