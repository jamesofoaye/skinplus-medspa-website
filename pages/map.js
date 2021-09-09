import {
  chakra, Box, Button,Stack,Image,Text,Icon,
} from "@chakra-ui/react";
import Head from 'next/head';
import Navbar from '../components/navbar'
import { PopupWidget } from "react-calendly";

const mapStyle = {
    width: '100%',
    height: '70vh'
}

const Maps = () => {
  return (
      <>
      <Head>
        <title>SkinPlus Medspa Ghana | Google Maps Direction</title>
        <meta name="description" content="SkinPlus Medspa provides a variety of 
        personalized services to its clientele to enhance their look and maintain
        youth."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <chakra.nav 
        style={{
            fontFamily: 'Lora'
            }}
        bgColor={"brand.green"}
      >
              <Navbar />
        </chakra.nav>

    <Box px={8} py={5} mx="auto">

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

      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
      >
        <chakra.h1
          fontFamily={'Oswald'}
          mb={6}
          fontSize={{ base: "2xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}          
        >
          SkinPlus Medspa Location on Google Maps
        </chakra.h1>
        <Stack
        direction={{base:"column",sm:"row"}}
          mb={{ base: 4, md: 8 }}
          spacing={2}
          justifyContent={{ sm: "left", md: "center" }}
        >
          <Button
            as="a"
            bgColor={'brand.green'}
            color={'white'}
            variant={'outline'}
            _hover={{
                bgColor: 'brand.olive'
            }}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "full", sm: "auto" }}
            mb={{ base: 2, sm: 0 }}
            size="lg"
            cursor="pointer"
          >
          <a href="https://goo.gl/maps/9b7q54865yi34By37">          
            Get Directions to our shop on Google Maps
            <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                clipRule="evenodd"
              />
            </Icon>
            </a>
          </Button>
        </Stack>
      </Box>
      <Box
      h={'250px'}
        w={"100%"}
        mx="auto"
        textAlign="center"
      >
      <iframe   
      style={mapStyle}   
      frameborder="0" 
      src="https://www.google.com/maps/embed/v1/place?q=5.634764591621313,+-0.14598714013385528&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
      >
      </iframe>      
      </Box>
    </Box>
    </>
  );
};

export default Maps;