function NameList() {
    const name = ["Puru", "Tom", "Michale", "Root"]

    return(
        <>
            <h2>Name List : </h2>
            <ul>
                {name.map((names, index) => (<li key={index}>{names}</li>))}
            </ul>
        </>
    );
}

export default NameList;