import React, { useEffect, useState } from "react";

function Actors() {
  const [actors , setActors ] = useState([]);

   
   useEffect(() => {
    
     fetch(`http://localhost:3000/actors`)
     .then(r => r.json())
     .then(data => setActors(data));
  }, []);

  return (
    <>
       <header>
        <h1>Actors Page</h1>
      </header>
      <main>
       
        {actors.map((actor, index) => (
          <article key={index}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Actors;
