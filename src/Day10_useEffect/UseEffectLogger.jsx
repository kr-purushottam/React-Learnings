import { useState, useEffect, useMemo } from "react";

// function UseEffectLogger() {
//     const[count, setCount] = useState(0);

//     const myObj = useMemo(()=> ({name : "puru"}),[])

//     useEffect(() => {
//         console.log("Effect ran because myObj is in dependency!!!")
//     },[myObj])
//     return(
//         <>
//             <h3>Count: {count} (check console!)</h3>
//             <button onClick={() => {
//                 setCount(count + 1);
//             }}>Klick Kro!!!</button>

//             <button>mu me choco lelo</button>
//         </>
//     );
// }

// export default UseEffectLogger;

function UseEffectLogger() {
    const[data, setData] = useState({
        count : 0,
        intervalId : null
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setData((prev) => ({
                ...prev,
                count : prev.count + 1
            }));

        },1000)
    },[])


    return(
        <>
            <div>Second Timer : {data.count}</div>
            <button onClick={handleClick}>Stop</button>
        </>
    );
}


export default UseEffectLogger;