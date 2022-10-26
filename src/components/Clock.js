const Clock = ({minutes, seconds}) =>{

    const myClock = "hello";

    return(
        <div id="clock">

            <span id="minutes">{minutes}</span><span id="seconds">:{seconds}</span>
            
        </div>
    )
}

export default Clock;
