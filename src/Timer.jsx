import { useEffect, useState, useRef } from "react";

function Timer() {
    const[count, setCount] = useState(0);
    const validInterval = useRef(null);

    useEffect(()=> {
        console.log("Time Started");
        
        return(()=> {
            console.log("Timer has been stoped.")
        })

    },[])

    // let validInterval;
    // function clickHandler() {
    //     validInterval = setInterval(() => {
    //         setCount((prev) => prev + 1);
    //     },1000)
    // }

    // function endCounting() {
    //     clearInterval(validInterval);
    // }

    function clickHandler() {
        if(validInterval.current) return;

        validInterval.current = setInterval(() => {
            setCount((prev) => prev + 1);
        },1000)
    }

    function endCounting() {
        clearInterval(validInterval.current);
        validInterval.current = null;
    }


    return(
        <>
            <button onClick={clickHandler}>Start Counting</button>
            <div>count is {count}</div>
            <button onClick={endCounting}>Stop Timer</button>
        </>
    );
}

export default Timer;