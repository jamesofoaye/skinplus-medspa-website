import React, { useState } from "react";
import Head from 'next/head';
import {
  chakra,
  Box,
  Flex,
  useBreakpointValue,
  Icon,
  SimpleGrid,
  VStack,
  Text,
  Stack,
  Heading,
  Image
} from "@chakra-ui/react";
import Navbar from '../components/navbar'
import { IKImage, IKContext } from 'imagekitio-react'
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
          color={"green"}
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
          color={"black"}
          {...props}
        />
      </Flex>
    );
  };

  return (
    <>
      <Head>
        <title>SkinPlus Medspa Ghana | Services</title>
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
          bg={'white'}
          color={'black'}
        >
          <Box
            px={8}
            
          >
            <Box maxW={'3xl'} mx="auto"  textAlign={ "center"}>
                <chakra.h2
                  fontFamily={'Oswald'}
                  mb={3}
                  fontSize={{ base: "2xl", md: "5xl", xl: "6xl" }}
                  fontWeight="extrabold"
                  color={"black"}
                  lineHeight="shorter"
                  letterSpacing="tight"
                >
                  Our Services
                </chakra.h2>
                <chakra.p
                  mb={6}
                  fontSize={{ base: "lg", md: "xl" }}
                  color={"black"}
                >
                  SkinPlus uses ethically sourced, fair trade natural materials  that are expertly
                  crafted to match our client needs.
                </chakra.p>
              </Box>
            <SimpleGrid
              alignItems="center"
              columns={{ base: 1, md: 3 }}
            >
              <Image src={'/services-bg.svg'} width={500} height={200} />

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
                alignItems="start"
              >
                <Feature>Waxing</Feature>
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
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/1.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/2.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/3.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/5.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/6.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/7.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/9.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/10.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/11.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/14.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/16.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/17.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/18.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/19.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/21.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/30.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/31.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/33.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/34.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/36.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/37.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/38.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/39.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/40.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/41.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/42.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/43.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/44.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
            </Swiper>
            <Swiper onSwiper={setThumbNailSwiper} loop={true} spaceBetween={10} slidesPerView={4}
              freeMode={true} watchSlidesVisibility={true} watchSlidesProgress={true}
              className="mySwiper">
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/1.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/2.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/3.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/5.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/6.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/7.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/9.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/10.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/11.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/14.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/16.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/17.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/18.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/19.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/21.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/30.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/31.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/33.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/34.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/36.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/37.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/38.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/39.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/40.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/41.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/42.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/43.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
              </SwiperSlide>
              <SwiperSlide>
                <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                  <IKImage
                    path="/44.png"
                    transformation={[{ height: 300, width: 400 }]}
                    lqip={{ active: true }}
                    loading="lazy"
                    height="300"
                    width="400"
                  />
                </IKContext>
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