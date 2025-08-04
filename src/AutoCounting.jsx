import { useEffect, useState, useRef } from "react";

function AutoCounting() {
    const[count, setCount] = useState(0);
    const intervalId = useRef(null);

    useEffect(() => {
        startCounting();

        return()=> clearInterval(intervalRef.current);
    },[])

    function stopCounting() {
        clearInterval(intervalId.current)
        intervalId.current = null;
    }

    function startCounting() {
        if(intervalId.current) return;

        intervalId.current = setInterval(() => {
            setCount((prev) => {
                let res = prev + 1;
                if(res === 10) {
                    stopCounting();
                    return res;
                }
                return res;
            });
        },1000)
    }

    return(
        <>
            <div>count : {count}</div>
            <button onClick={startCounting}>Start Counting</button>
            <button onClick={stopCounting}>Stop Counting</button>
        </>
    );
}

export default AutoCounting;