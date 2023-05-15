import Movie from "./Movie";

export default function RecentMovies({ res, imagePath }) {
  return (
    <div>
      <section className="upcoming">
        <div className="container">
          <div className="flex-wrapper">
            <div className="title-wrapper">
              <p className="section-subtitle">Online Streaming</p>
              <h2 className="h2 section-title">Recent Movies</h2>
            </div>
          </div>
          <ul className="movies-list  has-scrollbar">
            {res.results.map((movie) => (
              <Movie
                key={movie.id}
                title={movie.title}
                id={movie.id}
                imagePath={imagePath}
                popularity={movie.popularity}
                vote_average={movie.vote_average}
                release_date={movie.release_date}
                poster_path={movie.poster_path}
              />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
