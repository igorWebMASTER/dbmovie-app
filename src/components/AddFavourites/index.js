import React from 'react';
import { Box, Text, Span, Link, Image } from '@chakra-ui/react';

const index = () => {
  return (
    <Box p={4} display={{ md: 'flex' }}>
      <Box flexShrink={0}>
        <Image
          borderRadius='lg'
          width={{ md: 40 }}
          src='https://bit.ly/2jYM25F'
          alt='Woman paying for a purchase'
        />
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Text
          fontWeight='bold'
          textTransform='uppercase'
          fontSize='sm'
          letterSpacing='wide'
          color='teal.600'
        >
          Marketing
        </Text>
        <Link
          mt={1}
          display='block'
          fontSize='lg'
          lineHeight='normal'
          fontWeight='semibold'
          href='#'
        >
          Finding customers for your new business
        </Link>
        <Span mt={2} color='gray.500'>
          Adicionar aos favoritos
        </Span>
      </Box>
    </Box>
  );
};

export default index;
