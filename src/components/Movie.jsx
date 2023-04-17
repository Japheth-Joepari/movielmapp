import { Link } from "react-router-dom";

export default function Movie({
  id,
  poster_path,
  title,
  imagePath,
  release_date,
  vote_average,
  popularity,
  imageStyle,
}) {
  const style = imageStyle ? imageStyle : {};

  return (
    <li key={id}>
      <div className="movie-card" style={style}>
        <Link to={`/movies/${id}`}>
          <figure className="card-banner">
            <img src={imagePath + poster_path} alt={title} />
          </figure>
        </Link>
        <div className="title-wrapper">
          <Link to={`/movies/${id}`}>
            <h3 className="card-title">{title}</h3>
          </Link>
          <time dateTime={release_date}>
            {new Date(release_date).getFullYear()}
          </time>
        </div>
        <div className="card-meta">
          <div className="badge badge-outline">{popularity}</div>
          <div className="rating">
            <ion-icon name="star" />
            <data>{vote_average}</data>
          </div>
        </div>
      </div>
    </li>
  );
}
