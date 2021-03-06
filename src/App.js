import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import MovieHeader from './components/MovieHeader';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import Dashboard from './components/Dashboard';

import { Box } from '@chakra-ui/react';

function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=251f4f2f`;

    const response = await fetch(url);
    const responseJson = await response.json();

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
      <Box>
        <MovieHeader heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </Box>

      <Dashboard />
      <Box>
        <MovieList
          movies={movies}
          handleFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddFavourites}
        />
      </Box>
    </Box>
  );
}

export default App;
