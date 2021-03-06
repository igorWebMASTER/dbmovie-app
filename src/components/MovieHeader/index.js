import React from 'react';

import { Box } from '@chakra-ui/react';
const MovieHeader = (props) => {
  return (
    <Box color='white' fontSize='2rem' fontWeight='bold'>
      {props.heading}
    </Box>
  );
};

export default MovieHeader;
