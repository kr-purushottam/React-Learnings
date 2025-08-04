import { useState, useEffect } from "react";

function Tracker() {
    const[count, setCount] = useState(0);
    console.log("😎 Rendered");
    
    // useEffect(() => {
    //     console.log("✅ useEffect ran: count is", count);

    //     return () => {
    //         console.log("🧹 Cleaning up: previous count was", count);
    //     }
    // });

    useEffect(() => {
        console.log("🔥 Count is now", count);
        return () => {
            console.log("💧 Cleaning... Count was", count);
        };
    });


    return(
        <>
            <button onClick={()=> setCount(count + 1)}>+1</button>
            <div>Count : {count}</div>
        </>
    );
}

export default Tracker;