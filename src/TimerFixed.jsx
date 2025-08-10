import { useState } from "react";

function TimerFixed() {
    const[count, setCount] = useState(0);
    
    function handleClick() {
        console.log("Before setTimeout, count is g: ", count);
        
        // setTimeout(()=> {
        //     console.log("After setTimeout, count is : ", count);
        //     setCount(count + 1);
        // },3000)


        setTimeout(()=> {
            setCount((prev) => {
                console.log("After setTimeout, count is g: ", prev);
                return prev + 1;
            })
        },3000)
    }

    return(
        <div>
            <button onClick={handleClick}>Add Later for magic</button>
            <div>Count : {count}</div>
        </div>
    );
}

export default TimerFixed;