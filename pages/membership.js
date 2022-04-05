import Head from 'next/head';
import {
    chakra, Box, Flex, useColorModeValue,
    useBreakpointValue, Icon, SimpleGrid,
    Button, VStack, Stack, Text, Input,
    FormControl, FormLabel,
} from "@chakra-ui/react";
import Navbar from '../components/navbar'
import { PopupWidget } from "react-calendly";

export default function Services() {
    const Feature = (props) => {
        return (
            <Flex>
                <Icon
                    boxSize={5}
                    mt={1}
                    mr={2}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    ></path>
                </Icon>
                <chakra.p
                    fontSize="lg"
                    color={"gray.700"}
                    {...props}
                />
            </Flex>
        );
    };

    return (
        <>
            <Head>
                <title>SkinPlus Medspa Ghana | Membership</title>
                <meta name="description" content="SkinPlus Medspa provides a variety of 
                personalized services to its clientele to enhance their look and maintain
                youth."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <chakra.nav
                bgColor={"brand.green"}
                fontFamily={'Lora'}
            >
                <Navbar />
            </chakra.nav>

            {/**Calendly Widget */}
            <PopupWidget
                branding
                color="#1f3d33"
                pageSettings={{
                    backgroundColor: '1f3d33',
                    hideEventTypeDetails: false,
                    hideGdprBanner: true,
                    hideLandingPageDetails: false,
                    primaryColor: 'c5ad8d',
                    textColor: 'ffffff'
                }}
                text="Book Free Consultation"
                textColor="#ffffff"
                url="https://calendly.com/skinplusmedspa/30min"
            />

            <Flex
                p={{ md: 20 }}
                py={{ base: 5 }}
                w="auto"
                justifyContent="center"
                alignItems="center"
                fontFamily="Lora"
                bg={'white'}
                color={'black'}
            >
                <Box
                    px={{ md: 8 }}
                    py={{ md: 10 }}
                    mx="auto"
                >
                    <SimpleGrid
                        alignItems="center"
                        columns={{ base: 1, lg: 2 }}
                        spacingY={{ base: 10, lg: 32 }}
                        spacingX={{ base: 5, lg: 24 }}
                    >
                        <Box>
                            <chakra.h2
                                mb={3}
                                fontFamily={'Oswald'}
                                fontSize={{ base: "3xl", md: "4xl" }}
                                fontWeight="extrabold"
                                textAlign={{ base: "center", sm: "left" }}
                                color={useColorModeValue("brand.black")}
                                lineHeight="shorter"
                                letterSpacing="tight"
                            >
                                Why get a Membership?
                            </chakra.h2>
                            <VStack
                                direction="column"
                                flexGrow={1}
                                spacing={5}
                                alignItems="start"
                                mb={6}
                            >
                                <Feature>Discount</Feature>
                                <Feature>Access to our VIP lounge</Feature>
                                <Feature>Priority Scheduling</Feature>
                                <Feature>Referrals</Feature>
                            </VStack>
                        </Box>
                        <Stack>
                            <FormControl>
                                <FormLabel fontSize={{ md: "xl" }}>
                                    Name
                                </FormLabel>
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder={'Enter your name'}
                                    borderColor="brand.green"
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
                                    placeholder={'Enter your email'}
                                    borderColor="brand.green"
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
                                    placeholder={'Enter your phone number'}
                                    borderColor="brand.green"
                                    _focus={{
                                        borderColor: 'brand.green'
                                    }} />
                            </FormControl>
                            <Stack spacing={6}>
                                <Button
                                    bgColor={'brand.green'}
                                    color={'white'}
                                    variant={'outline'}
                                    mt={2}
                                    fontSize={{ md: "xl" }}
                                    _hover={{
                                        bgColor: 'brand.olive'
                                    }}
                                >
                                    Become a Member
                                </Button>
                            </Stack>
                        </Stack>
                    </SimpleGrid>
                </Box>
            </Flex>

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
    );
}