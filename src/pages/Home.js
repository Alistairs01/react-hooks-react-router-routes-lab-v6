import { useEffect, useState } from "react";
import MovieCard from '../components/MovieCard';

function Home() {
  const [movies, setMovies] = useState([]);

 
  useEffect(() => {
    
     fetch(`http://localhost:3000/movies`)
     .then(r => r.json())
     .then(data => setMovies(data));
  }, []);

  return (
    <>
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
        
        {movies.map(movie => (
          <MovieCard key={movie.id} title={movie.title} id={movie.id} />
        ))}
      </main>
    </>
  );
}
export default Home;
