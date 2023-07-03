import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

function BrandHead() {
  return (
    <Flex align={'center'} justify={'center'}>
      <Box></Box>
      <Flex align="center" justify="center">
        <Image boxSize="100px" src="logo.svg" alt="Dan Abramov" />
      </Flex>
    </Flex>
  );
}

export default BrandHead;
