import { useEffect, useState } from "react";
import SlowFetchWithAbort from "./SlowFetchWithAbort";
import SlowFetchWithoutAbort from "./SlowFetchWithoutAbort";

export default function AbortControlerDemo() {
    const[users, setUser] = useState([])
    const[loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        let controller = new AbortController();
        let signal = controller.signal;

        fetch("https://jsonplaceholder.typicode.com/users",{signal})
            .then((result) => result.json())
            .then((data) => {
                setUser(data);
                setLoading(false)
            })
        .catch(error => {
            if(error.name === "Abort error") console.log("Fetch Cancled")
            else console.error("error")
        })    


        return ()=> {
            controller.abort();
        }
        
    },[]);

    if(loading) return <h3>Loading.....</h3>


    return(
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.id} ---- {user.name}</li>
            ))}
        </ul>
    )
}