

const TopBar = ({setMinutes, timer, setSeconds, start, setClockType}) => {





    function pomodor(){
        clearInterval(start.current);
        setMinutes("30");
        setSeconds("00");
        timer.current = 30 * 60;
        setClockType("pomodor");


    }

    function shortBreak(){
        clearInterval(start.current);
        setMinutes("05");
        setSeconds("00");
        timer.current = 5 * 60;
        setClockType("shortbreak");

    }
    
    function longBreak(){
        clearInterval(start.current);
        setMinutes("10");
        setSeconds("00");
        timer.current = 10 * 60;
        setClockType("longbreak");


    }
    return(
        <div>
           <div className="top-div">
                <button onClick={pomodor}>Pomodor</button>
                <button onClick={shortBreak}>Short Break</button>
                <button onClick={longBreak}>Long Long Break</button>
           </div>
        </div>
    )
}

export default TopBar;