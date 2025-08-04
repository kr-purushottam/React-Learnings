import { useState } from "react";

function EmailValidation() {
    const[formData, setFormData] = useState({
        name: "",
        password : "",
        confirmPassword : ""
    })

    function handleChange(event) {
        const{name, value} = event.target;
        setFormData((prevData) => ({...prevData, [name] : value}))
    }

    function resetForm() {
        setFormData({name: "", password: "", confirmPassword: ""});
    }

    function handleSubmit(event) {
        event.preventDefault();

        if(formData.name.trim() === "" || formData.password.trim() === "") {
            alert("Fill the fields");
            resetForm();
            return;
        }

        if(formData.password.length < 8) {
            alert("Minimun length of password should be 8");
            resetForm();
            return;
        }

        if(formData.password !== formData.confirmPassword) {
            alert("Password Not Matched !!😫😫😨");
            resetForm();
            return;
        }

        alert(`Welcome ${formData.name} ❤️😘😘`)
        resetForm();
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                style={{ marginRight: "10px" }} 
            />

            <input
                type="password"
                name="password"
                minLength={8}
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                style={{ marginRight: "10px" }}
            />

            <input
                type="password"
                name="confirmPassword"
                minLength={8}
                placeholder="Re-enter Your Password"
                value={formData.confirmPassword}
                onChange={handleChange}
            />

            <button type="submit">Submit</button>

            <div>Your name is : {formData.name}</div>
            <div>Your Password is : {formData.password}</div>
        </form>
    );
}

export default EmailValidation;