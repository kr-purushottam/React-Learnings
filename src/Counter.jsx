import { useState } from "react";

// function Counter() {
//     const[count, setCount] = useState(0);
//     for(let i = 0; i < 3; i++){
//         console.log("this if for testing count : " + (count + i));
//     }

//     return(
//         <div>
//             <div>Count : {count}</div>
//             <button onClick={() => setCount(count + 1)}> + </button>
//             <button onClick={() => setCount(count - 1)}> - </button>
//             <button onClick={() => setCount(0)}>🔄</button>
//         </div>
//     );
// }





function Counter() {
    const[count, setCount] = useState(0);
    const handleClick = ()=> {
        setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        console.log("count is : " + count);
    }


    return(
        <div>
            <button onClick={handleClick}>Add</button>
            <div>count is : {count}</div>
        </div>
        

    );
}



export default Counter;