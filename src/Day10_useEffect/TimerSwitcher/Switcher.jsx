import { useState } from "react";
import Timer from "./Timer";

export default function Switcher() {
    const[display, setDisplay] = useState(false);

    return(
        <>
            <button onClick={() => {
                setDisplay(!display)
                }} 
                style={{border : "1px solid black", padding : "10px", cursor: "pointer"}}>
                {display ? "Stop Timer" : "Start Timer"}
            </button>

            {display && <Timer/>}
        </>
    );
}