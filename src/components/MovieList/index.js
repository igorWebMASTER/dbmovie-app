import React from 'react';
import { Box, Link, ScaleFade, Image } from '@chakra-ui/react';

function MovieList(props) {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      {props.movies.map((movie, index) => (
        <ScaleFade initialScale={0.9}>
          <Box>
            <Link smooth='true'>
              <Image
                boxSize='4rem'
                borderRadius='full'
                src={movie.Poster}
                alt='movie'
              />
              <Box onClick={() => props.handleFavouritesClick(movie)}>
                <FavouriteComponent />
              </Box>
            </Link>
          </Box>
        </ScaleFade>
      ))}
    </>
  );
}

export default MovieList;
