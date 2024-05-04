import React from 'react';
import {Link} from 'react-router-dom';

function MovieCard({title , id}) {
  
  return (
    <article>
        <h2>{title}</h2>
        <p>
        <Link to={`/movie/${id}`}>View movie</Link>
        </p>
    </article>
  );
};

export default MovieCard;