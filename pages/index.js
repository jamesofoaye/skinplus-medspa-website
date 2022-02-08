import React, { useState } from "react";
import Head from 'next/head';
import { IKImage, IKContext } from 'imagekitio-react'
import {
  IoLogoFacebook, IoLogoTwitter, IoLogoInstagram,
} from 'react-icons/io5'

import {
  Box, Flex, Text, SimpleGrid, VStack, Stack, Image, chakra,
  Heading, List, ListItem, ListIcon, Textarea, Center,
  useBreakpointValue, FormControl, FormLabel, Button, Input,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

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

import Navbar from '../components/navbar'
import { PopupWidget } from "react-calendly";

export default function Home() {
  const [thumbNailSwiper, setThumbNailSwiper] = useState(null);

  return (
    <>
      <Head>
        <title>SkinPlus Medspa Ghana</title>
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
        <div id="top">
          <Box bgColor={"brand.green"}>
            <nav>
              <Navbar />
            </nav>

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
              url="https://calendly.com/skinplusmedspa/30min"
            />

            <Flex
              w={'full'}
              h={'100vh'}
            >
              <VStack
                w={'full'}
                color={'white'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                justify={'center'}>
                <Image
                  src="/logo.svg"
                  width={useBreakpointValue({ base: "200", md: "400" })}
                  height={useBreakpointValue({ base: "200", md: "400" })}
                />

                <Box direction={'row'}>
                  <Text
                    fontSize={useBreakpointValue({ base: "xl", md: "2xl" })}
                    color={"brand.sand"}
                    mt={5}
                  >
                    Enhancing your natural beauty
                  </Text>
                </Box>
              </VStack>
            </Flex>
          </Box>
        </div>

        <div id="about">
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={8} >
            <Stack
              spacing={4}
              justify={'center'}
              px={8}
              align={{ base: 'center' }}
            >
              <Heading
                fontFamily={'Oswald'}
                fontSize={{ base: "xl", md: "3xl", xl: "6xl" }}
                pt={{ base: 5, md: 0 }}>
                About Us
              </Heading>
              <Text
                fontSize={'lg'}
                pb={{ base: 5, md: 0 }}
              >
                At SkinPlus Medspa, our goal is to maintain your original
                beauty and physique and only enhance it so that you look
                like the best version of yourself; and maybe 10 years
                younger. SkinPlus Medspa provides a variety of
                personalized services to its clientele to enhance
                their look and maintain youth. Whether you are looking
                for low cost noninvasive procedures, solutions for the
                pigmentation, wrinkles or acne, or even looking to enhance
                certain facial features or your physique, we are the place
                for you. SkinPlus Medspa addresses all your skincare
                concerns, PLUS body, hair loss and sexual health needs.
                We are passionate about your satisfaction and strive to
                make you look as good as you feel.
              </Text>
            </Stack>
            <Flex
              pt={4}
              display={{ base: 'none', md: 'block' }}>

              <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                <chakra.div
                  pl={useBreakpointValue({ base: null, md: 48, "2xl": 98 })}
                >
                  <IKImage
                    path="/8.png"
                  />
                </chakra.div>
              </IKContext>
            </Flex>
          </SimpleGrid>
        </div>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          p={{ base: 0, md: 12 }}
          bgColor="brand.olive"
        >
          <Flex display={{ base: 'none', md: 'block' }}>
            <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
              <chakra.div
                px={40}
              >
                <IKImage
                  path="/3.png"
                />
              </chakra.div>
            </IKContext>
          </Flex>
          <Stack
            justify={'center'}
            px={8}>
            <Text
              fontSize={'lg'}
              color="white"
              py={{ base: 5, md: 0 }}
            >
              Owned and operated by physicians and certified professionals.
              We are committed to cleanliness, safety, comfort and
              professionalism. SkinPlus Medspa serve as a sanitary location
              staffed with trained doctors where you can receive exceptional
              cosmetic procedures. Recently, many individuals without any
              medical training are performing cosmetic procedures without
              proper education and experience. This can pose serious medical
              risks and cosmetic unpredictability - two things you don't want
              from a cosmetic procedure. SkinPlus Medspa guarantees credentialed
              physicians who have immense attention-to-detail, patience, and
              passion for aesthetics
              {''}
              <Text pt="5">
                Relax in our luxurious tranquil atmosphere and remain confident
                in your skilled aesthetic doctor to get the job done right the
                first time.
              </Text>
            </Text>
          </Stack>
        </SimpleGrid>

        <div id="services">
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={8}
            p={{ base: 8, md: 16 }}
            bgColor="brand.cream"
          >
            <Stack
              spacing={4}
              justify={'center'} >
              <Heading
                fontFamily={'Oswald'}
                fontSize={{ base: "xl", md: "3xl", xl: "6xl" }}
                align={{ base: 'center' }}
              >
                Our Services
              </Heading>
              <Text fontSize={'xl'} >
                SkinPlus uses ethically sourced, fair trade natural materials  that are expertly
                crafted to match our client needs.
              </Text>
            </Stack>
            <Stack>
              <List
                spacing={3}
                fontSize="xl">
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="brand.green" />
                  Facial Care
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="brand.green" />
                  Massage
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="brand.green" />
                  Vagina Rejuvenation
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="brand.green" />
                  Laser Hair Removal
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="brand.green" />
                  Cosmetic Products
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="brand.green" />
                  Acne Treatment
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="brand.green" />
                  Acne Scars
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="brand.green" />
                  Scar Removal
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="brand.green" />
                  Cellulite Treatment
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="brand.green" />
                  Scalp Pigmentation
                </ListItem>
              </List>
            </Stack>
            <Stack>
              <List
                spacing={3}
                fontSize="xl">
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="brand.green" />
                  Waxing
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="brand.green" />
                  Botox
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="brand.green" />
                  Fillers
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="brand.green" />
                  Mole Removal
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="brand.green" />
                  Stretch Mark
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="brand.green" />
                  PRP &amp; Microneedling
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="brand.green" />
                  Skin Tightening
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="brand.green" />
                  Derma Planning
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="brand.green" />
                  Chemical Peels
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="brand.green" />
                  Hyperpigmentation
                </ListItem>
              </List>
            </Stack>
          </SimpleGrid>
        </div>

        <Box
          bgColor="brand.brown"
          color="white">
          <Center>
            <Text
              fontSize={{ base: "2xl", md: "6xl" }}
              p={{ base: 8, md: 16 }}>
              "We celebrate natural
              <br />beauty and believe
              <br />everyone is beautiful
              <br />in their own way"
            </Text>
          </Center>
          <Center pb={5}>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              borderBottom="2px">
              DR. CLARA AKAYULI - CEO
            </Text>
          </Center>
        </Box>

        <div id="#">
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
                      Let&apos;s <br />
                      Connect
                    </Heading>
                    <Text fontSize={'xl'} py={{ base: 4, md: 8 }}>
                      We love hearing from our users.
                      Connect with us on social media to share your feedback and thoughts
                    </Text>
                    <Flex py={5}>
                      <a href="https://www.instagram.com/skinplusgh/" target="_blank">
                        <IoLogoInstagram size={30} />
                      </a>
                      <Box px={8}>
                        <a href="https://www.facebook.com/skinplusmedspa" target="_blank">
                          <IoLogoFacebook size={30} />
                        </a>
                      </Box>
                      <a href="https://twitter.com/skinplusmedspa" target="_blank">
                        <IoLogoTwitter size={30} />
                      </a>
                    </Flex>
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
        </div>

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
                  from 10am - 7pm <br />
                  NB: We are closed on Monday.
                </Text>

                <Text
                  fontSize={{ base: "xl", md: "2xl" }}
                  pl={{ base: 0, md: 5 }}
                >
                  <Text my={5}>
                    <address>
                      Ghana Location: East Legon, Boundary Road.<br />
                      First floor of Grocery Express.<br />
                      Opposite Dufie Court.<br />
                      Phone Number: <a href="tel:+233596068336">0596068336</a>
                    </address>
                  </Text>

                  <address>
                    USA Location: 195 Central Ave, Floor 1.<br />
                    Newark NJ 07103.<br />
                    Phone Number: <a href="tel:+186237142926">86237142926</a>
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
