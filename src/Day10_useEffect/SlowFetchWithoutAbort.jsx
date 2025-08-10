import { useEffect, useState } from "react";

export default function SlowFetchWithoutAbort() {
    const[user, setUser] = useState([]);

    useEffect(() => {
        console.log("started.....")
        fetch("https://hub.dummyapis.com/delay?seconds=5")
            .then(() => fetch("https://jsonplaceholder.typicode.com/users"))
            .then((res) => res.json())
            .then((data) => {
                console.log("setting data")
                setUser(data);
            })
        // .catch(error => {
        //     console.error("error is ---- > " , error)
        // })
    },[])

    return(
        <>
            <h2>List of users : </h2>
            <ul>
            {
                user.map((indiUser) => (
                    <li key={indiUser.id}>{indiUser.id} ----- {indiUser.name}</li>
                ))
            }
            </ul>
        </>
        
    );
}


