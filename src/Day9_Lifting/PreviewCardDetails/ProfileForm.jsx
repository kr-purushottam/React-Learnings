// function ProfileForm({profile, setProfile}) {
function ProfileForm(props) {


    function handleChange(event) {
        const{name, value} = event.target;
        props.setProfile((prevData) => ({
            ...prevData,
            [name] : value
        }))
    }
    
    return(
        <>
            <form>
                <input
                    name="name"
                    type="text"
                    placeholder="Enter Your Name..."
                    value={props.profile.name}
                    onChange={handleChange}
                /><br/>

                <input
                    name="title"
                    type="text"
                    placeholder="Enter Job title..."
                    value={props.profile.title}
                    onChange={handleChange}
                />
            </form>
        </>
    );
}

export default ProfileForm;