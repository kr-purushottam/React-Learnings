import { useState } from "react";

function ErrorHandleFormValidation() {
    const[formData, setFormData] = useState({
        name : "",
        password: "",
        confirmPassword : ""
    })

    const[error, setError] = useState({
        name: "",
        password : "",
        confirmPassword: ""
    });

    const[successMessage, setSuccessMessage] = useState("");

    function handleChange(event) {
        const{name, value} = event.target

        setFormData((prevData) => ({
            ...prevData, 
            [name] : value
        }));

        setError((prevError) => ({
            ...prevError, 
            [name] : ""
        }))

        if(name === "confirmPassword") {
            if(value  && formData.password !== value) {
                setError((prevError) => ({
                    ...prevError, 
                    [name] : "Password Mismatch"
                }))
            }
           else{
                setError((prevError) => ({
                    ...prevError, 
                    [name] : ""
                }))
           }
        }
    }

    function resetForm() {
        setFormData({name : "", password : "", confirmPassword: ""})
        // console.log("resetForm done!!!!!!!!!!!")
    }

    function handleSubmit(event) {
        event.preventDefault();

        let errorsOccured  = {};

        if(formData.name.trim() === "") {
            errorsOccured.name = "Name Field is empty";
        }

        if(formData.password.trim() === "") {
            errorsOccured.password = "Password must be entered"
        }
        else if(formData.password.length < 8) {
            alert("bol bam")
            errorsOccured.password = "Password length must be alteast 8"
        }

        if(formData.confirmPassword.trim() === "") {
            errorsOccured.confirmPassword = "Enter confirm Password" 
        }
        else if(formData.password !== formData.confirmPassword) {
            errorsOccured.confirmPassword = "Password Mismatched !!!"
        }

        if(Object.keys(errorsOccured).length > 0) {
            setError(errorsOccured);
            // alert("Ma chud gyi paaji apki to😨😨😨😫😫")
            resetForm();
            return;
        }
        

        setSuccessMessage(`Welcome ${formData.name} ✌️✌️😎`)
        resetForm();
        setError({name: "", password: "", confirmPassword: ""})

        setTimeout(() => {
            setSuccessMessage("");
        },3000)
    }

    const isValidForm = 
        formData.name.trim() !== "" &&
        formData.password.trim() !== "" &&
        formData.confirmPassword.trim() !== "" &&
        error.name.trim() === "" &&
        error.password.trim() === "" &&
        error.confirmPassword.trim() === "" ;
    
    return(
        <>
            <form onSubmit={handleSubmit}>

                <input
                    style={{marginBottom : "10px"}}
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Enter Name"
                    onChange={handleChange}
                /><br/>
                {error.name && <p style={{color: "red"}}>{error.name}</p>}

                <input
                    style={{marginBottom : "10px"}}
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Enter Password"
                    onChange={handleChange}
                    minLength={8}
                /><br/>
                {error.password && <p style={{color: "red"}}>{error.password}</p>}

                <input
                    style={{marginBottom : "10px"}}
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    minLength={8}
                /><br/>
                    {error.confirmPassword && <p style={{color: "red"}}>{error.confirmPassword}</p>}
                <br/>

                <button 
                    disabled={!isValidForm}
                    type="submit" 
                    style={{
                        backgroundColor : (isValidForm)? "blue" : "grey",
                        cursor : (isValidForm)? "pointer" : "not-allowed"
                    }}>Submit
                </button>
            </form>

            {successMessage && <div style={{marginTop: "20px", color: "green", fontWeight : "bold" }}>{successMessage}</div>}
        </>
        

        
    );
}


export default ErrorHandleFormValidation