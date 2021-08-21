import React, { useState } from "react";
import Head from 'next/head';
import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    useBreakpointValue,
    Icon,
    SimpleGrid,
    VStack,
    Text,
    Stack,
    Heading,
} from "@chakra-ui/react";
import Navbar from '../components/navbar'
import { PopupWidget } from "react-calendly";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
// import Swiper core and required modules
import SwiperCore, {
    Navigation, Thumbs, Autoplay
} from 'swiper/core';
// install Swiper modules
SwiperCore.use([Navigation, Thumbs, Autoplay]);

export default function Services() {
    const [thumbNailSwiper, setThumbNailSwiper] = useState(null);

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
                <title>SkinPlus Medspa | Services</title>
                <meta name="description" content="SkinPlus Medspa provides a variety of 
                personalized services to its clientele to enhance their look and maintain
                youth."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <chakra.main fontFamily={'Lora'}>
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
                        mx="auto"
                    >
                        <SimpleGrid
                            alignItems="center"
                            columns={{ base: 1, md: 3 }}
                            spacingY={10}
                            spacingX={10}
                        >
                            <Box>
                                <chakra.h2
                                    fontFamily={'Oswald'}
                                    mb={3}
                                    fontSize={{ base: "2xl", md: "5xl", xl: "6xl" }}
                                    fontWeight="extrabold"
                                    textAlign={{ base: "center", sm: "left" }}
                                    color={useColorModeValue("black")}
                                    lineHeight="shorter"
                                    letterSpacing="tight"
                                >
                                    Our Services
                                </chakra.h2>
                                <chakra.p
                                    mb={6}
                                    fontSize={{ base: "lg", md: "xl" }}
                                    textAlign={{ base: "center", sm: "left" }}
                                    color={useColorModeValue("gray.600", "gray.500")}
                                >
                                    SkinPlus uses ethically sourced, fair trade natural materials  that are expertly
                                    crafted to match our client needs.
                                </chakra.p>
                            </Box>
                            <VStack
                                direction="column"
                                flexGrow={1}
                                spacing={5}
                                alignItems="start"
                            >
                                <Feature>Facial Care</Feature>
                                <Feature>Massage</Feature>
                                <Feature>Vagina Rejuvenation</Feature>
                                <Feature>Laser Hair Removal</Feature>
                                <Feature>Cosmetic Products</Feature>
                                <Feature>Acne Treatment</Feature>
                                <Feature>Fat Reduction &amp; Body Contouring</Feature>
                                <Feature>Scar Removal</Feature>
                                <Feature>Cellulite Treatment</Feature>
                                <Feature>Scalp Pigmentation</Feature>
                            </VStack>
                            <VStack
                                direction="column"
                                flexGrow={1}
                                spacing={5}
                                alignItems="end"
                            >
                                <Feature>Wax</Feature>
                                <Feature>Botox</Feature>
                                <Feature>Fillers</Feature>
                                <Feature>Mole Removal</Feature>
                                <Feature>Stretch Mark</Feature>
                                <Feature>PRP &amp; Microneedling</Feature>
                                <Feature>Skin Tightening</Feature>
                                <Feature>Derma Planning</Feature>
                                <Feature>Chemical Peels</Feature>
                                <Feature>Hyperpigmentation</Feature>
                            </VStack>
                        </SimpleGrid>
                    </Box>
                </Flex>

                <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={5}
            px={{ base: 4, md: 16 }}
            py={4}
            bgColor={'brand.olive'}
          >
            <Stack
              spacing={4}
              justify={'center'}
            >
              <Flex>
                <Box
                  borderLeft="2px"
                  color="white"
                >
                  <Box pl={5}>
                    <Heading
                      fontFamily={'Oswald'}
                      fontSize={{ base: "2xl", md: "5xl", xl: "6xl" }}
                    >
                      Gallery
                    </Heading>                                       
                  </Box>
                </Box>
              </Flex>
            </Stack>
            <Stack>
              <Swiper style={{
                '--swiper-navigation-color': '#000',
                '--swiper-pagination-color': '#fff'
              }}
                loop={true} spaceBetween={10} navigation={true}
                thumbs={{ swiper: thumbNailSwiper }}
                autoplay={{
                  "delay": 2500,
                  "disableOnInteraction": false
                }}
                className="mySwiper2">
                <SwiperSlide>
                  <img src="3.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="4.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="5.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="6.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="7.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="8.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="9.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="13.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="14.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="15.png" />
                </SwiperSlide>
              </Swiper>
              <Swiper onSwiper={setThumbNailSwiper} loop={true} spaceBetween={10} slidesPerView={4}
                freeMode={true} watchSlidesVisibility={true} watchSlidesProgress={true}
                className="mySwiper">
                <SwiperSlide>
                  <img src="3.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="4.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="5.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="6.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="7.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="8.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="9.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="13.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="14.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="15.png" />
                </SwiperSlide>
              </Swiper>
            </Stack>
          </SimpleGrid>
            </chakra.main>

            <chakra.footer>
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
            </chakra.footer>
        </>
    );
}