import React from 'react';

import { Input, Box } from '@chakra-ui/react';

const index = (props) => {
  return (
    <Box>
      <Input
        focusBorderColor='lime'
        type='text'
        placeholder='Digite para buscar..'
        onChange={(event) => props.setSearchValue(event.target.value)}
        value={props.value}
      />
    </Box>
  );
};

export default index;
