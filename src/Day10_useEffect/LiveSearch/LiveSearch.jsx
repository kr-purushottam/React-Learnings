import { useEffect, useState } from "react";

export default function LiveSearch() {
    const[result, setResult] = useState([]);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState("");
    const[query, setQuery] = useState("");

    useEffect(() => { 
        //WHEN INPUT IS BLANK
        if(query.trim() === "") {
            setLoading(false);
            setError("");
            setResult([]);
            return;
        };
        
        let controller;
        const debounceTimeout = setTimeout(handleApi, 1000);

        async function handleApi() {
                controller = new AbortController();
                // console.log(controller)
                const {signal} = controller;
            try{  
                console.log("Mounting started checha ⏳⏳⏳")
                setLoading(true);
                setError("");
                const responce = await fetch(`https://dummyjson.com/users/search?q=${encodeURIComponent(query)}`,{signal})
                if(!responce.ok) {
                    throw new Error(`HTTP ${responce.status} ${responce.statusText}`);
                }
                const res = await responce.json();
                setResult(res.users)
            }
            catch(error) {
                if (error.name === "AbortError") {
                   return;
                }
                console.error(error);
                setError(error.message || "API not working");
            }
            finally {
                setLoading(false)
                
            }
        }
        return ()=> {
                console.log("unmounting checha 🙁🙁🙁🙁")
                clearTimeout(debounceTimeout);
                if(controller) controller.abort();
            }
    },[query])
    // function handleChange(event) {
    //     event.preventDefault()
    //     setQuery((event.target.value).trim())
    //     setLoading(true);
    //     setError("");
    //     fetch(`https://dummyjson.com/users/search?q=${event.target.value}`)
    //         .then((res) => {
    //             if(!res.ok) {
    //                 setError("HTTP ERROR OCCURED!!!")
    //                 throw new Error("HTTP ERROR OCCURED!!!")
    //             }
    //             return res.json();
    //         })
    //         .then((data) => setResult(data.users))
    //     .catch((error) => {
    //         setError(error.message);
    //         toast.error(error);
    //     }) 
    //     .finally(setLoading(false))
    // }

    

    return(
        <div>
        
            <form>
                <input 
                    placeholder="Enter here"
                    type="text"
                    name="input"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    style={{border : "1px solid black", padding : "5px"}}
                />  
            </form>

            {loading && "Loading....." }

            {error && <div>{error}</div>}

            <ul style={{border : "1px solid green"}}>
                {result.map((data) => (
                    <li key={data.id} style={{height : "100px", border : "1px solid black", marginTop : "10px"}}>Name : {data.firstName} {data.lastName} <br/>Age :  {data.age}</li>
                ))}
            </ul>

            {!loading && query.trim() !== "" && result.length === 0 && error == "" && (<p>No such data found</p>)}
        </div>
    );
}