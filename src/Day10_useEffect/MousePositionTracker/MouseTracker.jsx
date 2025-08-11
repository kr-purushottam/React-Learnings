import { useEffect, useState } from "react";


export default function MouseTracker() {
    const[pos, setPos] = useState({
        x : 0,
        y : 0
    })

    const[enabled, setEnabled] = useState(true)
    useEffect(() => {
        function handleCoordinate(event) {
            console.log("effect : add mouse move")
            setPos({x : event.clientX, y : event.clientY})
        }

        if(enabled) window.addEventListener('mousemove', handleCoordinate);

        return() => {
            console.log("cleanup: remove mousemove");
            window.removeEventListener('mousemove', handleCoordinate);
        }
    },[enabled])


    return(
        <div>   
            <button 
                onClick={() => setEnabled(!enabled)}
                style={{border : "1px solid black", padding : "10px"}}>
                {enabled ? "Disable Tracking" :"Enable Tracking"}
            </button>
            <h3>Mouse Tracking</h3>
            <div>X cordination : {pos.x} &nbsp; Y cordination : {pos.y}</div>
        </div>
    );
}