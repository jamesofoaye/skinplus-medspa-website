import Head from 'next/head';
import {
    Box, Flex, Text, SimpleGrid, chakra, Stack, Image,
    Heading, List, ListItem, ListIcon, Textarea, Center,
    useBreakpointValue, FormControl, FormLabel, Button, Input,
} from '@chakra-ui/react';

import Navbar from '../components/navbar'

export default function Home() {
    return (
        <>
            <Head>
                <title>SkinPlus Medspa | Contact Us</title>
                <meta name="description" content="SkinPlus Medspa provides a variety of 
        personalized services to its clientele to enhance their look and maintain
        youth."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main
                style={{
                    fontFamily: 'Lora'
                }}
            >
                <chakra.nav bgColor={"brand.green"}>
                    <Navbar />
                </chakra.nav>

                <SimpleGrid
                    columns={{ base: 1, md: 2 }}
                    spacing={5}
                    px={{ base: 4, md: 16 }}
                    bgColor="brand.green" color="white"
                >
                    <Stack
                        spacing={4}
                        justify={'center'}
                    >
                        <Flex>
                            <Box>
                                <Box
                                    pl={5}
                                    py={{ base: 4, md: 0 }}>
                                    <Heading
                                        fontFamily={'Oswald'}
                                        display={{ base: 'none', md: 'block' }}
                                        fontSize={{ base: "2xl", md: "5xl", xl: "6xl" }}
                                    >
                                        Get<br />
                                        In Touch
                                    </Heading>
                                    <Heading
                                        fontFamily={'Oswald'}
                                        display={{ base: 'block', md: 'none' }}
                                        fontSize={{ base: "2xl", md: "5xl", xl: "6xl" }}
                                    >Get In Touch
                                    </Heading>
                                </Box>
                                <Text
                                    fontSize={{ base: "xl", md: "2xl" }}
                                    pl={{ base: 0, md: 5 }}
                                >
                                    We are open on Tuesday - Sunday <br />
                                    from 10am - 7pm
                                </Text>
                                <Text
                                    fontSize={{ base: "xl", md: "2xl" }}
                                    pl={{ base: 0, md: 5 }}
                                >
                                    NB: We are closed on Monday.
                                </Text>
                                <Text
                                    fontSize={{ base: "xl", md: "2xl" }}
                                    pl={{ base: 0, md: 5 }}
                                >
                                    <address>Phone Number: <a href="tel:+233596068336">0596068336</a>
                                    </address>
                                </Text>
                            </Box>
                        </Flex>
                    </Stack>
                    <Stack py={5}>
                        <FormControl>
                            <FormLabel fontSize={{ md: "xl" }}>
                                Name
                            </FormLabel>
                            <Input
                                type="text"
                                name="name"
                                _focus={{
                                    borderColor: 'brand.sand'
                                }} />
                        </FormControl>
                        <FormControl>
                            <FormLabel fontSize={{ md: "xl" }}>
                                Email address
                            </FormLabel>
                            <Input
                                type="email"
                                name="email"
                                _focus={{
                                    borderColor: 'brand.sand'
                                }} />
                        </FormControl>
                        <FormControl>
                            <FormLabel fontSize={{ md: "xl" }}>
                                Phone Number
                            </FormLabel>
                            <Input
                                type="tel"
                                name="phone number"
                                _focus={{
                                    borderColor: 'brand.sand'
                                }} />
                        </FormControl>
                        <FormControl>
                            <FormLabel fontSize={{ md: "xl" }}>
                                Message
                            </FormLabel>
                            <Textarea
                                name="message"
                                rows="7"
                                columns="30"
                                _focus={{
                                    borderColor: 'brand.sand'
                                }}>
                            </Textarea>
                        </FormControl>
                        <Stack spacing={6}>
                            <Button
                                bgColor={'brand.green'}
                                variant={'outline'}
                                fontSize={{ md: "xl" }}
                                _hover={{
                                    bgColor: 'brand.olive'
                                }}
                            >
                                Send
                            </Button>
                        </Stack>
                    </Stack>
                </SimpleGrid>

            </main>

            <footer>
                <Box align="center">
                    <a
                        href="https://ofori-james-ayerakwa.me"
                        target="_blank">
                        Developed by {' '}
                        <Text
                            fontSize={"xl"}
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
        </>
    )
}
