import Movie from "./Movie";
import { useEffect, useState } from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovie = async () => {
    const res = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.9&sort_by=year"
    );
    const json = await res.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="home-main">
      <div className="title-bar">
        <div>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <h1>Home</h1>
          </Link>
        </div>
        <div>{loading ? <h1>Loading...</h1> : <h1>isNoh</h1>}</div>
      </div>
      <hr />

      {loading ? null : (
        <div className="list-movie">
          {movies.map((movie, i) => (
            <Movie
              key={i}
              coverImg={movie.medium_cover_image}
              title={movie.title_long}
              id={movie.id}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
