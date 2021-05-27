import Head from 'next/head'
//import Image from 'next/image'
import styles from '../styles/Home.module.css'
/**<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */
import {
  Box, Flex, Text, Icon, SimpleGrid, VStack, Stack, Image,
  Heading, List, ListItem, ListIcon, IconButton, Grid, Center, useBreakpointValue
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>SkinPlus Medspa</title>
        <meta name="description" content="SkinPlus Medspa provides a variety of 
        personalized services to its clientele to enhance their look and maintain
        youth."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box
          backgroundImage={useBreakpointValue({
            base: 'url(2.png)', md: 'url(1.png)'
          })}
          backgroundSize={'cover'}
          backgroundPosition={'center'}>
          <nav>
            <Navbar />
          </nav>
          <Flex w={'full'} h={'100vh'}>
            <VStack
              w={'full'}
              color={'white'}
              px={useBreakpointValue({ base: 4, md: 8 })}
              justify={'center'}>

              <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                <Heading
                  fontWeight={600}
                  fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                  lineHeight={1.2}>
                  SkinPlus Medspa
                </Heading>
              </Stack>
              <Stack direction={'row'}>
                <Text>Enhancing your natural beauty</Text>
              </Stack>
            </VStack>
          </Flex>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} id>
          <Stack spacing={4} justify={'center'} px={8}>
            <Heading fontSize={{ base: "xl", md: "3xl", xl: "6xl" }}>About Us</Heading>
            <Text fontSize={'lg'} >
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
          <Flex pt={4}>
            <Image
              alt={'Model Picture'}
              src={'8.png'}
              height={useBreakpointValue({ base: '520', "2xl": "950" })}
              pl={useBreakpointValue({ base: null, md: 48, "2xl": 98 })}
            />
          </Flex>
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 2 }}
          p={12}
          backgroundColor="brand.sand">
          <Flex >
            <Image
              alt={'Model Picture'}
              src={'3.png'}
              height={'370'}
              pl={40}
            />
          </Flex>
          <Stack justify={'center'} px={8}>
            <Text fontSize={'lg'} >
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

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} p={16}>
          <Stack spacing={4} justify={'center'} >
            <Heading fontSize={{ base: "xl", md: "3xl", xl: "6xl" }}>Our Services</Heading>
            <Text fontSize={'lg'} >
              SkinPlus uses ethically sourced, fair trade natural materials  that are expertly
              crafted to match our client needs.
            </Text>
          </Stack>
          <Stack>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Facial Care
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Vagina Rejuvenation
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Hair Restoration
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Cosmetic Products
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Acne Treatment
              </ListItem>
            </List>
          </Stack>
          <Stack>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Botox
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Fillers
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Non-evasive procedure
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Body Sculpting
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Platelet-Rich Plasma (PRP)
              </ListItem>
            </List>
          </Stack>
        </SimpleGrid>

        <Splide
          options={{
            rewind: true,
            perPage: 2,
            perMove: 1,
            gap: '1rem',
          }}>
          <SplideSlide>
            <img src="4.jpg" alt="Image 4" />
          </SplideSlide>
          <SplideSlide>
            <img src="5.jpg" alt="Image 5" />
          </SplideSlide>
        </Splide>
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
