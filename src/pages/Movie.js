import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import NavBar from "../components/NavBar";


function Movie() {
  const [movies , setMovies ] = useState([])
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/movies${id}`)
    .then(r => r.json())
    .then(data => setMovies(data));
  }, [id]);

  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <header>
        <h1>{movies.title}</h1>
      </header>
      <main>
        <p>Time: {movies.time}</p>
        <div>
          Genres:
          {movies.genres.map((genre, index) => (
            <span key={index}>{genre}</span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;