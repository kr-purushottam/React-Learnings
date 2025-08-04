function MovieCard(props) {
    return(
        <div>
            <img src={props.poster} alt="posterImg"/>
            <h2>Movie Title : {props.movieTitle}</h2>
            <h4>Release year : {props.releaseYear}</h4>
        </div>
    );
}
export default MovieCard