import { useState } from "react";

function LikeButton() {
    const[like, setLike] = useState(0);

    return(
        <div>
            <div>Like Count : {like}</div>
            <button onClick={() => setLike(like + 1)}>Like 👍</button>
        </div>
    );
}

export default LikeButton