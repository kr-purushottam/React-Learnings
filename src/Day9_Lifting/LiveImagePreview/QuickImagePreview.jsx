import { useState } from "react";
import ImageInput from "./ImageInput";
import ImagePreview from "./ImagePreview";

function QuickImagePreview() {
    const[profile, setProfile] = useState({
        name: "",
        title : "",
        image: "",
        isDarkMode : false
    })

    function handleReset() {
        setProfile({
            name: "",
            title : "",
            image: "",
            isDarkMode : false
        })
    }

    return(
        <div style={{
            display : "flex",
            gap : "10px"
        }}>
            <ImageInput profileProp = {profile} setProfile = {setProfile}/>
            {/* <ImagePreview profile = {profile} setProfile = {setProfile}/> */}
            <ImagePreview profile = {profile} onReset = {handleReset}/>
        </div>
    );
}

export default QuickImagePreview