import React from 'react';
import {
  Box,
  Flex,
  Text,
  SimpleGrid,
  VStack,
  Stack,
  Image,
  chakra,
  Heading,
  List,
  ListItem,
  ListIcon,
  Textarea,
  Center,
  useBreakpointValue,
  FormControl,
  FormLabel,
  Button,
  Input,
  HStack,
  Link,
} from '@chakra-ui/react';

function Footer() {
  return (
    <div>
      <footer>
        <Box align="center">
          <a href="https://ofori-james-ayerakwa.me" target="_blank">
            Developed by{' '}
            <Text
              fontSize={'xl'}
              as={'span'}
              position={'relative'}
              _after={{
                content: `""`,
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'brand.sand',
                zIndex: -1,
              }}>
              Ofori James Ayerakwa
            </Text>
          </a>
        </Box>
      </footer>
    </div>
  );
}

export default Footer;
