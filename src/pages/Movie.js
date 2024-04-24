import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams(); // Get the movie ID from URL parameter
  const [movie, setMovie] = useState(null);


  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`) // Fetch the specific movie by ID
      .then((r) => r.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error(error));
  }, [id]);


  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
      {movie && (
          <div>
            <h1>{movie.title}</h1>
            <p>Time: {movie.time} minutes</p>
            <p>
              Genres:{" "}
              {movie.genres.map((genre, index) => (
                <span key={index}>{genre}</span>
              ))}
            </p>
          </div>
        )}
      </main>
    </>
  );
};

export default Movie;


