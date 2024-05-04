import React, { useEffect, useState } from 'react';

function Directors() {
  const [directors, setDirectors] = useState([]);

 
  useEffect(() => {
    
     fetch(`http://localhost:3000/directors`)
     .then (r => r.json())
     .then(data => setDirectors(data));
  }, []);

  return (
    <>
      <header>
        <h1>Directors Page</h1>
      </header>
      <main>
        
        {directors.map((director, index) => (
          <article key={index}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;