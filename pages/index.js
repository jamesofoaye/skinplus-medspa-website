import React, { useState } from 'react';
import Head from 'next/head';
import { IKImage, IKContext } from 'imagekitio-react';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
} from 'react-icons/io5';

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
  Grid,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/thumbs/thumbs.min.css';
// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs, Autoplay } from 'swiper/core';
// install Swiper modules
SwiperCore.use([Navigation, Thumbs, Autoplay]);

import Navbar from '../components/navbar';
import { PopupWidget } from 'react-calendly';

import BrandHead from '../components/brandHead';
import Footer from '../components/footer';

export default function Home() {
  const [thumbNailSwiper, setThumbNailSwiper] = useState(null);

  return (
    <>
      <Head>
        <title>SkinPlus Medspa Ghana</title>
        <meta
          name="description"
          content="SkinPlus Medspa provides a variety of 
        personalized services to its clientele to enhance their look and maintain
        youth."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          fontFamily: 'Lora',
        }}>
        <div id="top" mx={'auto'}>
          <Box bgColor={'brand.cream'}>
            <chakra.nav bgColor={'brand.green'}>
              <BrandHead />
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
                textColor: 'ffffff',
              }}
              text="Book Free Consultation"
              textColor="#ffffff"
              url="https://calendly.com/skinplusmedspa/30min"
            />

            <Flex justify={'center'} mx={'auto'}>
              <Box
                display={{ base: '', lg: 'flex' }}
                w={'full'}
                h={{ base: '60vh', lg: '80vh' }}
                align="center"
                justify="space-between"
                mb={{ base: '10rem' }}>
                <Flex
                  justify={'center'}
                  mt={{ base: '10px', lg: '200px' }}
                  w={{ base: 'auto', lg: '100%' }}
                  mr={{ base: '0', lg: '-180px' }}
                  px={{ base: '0', lg: '2rem' }}>
                  {' '}
                  <Text
                    fontSize={useBreakpointValue({ base: 'xl', md: '3xl' })}
                    color={'brand.black'}
                    fontWeight={'60%'}
                    textAlign={'center'}>
                    Enhancing your natural beauty with
                    <br />
                    <Text fontWeight={'bold'} textColor={'brand.green'}>
                      SKIN PLUS MED SPA
                    </Text>
                  </Text>
                </Flex>
                <Flex
                  w={{ base: 'auto', lg: '100%' }}
                  mt={{ base: '5rem', lg: '0' }}
                  align="center"
                  justify={{ base: 'center', lg: 'end' }}>
                  <Image
                    src="skin.png"
                    boxSize={{ base: '70vh', lg: '100vh' }}
                    mt={{ base: '-5rem', lg: '10rem' }}
                    objectFit="cover"
                    display={'flex'}
                    justifyContent={{ base: 'center', lg: 'end' }}
                    alt="Skin care"
                  />
                </Flex>
              </Box>
            </Flex>
          </Box>
        </div>

        <div id="welcomeWord">
          <Box
            mx={'auto'}
            h={{ base: 'auto', lg: '30vh' }}
            mt={'30px'}
            mb={'0px'}>
            <Box
              w={{ base: '', lg: '80%' }}
              mx={{ base: '', lg: 'auto' }}
              display={{ lg: 'flex' }}
              justify={{ base: 'none', lg: 'center' }}>
              <Box>
                <Image
                  src="welcome.jpg"
                  alt="skin plus"
                  borderRadius={{ base: '0', lg: '30px' }}
                  w={{ base: 'auto', lg: '60vw' }}
                />
              </Box>
              <Box
                borderRadius={'10px'}
                bgColor={'white'}
                boxShadow={'md'}
                h={{ base: 'base', lg: '30vh' }}
                w={{ base: 'auto', lg: '70%' }}
                ml={{ base: '0px', md: '0px', lg: '-80px' }}
                mt={{ base: '5px', lg: '30px' }}
                px={'4'}>
                <Text
                  textColor={'brand.green'}
                  fontSize={'xl'}
                  fontFamily={'Oswald'}
                  textAlign={'center'}>
                  Quality and Comfort
                  <Text
                    fontSize={{ base: 'sm', md: 'sm', xl: 'lg' }}
                    fontFamily={'sans-serif'}
                    textColor={'brand.gray'}>
                    Experience the epitome of luxury at our spa, where
                    impeccable quality and utmost comfort await you. Our expert
                    team ensures exceptional service, while our state-of-the-art
                    facilities and premium products create an ambiance of
                    relaxation. Discover a sanctuary where quality and comfort
                    merge, leaving you revitalized and ready to embrace the
                    world.
                  </Text>
                </Text>
              </Box>
            </Box>
          </Box>
        </div>

        <div id="about">
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            mb={'2rem'}
            spacing={4}
            color={'black'}
            mt={{ base: '1rem', lg: '10rem' }}
            ml={'2rem'}
            w={{ base: '100%', lg: '90%' }}
            mx={'auto'}
            h={'auto'}>
            <Stack
              mt={{ base: '0', lg: '0rem' }}
              py={{ base: '2rem' }}
              bgColor={'brand.cream'}
              spacing={2}
              justify={'center'}
              px={4}
              align={{ base: 'justify' }}>
              <Heading
                fontFamily={'Oswald'}
                fontSize={{ base: 'xl', md: '2xl', xl: '4xl' }}
                textColor={'brand.green'}
                pt={{ base: 5, md: 0 }}>
                About Us
              </Heading>
              <Text fontSize={'lg'} pb={{ base: 5, md: 0 }}>
                At SkinPlus Medspa, our goal is to maintain your original beauty
                and physique and only enhance it so that you look like the best
                version of yourself; and maybe 10 years younger. SkinPlus Medspa
                provides a variety of personalized services to its clientele to
                enhance their look and maintain youth. Whether you are looking
                for low cost noninvasive procedures, solutions for the
                pigmentation, wrinkles or acne, or even looking to enhance
                certain facial features or your physique, we are the place for
                you. SkinPlus Medspa addresses all your skincare concerns, PLUS
                body, hair loss and sexual health needs. We are passionate about
                your satisfaction and strive to make you look as good as you
                feel.
              </Text>
              <Link
                p={2}
                href={'/about'}
                fontSize={'sm'}
                fontWeight={500}
                color={'white'}
                _hover={{
                  textDecoration: 'none',
                  opacity: '70%',
                }}
                px={'4'}
                py={'2'}
                bg={'brand.green'}
                w={'7rem'}
                textAlign={'center'}>
                Read More
              </Link>
            </Stack>
            <Flex pt={4} display={{ base: 'none', md: 'block' }}>
              <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                <chakra.div
                  pl={useBreakpointValue({ base: null, md: 0, '2xl': 98 })}>
                  <IKImage path="/8.png" />
                </chakra.div>
              </IKContext>
            </Flex>
          </SimpleGrid>
        </div>

        <SimpleGrid columns={{ base: 1, md: 2 }} p={{ base: 0, md: 12 }}>
          <Flex display={{ base: 'none', md: 'block' }}>
            <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
              <chakra.div px={20}>
                <IKImage path="/3.png" />
              </chakra.div>
            </IKContext>
          </Flex>
          <Stack justify={'center'} px={4} bgColor={'brand.cream'}>
            <Text fontSize={'lg'} py={{ base: 5, md: 0 }}>
              Owned and operated by physicians and certified professionals. We
              are committed to cleanliness, safety, comfort and professionalism.
              SkinPlus Medspa serve as a sanitary location staffed with trained
              doctors where you can receive exceptional cosmetic procedures.
              Recently, many individuals without any medical training are
              performing cosmetic procedures without proper education and
              experience. This can pose serious medical risks and cosmetic
              unpredictability - two things you don't want from a cosmetic
              procedure. SkinPlus Medspa guarantees credentialed physicians who
              have immense attention-to-detail, patience, and passion for
              aesthetics
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
            bg="brand.cream"
            color={'black'}>
            <Stack spacing={4} justify={'center'}>
              <Heading
                fontFamily={'Oswald'}
                fontSize={{ base: 'xl', md: '3xl', xl: '6xl' }}
                align={{ base: 'center' }}>
                Our Services
              </Heading>
              <Text fontSize={'xl'}>
                SkinPlus uses ethically sourced, fair trade natural materials
                that are expertly crafted to match our client needs.
              </Text>
            </Stack>
            <Stack>
              <List spacing={3} fontSize="xl">
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
              <List spacing={3} fontSize="xl">
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

        <Box bgColor="brand.green" color="white">
          <Center>
            <Text
              fontSize={{ base: '2xl', md: '6xl' }}
              p={{ base: 8, md: 16 }}
              textAlign={'center'}>
              "We celebrate natural beauty and believe
              <br />
              everyone is beautiful
              <br />
              in their own way"
            </Text>
          </Center>
          <Center pb={5}>
            <Text fontSize={{ base: 'xl', md: '2xl' }} borderBottom="2px">
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
            bgColor={'brand.olive'}>
            <Stack spacing={4} justify={'center'}>
              <Flex>
                <Box borderLeft="2px" color="white">
                  <Box pl={5}>
                    <Heading
                      fontFamily={'Oswald'}
                      fontSize={{ base: '2xl', md: '5xl', xl: '6xl' }}>
                      Let&apos;s <br />
                      Connect
                    </Heading>
                    <Text fontSize={'xl'} py={{ base: 4, md: 8 }}>
                      We love hearing from our users. Connect with us on social
                      media to share your feedback and thoughts
                    </Text>
                    <Flex py={5}>
                      <a
                        href="https://www.instagram.com/skinplusgh/"
                        target="_blank">
                        <IoLogoInstagram size={30} />
                      </a>
                      <Box px={8}>
                        <a
                          href="https://www.facebook.com/skinplusmedspa"
                          target="_blank">
                          <IoLogoFacebook size={30} />
                        </a>
                      </Box>
                      <a
                        href="https://twitter.com/skinplusmedspa"
                        target="_blank">
                        <IoLogoTwitter size={30} />
                      </a>
                    </Flex>
                  </Box>
                </Box>
              </Flex>
            </Stack>
            <Stack>
              <Swiper
                style={{
                  '--swiper-navigation-color': '#000',
                  '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbNailSwiper }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
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
              <Swiper
                onSwiper={setThumbNailSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesVisibility={true}
                watchSlidesProgress={true}
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
          bgColor="brand.green"
          color="white">
          <Stack spacing={4} justify={'center'}>
            <Flex>
              <Box>
                <Box pl={5} py={{ base: 4, md: 0 }}>
                  <Heading
                    fontFamily={'Oswald'}
                    display={{ base: 'none', md: 'block' }}
                    fontSize={{ base: 'xl', md: '3xl', xl: '4xl' }}>
                    Get In Touch
                  </Heading>
                  <Heading
                    fontFamily={'Oswald'}
                    display={{ base: 'block', md: 'none' }}
                    fontSize={{ base: 'xl', md: '3xl', xl: '6xl' }}>
                    Get In Touch
                  </Heading>
                </Box>
                <Text
                  fontSize={{ base: 'lg', md: 'xl' }}
                  pl={{ base: 0, md: 5 }}>
                  We are open on Tuesday - Sunday <br />
                  from 10am - 7pm <br />
                  NB: We are closed on Monday.
                </Text>

                <Text
                  fontSize={{ base: 'lg', md: 'xl' }}
                  pl={{ base: 0, md: 5 }}>
                  <Text my={5}>
                    <address>
                      Ghana Location: East Legon, Boundary Road.
                      <br />
                      First floor of Grocery Express.
                      <br />
                      Opposite Dufie Court.
                      <br />
                      Phone Number: <a href="tel:+233596068336">059 606 8336</a>
                    </address>
                  </Text>

                  <address>
                    USA Location: 195 Central Ave, Floor 1.
                    <br />
                    Newark NJ 07103.
                    <br />
                    Phone Number: <a href="tel:+186237142926">862 371 42926</a>
                  </address>
                </Text>
              </Box>
            </Flex>
          </Stack>
          <Stack py={5}>
            <FormControl>
              <FormLabel fontSize={{ md: 'xl' }}>Name</FormLabel>
              <Input
                type="text"
                name="name"
                _focus={{
                  borderColor: 'brand.sand',
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize={{ md: 'xl' }}>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                _focus={{
                  borderColor: 'brand.sand',
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize={{ md: 'xl' }}>Phone Number</FormLabel>
              <Input
                type="tel"
                name="phone number"
                _focus={{
                  borderColor: 'brand.sand',
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize={{ md: 'xl' }}>Message</FormLabel>
              <Textarea
                name="message"
                rows="7"
                columns="30"
                _focus={{
                  borderColor: 'brand.sand',
                }}></Textarea>
            </FormControl>
            <Stack spacing={6}>
              <Button
                bgColor={'brand.green'}
                variant={'outline'}
                fontSize={{ md: 'xl' }}
                _hover={{
                  bgColor: 'brand.olive',
                }}>
                Send
              </Button>
            </Stack>
          </Stack>
        </SimpleGrid>
      </main>
      <Footer />
    </>
  );
}
