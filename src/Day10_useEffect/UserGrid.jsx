import { useEffect, useState } from "react";
import { FourSquare } from "react-loading-indicators";
import "../App.css"

function UserGrid() {
    const[user, setUser] = useState([]);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState("");

    useEffect(() => {
        async function fetchUser() {
            try{
                setLoading(true);
                setError("");

                const response = await fetch("https://randomuser.me/api/?results=5");
                if(!response.ok) throw new Error("API request error")

                const data = await response.json();
                setUser(data.results)
            }
            catch(error) {
                setError("Something went wrong !!!");
                console.error(error);
            }
            finally{
                setLoading(false);
            }
        }
        fetchUser()
        console.log(user)
    },[])

    return(
        <>
            {loading && (<div><FourSquare color="#32cd32" size="medium" text="" textColor="" /><br/></div>)}

            {error && <div style={{color : "red"}}>{error}</div>}

            <div className="grid-container">
                {user.map((user, index)=> (
                    <div key={index} className="card">
                        <img src={user?.picture?.large} alt="profile.jpg"/>
                        <h3>{user.name.first} {user.name.last}</h3>
                    </div>
                ))}
            </div>
        </>
    );
}

export default UserGrid;