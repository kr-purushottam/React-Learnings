import { useState } from "react";

function QuickRegisterForm() {
    const[formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const[errors, setErrors] = useState({
        name: "",
        email: "",
        password: ""
    })

    const[successMsg, setSuccessMsg] = useState("");

    function handleChange(event) {
        const{name, value} = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name] : value
        }))

        setErrors((prevError) => ({
            ...prevError,
            [name] : ""
        }))

    }

    function resetForm() {
        setFormData({name: "", email: "", password: ""});
    }

    function handleSubmit(event) {
        event.preventDefault();

        let tempError = {};

        if(formData.name.trim() === "") {
            tempError.name = "Name field should not be empty"
        }

        if(formData.email.trim() === "") {
            tempError.email = "Email field should not be empty"
        }
        else if(!(formData.email.trim().includes("@"))) {
            tempError.email = `Email field must contain '@'`
        }

        if(formData.password === "") {
            tempError.password = "Password field should not be empty"
        }
        else if(formData.password.length < 6) {
            tempError.password = "Minimum password length of 6 digit"
        }

        if(Object.keys(tempError).length > 0) {
            setErrors(tempError);
            return
        }

        setSuccessMsg(`Welcome back ${formData.name} ✌️✌️😎`)
        setTimeout(() => {
            setSuccessMsg("");
        },3000)
        resetForm();
        setErrors({name: "", email: "", password: ""});
    }

    const isValidForm = formData.name.trim() !== "" && 
        formData.email.trim() !== "" &&
        formData.email.includes("@") &&
        formData.password.trim() !== "" &&
        formData.password.length > 5 &&
        !errors.name &&
        !errors.email &&
        !errors.password

    return(
        <>

            {successMsg && <div style={{color: "green", fontWeight: "bold", marginTop: "20px", fontSize: "1rem"}}>{successMsg}</div>}


            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {formData.name.trim() !== "" && <div>✅</div>}
                <br/>
                {errors.name && <p style={{margin : "10px 10px", color: "red"}}>{errors.name}</p>}

                <input
                    type="text"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {(formData.email.trim() && formData.email.includes("@")) && <div>✅</div>}
                <br/>
                {errors.email && <p style={{margin : "10px 10px", color: "red"}}>{errors.email}</p>}

                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                    minLength={6}
                />
                {(formData.password.trim() && formData.password.length >= 6) && <div>✅</div>}
                <br/>
                <br/>
                {errors.password && <p style={{margin : "10px 10px", color: "red"}}>{errors.password}</p>}

                <button 
                type="submit"
                disabled={!isValidForm}
                style={{
                    backgroundColor : (isValidForm) ? "blue" : "grey",
                    cursor : (isValidForm)? "pointer" : "not-allowed"
                }}
                >Submit</button>
            </form>

           
        </>
    );
}

export default QuickRegisterForm;