import Head from 'next/head';
import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    useBreakpointValue,
    Icon,
    SimpleGrid,
    Button,
    VStack,
    Text,
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
                    color={useColorModeValue("brand.500", "brand.300")}
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
                    color={useColorModeValue("gray.700", "gray.400")}
                    {...props}
                />
            </Flex>
        );
    };

    return (
        <>
            <Head>
                <title>SkinPlus Medspa | Membership</title>
                <meta name="description" content="SkinPlus Medspa provides a variety of 
                personalized services to its clientele to enhance their look and maintain
                youth."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <chakra.nav bgColor={"brand.green"}>
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
                text="Book an Appointment"
                textColor="#ffffff"
                url="https://calendly.com/jamesofoaye/consultation"
            />

            <Flex
                p={20}
                w="auto"
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    px={8}
                    py={20}
                    mx="auto"
                >
                    <SimpleGrid
                        alignItems="center"
                        columns={{ base: 1, lg: 2 }}
                        spacingY={{ base: 10, lg: 32 }}
                        spacingX={{ base: 10, lg: 24 }}
                    >
                        <Box>
                            <chakra.h2
                                mb={3}
                                fontSize={{ base: "3xl", md: "4xl" }}
                                fontWeight="extrabold"
                                textAlign={{ base: "center", sm: "left" }}
                                color={useColorModeValue("black")}
                                lineHeight="shorter"
                                letterSpacing="tight"
                            >
                                Enroll in Our Membership Program
                            </chakra.h2>
                            <chakra.p
                                mb={6}
                                fontSize={{ base: "lg", md: "xl" }}
                                textAlign={{ base: "center", sm: "left" }}
                                color={useColorModeValue("gray.600", "gray.500")}
                            >
                                Let's put our heads together to build a successful partnership to
                                benefit both your customers and your business.
                            </chakra.p>
                            <Button
                                w={{ base: "full", sm: "auto" }}
                                size="lg"
                                bgColor={'brand.green'}
                                variant={'outline'}
                                color={'white'}
                                fontSize={{ md: "xl" }}
                                _hover={{
                                    bgColor: 'brand.olive'
                                }}
                            >
                                Become a Member
                            </Button>
                        </Box>
                        <VStack
                            direction="column"
                            flexGrow={1}
                            spacing={5}
                            alignItems="start"
                        >
                            <Feature>Discount</Feature>
                            <Feature>Access to our VIP lounge</Feature>
                            <Feature>Priority Scheduling</Feature>
                            <Feature>Referals</Feature>
                        </VStack>
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