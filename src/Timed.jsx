import { useEffect } from "react";

function Timed() {

    useEffect(() => {
        console.log("🟢 Timer Mounted");

        return () => {
            console.log("🔴 Timer Unmounted (cleanup ran)");
        };
    },[])

    return <h2>⏱️ Timer is Active</h2>
}

export default Timed;