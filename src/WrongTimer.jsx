import { useState } from "react";

function WrongTimer() {
    const[count, setCount] = useState(0);

    function handleClick() {
        // setTimeout(()=> {
        //     console.log("count no: 1 = " + count)
        //     setCount(count + 1);
        //     console.log("count no: 2 = " + count)
        //     setCount(count + 100);
        //     console.log("count no: 3 = " + count)
        //     setCount(count + 1);
        //     console.log("count no: 4 = " + count)
        // },3000);

        setTimeout(() => {
            console.log("count no: 1 = " + count)
            setCount((prev) => prev + 2);
            console.log("count no: 1 = " + count)
            setCount((prev) => prev + 3);
            console.log("count no: 1 = " + count)
            setCount((prev) => prev + 5);
            console.log("count no: 1 = " + count)

        },3000)
    }
    return(
        <>
            <button onClick={handleClick}>Add Later</button>
            <div>count: {count}</div>
        </>
    );
}

export default WrongTimer;