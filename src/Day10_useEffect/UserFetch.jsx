import { useEffect, useState } from "react";
import { FourSquare } from "react-loading-indicators";
function UserFetch() {

    const[data, setData] = useState(null)
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState("")

    useEffect(()=> {
      handleClick()
    },[])

    async function handleClick() {
        try{
            setLoading(true);
            setError("");
            const response = await fetch("https://randomuser.me/api");

            if(!response.ok){
                throw new Error("API request failed");
                
            }

            const personData = await response.json();
            
            setData({
                name : `${personData?.results[0]?.name.first} ${personData?.results[0]?.name.last}`,
                picture : personData?.results[0]?.picture.large
            })
            
        }
        catch(error) {
            setError("Something went wrong")
            console.log("error is ", error);
        }
        finally{
            setLoading(false);
        }
    }

    return(
        <>
          <button onClick={handleClick}>
                Click here for new User !!!
          </button>

          {loading && (<div><FourSquare color="#32cd32" size="medium" text="" textColor="" /><br/></div>)}

          {error && <div style={{color : "red"}}>{error}</div>}

          {data && 
            (<div style={{margin : "20px 0px"}}>
              <img src={data.picture} alt="img.png" style={{ border : "1px solid cyan", borderRadius : "50%"}}/>
              <div style={{fontSize:"1rem", fontWeight:"bold"}}>{data.name}</div>
            </div>)
          }
        </>
    );
}

export default UserFetch




// import { useEffect, useState } from "react";

// function UserFetcher() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   async function fetchUser() {
//     try {
//       setLoading(true);
//       setError("");

//       const res = await fetch("https://randomuser.me/api/");
//       if (!res.ok) throw new Error("API request failed");

//       const data = await res.json();
//       const userData = data.results[0];

//       setUser({
//         name: `${userData.name.first} ${userData.name.last}`,
//         image: userData.picture.large
//       });
//     } catch (err) {
//       setError("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div style={{ textAlign: "center", marginTop: "40px" }}>
//       <button onClick={fetchUser}>Get Random User</button>

//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {user && (
//         <div style={{ marginTop: "20px" }}>
//           <img src={user.image} alt="User" style={{ borderRadius: "50%" }} />
//           <h3>{user.name}</h3>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UserFetcher;
