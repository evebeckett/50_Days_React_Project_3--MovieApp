const MovieList = (props) => {
    const FavoriteComponent = props.favoriteComponent;
    return (
        <div className="movie-list-container">
            {props.movies.map((movie, index) => (
                <div className="image-container d-flex justify-content-start m3">
                   < img src={movie.Poster} alt="movie" />
                    <div
                        onClick = {() => props.handleFavoritesClick(movie)}
                        className="overlay d-flex align-items-center justify-content-center"
                    >
                        <FavoriteComponent />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MovieList;