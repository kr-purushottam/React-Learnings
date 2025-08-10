import { useState, useEffect } from "react";
import { OrbitProgress } from "react-loading-indicators";
import axios from "axios";
import '../App.css'

function AxiosUserGrid() {
    const[user, setUser] = useState(null);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState("");

    useEffect(() => {
        async function fetchData() {
            try{
                setLoading(true);
                setError("");

                const response = await axios.get("https://randomuser.me/api/?results=5");
    
                setUser(response.data.results); // array[{} , {}, {}, {}. {}]
            }
            catch(error) {
                setError("Something went Wrong!!!")
            }
            finally{
                setLoading(false);
            }
        }

        fetchData();
    },[])



    return(
        <div>
            {loading && <OrbitProgress color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]} size="medium"/>}

            {error && <div>{error}</div>}

            {user && 
                <div>
                    {user.map((userData, index) => (
                        <div key={index}>
                            <img src={userData?.picture?.large} alt="image.jpg" style={{borderRadius : "50%", objectFit : "center"}}/>
                            <h2>{userData?.name?.first} {userData?.name?.last}</h2>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}

export default AxiosUserGrid;