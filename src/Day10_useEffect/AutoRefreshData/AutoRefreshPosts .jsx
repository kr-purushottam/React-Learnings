import { useState, useEffect } from "react";

export default function AutoRefreshPosts() {
    const[posts, setPosts] = useState([]);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState("");
    const[running, setRunning] = useState(true);
    

    useEffect(() => {
        let intervalId;
        let controller;
        let page ;
        
        if(running) {
            handleFetch()
            intervalId = setInterval(handleFetch, 5000)
        }
        
        

        function handleFetch() {
            setLoading(true);
            setError("");
            setPosts([])

            if(controller) controller.abort()
                
            controller = new AbortController();
            const {signal} = controller;

            const limit = 5;
            const skip = (page * limit) % 100; // cycle through first 100 posts
            page += 1;

    fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`, { signal })
                .then((response) => {
                    if(!response.ok) {
                        throw new Error(`HTTP ${response.status} ${response.statusText}`)
                    }
                    return response.json();
                })
                .then((data) => setPosts(data.posts))
            .catch((error) => {
                if(error.name === "AbortError") {
                    return
                }
                else{
                    console.error(error);
                    setError(error.message || "API not working !!!")
                }
            })
            .finally(() => setLoading(false));
        }

        return ()=> {
            console.log("Unmounting 🙁🙁")
            clearInterval(intervalId);
            if(controller) controller.abort()
        }
    },[running])

    return(
        <div >
            <button 
                onClick={() => setRunning((prev) => !prev)}
                style={{border : "1px solid black", padding : "5px"}}>
                {running ? "Stop Refresh" : "Start Refresh"}
            </button>

            {loading && <div>Loading .....</div>}

            {error && <div>{error}</div>}

            <ul>
                {posts.map((post) => (
                    <li key={post.id} style={{height : "100px", border : "1px solid black" , marginTop :"15px"}}>
                        <h1>{post.title}</h1> <br/>
                        <h4>Likes : {post.reactions.likes}</h4>
                        <h4>Dislikes : {post.reactions.dislikes}</h4>
                    </li>
                ))}
            </ul>
        </div>
    );
}