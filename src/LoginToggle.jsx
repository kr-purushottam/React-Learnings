import { useState } from "react";

function LoginToggle() {
    const[toggle, setToggle] = useState(false);

    function toggleLogin() {
        setToggle(!toggle);
    }


    return(
        <>
            <button onClick={toggleLogin}>
            {toggle ? "Log out" : "Login Pleaseeeeeeeee"}
            </button>

            {toggle && <h2>Welcome, Puru!!</h2>}

            <h2>{toggle ? "Your are sucessfully login" : "madharchod login kro"}</h2>
        </>
        
    );
}

export default LoginToggle


// import { useState } from "react";

// function LoginToggle() {
//   const [loggedIn, setLoggedIn] = useState(false);

//   function toggleLogin() {
//     setLoggedIn(!loggedIn);
//   }

//   return (
//     <div style={{ textAlign: "center", marginTop: "40px" }}>
//       <button onClick={toggleLogin}>
//         {loggedIn ? "Log Out" : "Log In"}
//       </button>

//       {/* Method 1: && */}
//       {loggedIn && <h2>Welcome, Puru!</h2>}

//       {/* Method 2: Ternary */}
//       {/* <h2>{loggedIn ? "Welcome, Puru!" : "Please Log in"}</h2> */}
//     </div>
//   );
// }

// export default LoginToggle;
