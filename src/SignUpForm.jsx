import { useState } from "react";
import InputField from "./InputField";

function SignUpForm() {
    const[formData, setFormData] = useState({
        name: "",
        email: ""
    })

    function handleChange(event) {
        // const naam = event.target.name;
        // const value = event.target.value;
        const{name, value} = event.target;

        setFormData((prev) => ({...prev, [name] : value}))
    }


    function 
    handleSubmit(event) {
        event.preventDefault();
        //FORM VALIDATION
        if(formData.name.trim() === "" || formData.email.trim() === "") {
            alert("Enter both name and email")
            setFormData({name : "", email : ""})
            return;
        }
        alert("Form is submitted Sucessfully.✌️😎")
        setFormData({name : "", email : ""})
    }


    return(

        <form onSubmit={handleSubmit}>

            <InputField
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
            />
            {/* <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
            /> */}

            <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
            />

            <button type="submit">Submit</button>
        </form>
        
    );
}

export default SignUpForm