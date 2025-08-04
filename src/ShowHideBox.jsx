import { useState } from "react";

function ShowHideBox() {
    const[boxVisibility, setBoxVisibility] = useState(false);

    function visibilityHandler() {
        setBoxVisibility(!boxVisibility);
    }
    
    return(
        <div>
            <button onClick={visibilityHandler}>box Visibility is {boxVisibility ? "On" : "Off"}</button>
            {boxVisibility && <div style={{width:100, height:100, background:"skyblue"}}>visible box</div>}
            {boxVisibility || <p>Box is hidden</p>}

        </div>
    );
}

export default ShowHideBox