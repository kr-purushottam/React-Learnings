import { useState, useEffect } from "react";

export default function ImageLoader() {
    const[status, setStatus] = useState("idle");
    const[error, setError] = useState("");
    const[url, setURL] = useState("https://picsum.photos/id/237/800/500");
    const[objectUrl, setObjectUrl] = useState("")

    useEffect(() => {
        if(status !== "loading") return

        const controller = new AbortController();
        const {signal} = controller;

        (async() => {
            try{
                alert("rom rom")
                const responce = await fetch(url, {signal});
                if(!responce.ok) throw new Error(`HTTP ${responce.status} ${responce.statusText}`)
                const blob = await responce.blob();
                const next = URL.createObjectURL(blob);
                setObjectUrl(next)
                setStatus("loaded")
            }
            catch(error) {
                if(error.name === "AbortError") {
                    setStatus("cancelled");
                    return
                }
                setError(error.message || "Failed to load image");
                setStatus("error");
            }
            
        })()

        return () => {
            controller.abort();
        }

    },[status, url])


    useEffect(() => {
    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [objectUrl]);


    return(
        <div style={{display : "flex", flexDirection : "column", alignItems : "center", gap : "20px", marginTop : "10px"}}>
            <div style={{display : "flex", gap : "10px", justifyContent : "center", alignItems : "center"}}>
                <input
                    type="text"
                    name="image"
                    placeholder="Enter image URL"
                    value={url}
                    onChange={(event) => setURL(event.target.value)}
                    style={{border : "1px solid black", padding : "5px"}}

                />

                <button 
                    style={{margin : "5px", border : "1px solid black", padding : "5px"}}
                    onClick={() => {
                        if(objectUrl) {
                            URL.revokeObjectURL(objectUrl);
                            setObjectUrl("")
                        }
                        setStatus("loading");
                        setError("")
                    }}>Load
                </button>

                <button 
                    style={{margin : "5px", border : "1px solid black", padding : "5px"}}
                    onClick={() => setStatus("cancelled")}>Cancel

                </button>
            </div>

            {status === "loading" && <p>Loading…</p>}
            {status === "error" && <p style={{ color: "tomato" }}>{error}</p>}
            
            
            <div>status is: {status}</div>

            <img src={objectUrl} alt="image.jpg"
                style={{height : "100px", width : "100px", border : "1px solid black"}}
            />
        </div>
    );
}