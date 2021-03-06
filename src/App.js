import React, { useState, useEffect } from 'react';

import MovieList from './components/MovieList';
import MovieHeader from './components/MovieHeader';
import SearchBox from './components/SearchBox';
import Dashboard from './components/Dashboard';

import { Box, Flex, Grid } from '@chakra-ui/react';
import { flexSettings, gridSettings } from './config/style.grid';
import SignUpForm from './components/Drawer';

function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=251f4f2f`;

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  };

  return (
    <Box
      bg='#141414'
      h='100vh'
      width='100vw'
      MaxWidth='100vw'
      d='flex'
      flexDirection='column'
    >
      <Flex w='100%' justify='space-between' flexWrap='wrap'>
        <Box {...flexSettings} bg={'red.500'}>
          I'm a box
        </Box>
        <Box {...flexSettings} bg={'blue.500'}>
          I'm a box
        </Box>
        <Box {...flexSettings} bg={'green.500'}>
          I'm a box
        </Box>
        <Box {...flexSettings} bg={'purple.500'}>
          I'm a box
        </Box>
      </Flex>

      <Box>
        <MovieHeader heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </Box>

      <Box>
        <MovieList movies={movies} handleFavouritesClick={addFavouriteMovie} />
      </Box>

      <SignUpForm />

      <Grid
        w='100%'
        templateColumns='repeat(auto-fit, minmax(300px, 1fr))'
        gap={6}
        marginTop='2rem'
      >
        <Box {...gridSettings} bg={'red.500'}>
          I'm a box
        </Box>
        <Box {...gridSettings} bg={'blue.500'}>
          I'm a box
        </Box>
        <Box {...gridSettings} bg={'green.500'}>
          I'm a box
        </Box>
        <Box {...gridSettings} bg={'purple.500'}>
          I'm a box
        </Box>
      </Grid>
    </Box>
  );
}

export default App;
