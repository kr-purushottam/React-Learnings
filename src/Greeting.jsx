
function Greeting() {
    let currentTime = new Date().getHours();
    let message;
    if(currentTime < 12) {
        message = "Shuprabhat"
    }
    else if(currentTime < 16) {
        message = "Dopher ho gyi ji"
    }
    else{
        message = "Ratri Ho rhi ji"
    }

    return(
        <h2>{currentTime}</h2>
    );
}


export default Greeting;