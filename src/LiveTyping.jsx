import {  useState } from "react";

function LiveTyping() {
    const[text, setText] = useState("");


    function handleChange(event) {
        setText(event.target.value);
    }
    return(
        <div >
            <input
                type="text"
                value={text}
                placeholder="Type here..."
                onChange={handleChange}
            />

            <div>You typed : {text}</div>
            <div>Length is : {text.length}</div>
        </div>
    );
}

export default LiveTyping;