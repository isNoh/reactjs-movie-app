import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../css/Movie.css";

function Movie({ id, title, coverImg, summary, genres }) {
  return (
    <div>
      <Link
        to={`/movie/${id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <div className="movie">
          <div className="movie-pic">
            <img src={coverImg} />
          </div>
          <div className="movie-item">
            <div>
              <h2>{title}</h2>
              <p>{summary}</p>
            </div>
            <div>
              <p>Genres</p>
            </div>
            <ul>
              {genres.map((genre, i) => (
                <li key={i}>{genre}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="hair-line">
          <hr />
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
