// function PreviewCard({profile}) {
function PreviewCard(props) {
    return(
        <div style={{
            border : "1px solid black",
            borderRadius : "10px",
            padding : "2px 10px"
        }}>
            <h2>{props.profile.name || "Your Name"}</h2>
            <h2>{props.profile.title || "Job Title"}</h2>
        </div>
    );
}

export default PreviewCard;