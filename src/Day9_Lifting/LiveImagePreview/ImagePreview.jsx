function ImagePreview({profile, onReset }) {

    const cardStyle = {
        backgroundColor: profile.isDarkMode ? "#333" : "#f9f9f9",
        color: profile.isDarkMode ? "#fff" : "#000",
        padding: "20px",
        borderRadius: "8px",
        maxWidth: "200px",
        transition: "0.3s"
    };

    return(
        <div style={cardStyle}>
            <h2>{profile.name || "Your Name"}</h2>
            <h2>{profile.title || "Job Tilte"}</h2>
            <div>{(profile.image && <img style={{height : "300px", width: "300px" , objectFit: "cover", borderRadius: "8px", marginBottom: "10px"}} src={profile.image}/>) || "Image Preview"}</div>

            {/* <div>{(profile.image) ? <img style={{height : "250px", width: "375px"}} src={profile.image}/> : "Image Preview"}</div> */}

            {/* <button 
                onClick={() => {setProfile({
                    name : "",
                    title : "",
                    image: "",
                    isDarkMode : false
                })}}
            >🔁</button> */}

            <button onClick={onReset}>🔁</button>
        </div>
    );
}

export default ImagePreview;