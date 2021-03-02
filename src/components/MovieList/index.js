import React from 'react';
import { Container, ContainerOverlay } from './style';
import { Link, animateScroll as scroll } from 'react-scroll';

function MovieList(props) {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      {props.movies.map((movie, index) => (
        <Container>
          <Link smooth='true'>
            <img src={movie.Poster} alt='movie' />
            <ContainerOverlay
              onClick={() => props.handleFavouritesClick(movie)}
            >
              {props.favouriteComponent()}
              <FavouriteComponent />
            </ContainerOverlay>
          </Link>
        </Container>
      ))}
    </>
  );
}

export default MovieList;
