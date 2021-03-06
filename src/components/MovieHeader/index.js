import { Box } from '@chakra-ui/react';

function MovieHeader(props) {
  return (
    <Box color='white' fontSize='2rem' fontWeight='bold'>
      {props.heading}
    </Box>
  );
}

export default MovieHeader;
