import { useState } from "react";
import Movie from "./Movie";

export default function PopularMovies({
  popularRes,
  hororRes,
  comedyRes,
  dramaRes,
  scienceRes,
  animeRes,
  imagePath,
}) {
  const [search, setSearch] = useState("");
  const [movieFilter, setMovieFilter] = useState(popularRes);

  function handleSearchChange(e) {
    const searchInputValue = e.target.value;
    setSearch(searchInputValue);
  }

  return (
    <>
      <section className="upcoming">
        <div className="container">
          <div className="flex-wrapper">
            <div className="title-wrapper">
              <p className="section-subtitle">Online Streaming</p>

              <h2 className="h2 section-title"> Movies</h2>
            </div>

            <ul className="filter-list">
              <li>
                <button
                  className="filter-btn"
                  onClick={() => {
                    setMovieFilter(hororRes);
                  }}
                >
                  Horror
                </button>
              </li>

              <li>
                <button
                  className="filter-btn"
                  onClick={() => {
                    setMovieFilter(scienceRes);
                  }}
                >
                  Science fiction
                </button>
              </li>

              <li>
                <button
                  className="filter-btn"
                  onClick={() => {
                    setMovieFilter(comedyRes);
                  }}
                >
                  Comedy
                </button>
              </li>

              <li>
                <button
                  className="filter-btn"
                  onClick={() => {
                    setMovieFilter(dramaRes);
                  }}
                >
                  drama
                </button>
              </li>

              <li>
                <button
                  className="filter-btn"
                  onClick={() => {
                    setMovieFilter(popularRes);
                  }}
                >
                  TV Shows
                </button>
              </li>
              <li>
                <button
                  className="filter-btn"
                  onClick={() => {
                    setMovieFilter(animeRes);
                  }}
                >
                  Anime
                </button>
              </li>
            </ul>
          </div>

          <div>
            <input
              type="search"
              className="inputt"
              onChange={handleSearchChange}
              placeholder="Search for movies ..."
            />
            <ul className="movies-list">
              {movieFilter.results
                .filter(
                  (movie) =>
                    movie.title
                      .toLowerCase()
                      .includes(search.trim().toLowerCase()) // added trim() to remove leading/trailing spaces
                )
                .map((movie) => (
                  <Movie
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
        </div>
      </section>
    </>
  );
}
