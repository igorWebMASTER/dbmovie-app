import React from 'react';

function SearchBox(props) {
  return (
    <div>
      <input
        type='text'
        placeholder='Digite para buscar..'
        onChange={(event) => props.setSearchValue(event.target.value)}
        value={props.value}
      />
    </div>
  );
}

export default SearchBox;
