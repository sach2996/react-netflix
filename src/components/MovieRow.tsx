function MovieRow(prop: { movies: any[] }) {
  return (
    <div className="movie-row">
      {prop.movies.map((movie, index) => (
        <div className="movie-item" key={index}>
          <img src={movie.poster} alt={movie.title} />
          <div className="movie-details">
            <p className="movie-title">{movie.title}</p>
            <p className="movie-rank">Top {index + 1}</p>
            <p className="recently-added">Recently Added</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieRow;
