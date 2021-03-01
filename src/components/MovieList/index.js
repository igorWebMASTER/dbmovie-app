import React from 'react';
import { Container } from './style';

function MovieList(props) {
  return (
    <>
      {props.movies.map((movie, index) => (
        <Container>
          <div>
            <img src={movie.Poster} alt='movie' />
          </div>
        </Container>
      ))}
    </>
  );
}

export default MovieList;
