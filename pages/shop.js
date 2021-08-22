import Head from 'next/head';
import {
    chakra, Box, Stack, Flex,
    useBreakpointValue, Text
} from "@chakra-ui/react";
import { PopupWidget } from "react-calendly";
import Navbar from '../components/navbar'

export default function Shop() {
    return (
        <>
            <Head>
                <title>SkinPlus Medspa Ghana | Online Shop</title>
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
                text="Book Free Appointment"
                textColor="#ffffff"
                url="https://calendly.com/jamesofoaye/consultation"
            />

            <Flex
                p={50}
                w="full"
                alignItems="center"
                justifyContent="center"
            >
                <Flex
                    justify="center"
                    w="full"
                >
                    <Box
                        w={{ base: "full", md: "75%", lg: "50%" }}
                        px={4}
                        py={20}
                        textAlign={{ base: "left", md: "center" }}
                    >
                        <chakra.span
                            fontSize={{ base: "3xl", sm: "4xl" }}
                            fontWeight="extrabold"
                            letterSpacing="tight"
                            lineHeight="shorter"
                            color={"gray.900"}
                            mb={6}
                        >
                            <chakra.span display="block">Online Shop Under Development.
                                Come Back Later!!!
                            </chakra.span>
                        </chakra.span>
                    </Box>
                </Flex>
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