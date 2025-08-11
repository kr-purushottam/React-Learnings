import { useEffect, useState } from "react";

export default function TestStopwatch() {


    const[time, setTime] = useState({
        hour : 0,
        minute : 0,
        second : 0, 
        millisec : 0
    })

    const[stop, setStop] = useState(false)

    useEffect(() => {
        let intervalId;
        if(!stop) intervalId = setInterval(handleSecond,10)

        function handleSecond() {
            console.log("Mounting 👋🙋‍♂️")
            setTime((prev) => {
                if(prev.minute === 59 && prev.second === 59 && prev.millisec === 99) {
                    return {
                        hour : prev.hour + 1,
                        minute : 0,
                        second : 0,
                        millisec : 0
                    }
                }

                if(prev.second === 59 && prev.millisec === 99) {
                    return {
                        ...prev,
                        minute : prev.minute + 1,
                        second : 0,
                        millisec : 0
                    }
                }

                if(prev.millisec === 99) {
                    return{
                        ...prev,
                        second : prev.second + 1,
                        millisec : 0
                    }
                }

                return {
                    ...prev,
                    millisec : prev.millisec + 1
                }
            })
        }

        return ()=> clearInterval(intervalId);
    },[stop])

    return(
        <>
            <div 
                style={{display : "flex",  justifyContent : "center", alignItems : "center",   gap : "10px"}}>

                <div id="hour" style={{border : "1px solid black", padding : "5px"}}>
                    <div>{time.hour}</div>
                    <div>Hours</div>
                </div>

                <div id="minute" style={{border : "1px solid black", padding : "5px"}}>
                    <div>{time.minute}</div>
                    <div>Minute</div>
                </div>

                <div id="second" style={{border : "1px solid black", padding : "5px"}}>
                    <div>{time.second}</div>
                    <div>Second</div>
                </div>

                <div id="millisec" style={{border : "1px solid black", padding : "5px"}}>
                    <div>{time.millisec}</div>
                    <div>Milli Sec</div>
                </div>
            </div>

            <button 
                style={{border : "1px solid black", padding : "10px", margin : "10px", cursor : "pointer"}}
                onClick={() => setStop((prev) => !prev)}>Stop
            </button>

            <button 
                style={{border : "1px solid black", padding : "10px", margin : "10px", cursor : "pointer"}}
                onClick={() => setTime((prev) => ({
                    hour : 0,
                    minute : 0,
                    second : 0, 
                    millisec : 0
                }))}>Restart
            </button>
        </>
    );
}