const Clock = ({minutes, seconds}) =>{

    const myClock = "hello";

    return(
        <div  className="text-[48px] mt-[0.4em] font-bold ">

            <span id="minutes">{minutes}</span><span id="seconds">:{seconds}</span>
            
        </div>
    )
}

export default Clock;
