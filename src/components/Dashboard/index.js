import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

const index = () => {
  return (
    <div>
      <Grid
        h='200px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={4}
        marginTop='1rem'
      >
        <GridItem rowSpan={2} colSpan={1} bg='tomato' />
        <GridItem colSpan={2} bg='papayawhip' />
        <GridItem colSpan={2} bg='papayawhip' />
        <GridItem colSpan={4} bg='tomato' />
      </Grid>
    </div>
  );
};

export default index;
