function ImageInput({profileProp, setProfile}) {

    function handleChange(event) {
        const{name, value} = event.target;
        setProfile((prevData)=> ({
            ...prevData,
            [name] : value
        }))
    }

    return(
        <form>
            <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={profileProp.name}
                onChange={handleChange}
                autoComplete="off"
            /><br/>

            <input
                type="text"
                name="title"
                placeholder="Enter job Title"
                value={profileProp.title}
                onChange={handleChange}
                autoComplete="off"
            /><br/>

            <input
                type="text"
                name="image"
                placeholder="Enter link for preview"
                value={profileProp.image}
                onChange={handleChange}
            /> <br/>

            {/* <input type="checkbox" name="darkMode" id="darkMode"/>
            <label for="darkMode">Enable DarkMode</label> */}

            <label>
                <input 
                    type="checkbox" 
                    name="darkMode"
                    value={profileProp.isDarkMode}
                    onChange={(event) => {(
                        setProfile((prevData) => ({
                            ...prevData,
                            isDarkMode : event.target.checked
                        }))
                    )}}
                />Enable DarkMode
            </label>
            

        </form>
    );
}

export default ImageInput;