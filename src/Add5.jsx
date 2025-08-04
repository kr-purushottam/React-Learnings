import { useState } from "react";

function Add5() {
    const[count, SetCount] = useState(0);
    function addition() {
        // SetCount(count + 2);
        // SetCount(count + 2);
        // SetCount(count + 1);

        SetCount((prev)=> prev + 2);
        SetCount((prev)=> prev + 2);
        SetCount((prev)=> prev + 1);
    }
    return(
        <>
            <button onClick={addition}>Add5</button>
            <div>count : {count}</div>
        </>
    );
}

export default Add5