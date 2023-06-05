import "./MovieCard.css";

const MovieCard = ({ movie, addMovie, watchlist, removeMovie }) => {
  const inWatchlist = watchlist.filter((mov) => {
    return mov.id === movie.id;
  });

  const button =
    inWatchlist.length === 0 ? (
      <button onClick={() => addMovie(movie)}>Add to List</button>
    ) : (
      <button onClick={() => removeMovie(movie)}>Remove</button>
    );

  // const inWatchlist = list.filter((mov) => {
  //     return mov.id === movie.id;
  // });

  return (
    <div className="movie-card">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
        />
        <h3>{movie.original_title}</h3>
      </div>
      {button}
    </div>
  );
};

export default MovieCard;
