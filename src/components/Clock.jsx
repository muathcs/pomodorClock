import { useSelector } from "react-redux";

const Clock = ({minutes, seconds}) =>{

    const {seconds: secs, minutes: mins} = useSelector((state) => state.timer);

    const myClock = "hello";

    return(
        <div  className="text-[48px] mt-[0.4em] font-bold ">

            <span id="minutes">{mins}</span><span id="seconds">:{secs}</span>
            
        </div>
    )
}

export default Clock;
