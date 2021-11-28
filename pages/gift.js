import React from "react";
import Head from 'next/head'
import {
    chakra,
    Box,
    Image,
    Flex,
    useColorModeValue,
    Link,
} from "@chakra-ui/react";

const Gift = () => {
    return (
        <div>
            <Head>
                <title>SkinPlus MedSpa Ghana | Gift Card Program</title>
                <meta
                    name="description" 
                    content="SkinPlus Medspa provides a variety of personalized services 
                    to its clientele to enhance their look and maintain youth."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Flex
                p={50}
                w="full"
                h="100vh"
                alignItems="center"
                justifyContent="center"
                bgImage={"/xmas-bg.jpg"}
                bgSize={"cover"}
                bgPosition={'center'}
                bgRepeat={"no-repeat"}
            >
                <Box
                    mx="auto"
                    maxW="2xl"
                >
                    <Box p={6}>
                        <Box>
                            <chakra.span
                                fontSize="xs"
                                textTransform="uppercase"
                                color={useColorModeValue("brand.600", "brand.400")}
                            >
                                Product
                            </chakra.span>
                            <Link
                                display="block"
                                color={useColorModeValue("gray.800", "white")}
                                fontWeight="bold"
                                fontSize="2xl"
                                mt={2}
                                _hover={{ color: "gray.600", textDecor: "underline" }}

                            >
                                I Built A Successful Blog In One Year
                            </Link>
                            <chakra.p
                                mt={2}
                                fontSize="sm"
                                color={useColorModeValue("gray.600", "gray.400")}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
                                parturient et sem ipsum volutpat vel. Natoque sem et aliquam
                                mauris egestas quam volutpat viverra. In pretium nec senectus
                                erat. Et malesuada lobortis.
                            </chakra.p>
                        </Box>

                        <Box mt={4}>
                            <Flex alignItems="center">
                                <Flex alignItems="center">
                                    <Image
                                        h={10}
                                        fit="cover"
                                        rounded="full"
                                        src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                                        alt="Avatar"
                                    />
                                    <Link
                                        mx={2}
                                        fontWeight="bold"
                                        color={useColorModeValue("gray.700", "gray.200")}

                                    >
                                        Jone Doe
                                    </Link>
                                </Flex>
                                <chakra.span
                                    mx={1}
                                    fontSize="sm"
                                    color={useColorModeValue("gray.600", "gray.300")}
                                >
                                    21 SEP 2015
                                </chakra.span>
                            </Flex>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </div>
    );
};

export default Gift;