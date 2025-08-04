import { useState } from "react";
import ProfileForm from "./ProfileForm";
import PreviewCard from "./PreviewCard";

function QuickProfilePreview() {
    const[profile, setProfile] = useState({
        name: "",
        title: ""
    })

    return(
        <div style={{
            display : "flex",
            gap : "10px"
        }}>
            <ProfileForm profile={profile} setProfile={setProfile} />
            <PreviewCard profile={profile}/>
        </div>
    );
}

export default QuickProfilePreview;