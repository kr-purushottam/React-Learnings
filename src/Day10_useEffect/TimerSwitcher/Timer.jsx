import { useState, useEffect } from "react";

export default function Timer() {
    const[count, setCount] = useState(0);
    const[speed, setSpeed] = useState(1000);
    const[isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        console.log("Timer Mounted Successfully")
        let timerId;
        if(!isPaused) {
            timerId = setInterval(() => {
            setCount((prev) => prev + 1);
            },speed)
        }
        
        return ()=> {
            clearInterval(timerId);
            console.log("Timer cleaned up")
        }
    },[speed,isPaused])



    return(
        <div style={{display : "flex", flexDirection : "column", alignItems : "center", justifyContent: "center", gap : "5px"}}>
            <div>count : {count}</div>

            <label>
                Speed : {}
                <select 
                    style={{border : "1px solid black", marginTop: "10px"}}
                    onChange={(event) => setSpeed(Number(event.target.value))}>
                        <option value={1000}>1sec</option>
                        <option value={500}>0.5sec</option>
                        <option value={2000}>2sec</option>
                </select>
            </label>

            <div 
                style={{border : "1px solid black", marginTop: "10px", cursor: "pointer"}}
                onClick={() => setIsPaused((prev) => !prev)}>
                {isPaused ? "Resume" : "Pause"}
            </div>
            
            
            {/* <button onClick={handleClick} style={{border : "1px solid black", padding : "10px", marginRight : "10px"}}>Resume</button> 
            <button onClick={handleClick} style={{border : "1px solid black", padding : "10px"}}>Pause</button> */}
        </div>
    );
}