//----------WAY 1------------------
// function BookCard({title = "defaultBook", name= "not defined", year = "n/a", cover = "nocover"}) {
//     console.log("hello here")
//     return(
//         <div>
//             <h1>{title}</h1>
//             <h3>Author name : {name}</h3>
//             <h3>Year : {year}</h3>
//             <h3>Cover : {cover}</h3>
//         </div>
//     );
// }


//------------WAY 2---------------------------------
// function BookCard(props) {
//     const {
//         title = "Default Book",
//         name = "Lawde ka naa",
//         year = "N/A",
//         cover = "No Cover"
//     } = props;
//     return(
//         <div>
//             <h1>{title}</h1>
//             <h3>Author name : {name}</h3>
//             <h3>Year : {year}</h3>
//             <h3>Cover : {cover}</h3>
//         </div>
//     );
// }

// -------------------------WAY 3----------


function BookCard(props) {
    return(
        <div>
            <h1>{props.title}</h1>
            <h3>Author name : {props.name}</h3>
            <h3>Year : {props.year}</h3>
            <h3>Cover : {props.cover}</h3>
        </div>
    );
}

    BookCard.defaultProps = {
    title : "DefaultBook",
    name : "Not Defined",
    year : "N/A",
    cover: "NoCover"
    }




export default BookCard