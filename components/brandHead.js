import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

function BrandHead() {
  const [height, setHeight] = useState('15vh');
  
  return (
    <Flex align={'center'} justify={'center'} h={height}>
      <Flex align="center" justify="center">
        <Image boxSize="150px" src="logo.svg" alt="Dan Abramov" />
      </Flex>
    </Flex>
  );
}

export default BrandHead;
