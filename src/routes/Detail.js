import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../css/Detail.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  let history = useHistory();

  const getMovie = async () => {
    const res = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await res.json();
    setMovies(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className="detail-main">
      <div className="title-bar">
        <div
          className="title-bar__btn"
          onClick={() => {
            history.goBack();
          }}
        >
          <h1 className="title-bar__back">Back</h1>
        </div>
        <div>
          {loading ? <h1>Loading...</h1> : <h1>{movies.title_long}</h1>}
        </div>
      </div>
      <hr />
      <div className="inner">
        <div>
          <img src={movies.large_cover_image} />
        </div>
        <div className="inner-text">
          {loading ? null : (
            <>
              <h2>Description</h2>
              <div>{movies.description_full}</div>
              <br />
              <div className="inner-text__small">
                <div className="inner-text__genre">
                  <h2>Genres</h2>
                  <ul>
                    {movies.genres.map((genre, index) => {
                      return <li key={index}>{genre}</li>;
                    })}
                  </ul>
                </div>
                <div>
                  <h2>Rating</h2>
                  <div>{movies.rating} / 10</div>
                </div>
                <div>
                  <h2>Runtime</h2>
                  <div>{movies.runtime} mins</div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Detail;
