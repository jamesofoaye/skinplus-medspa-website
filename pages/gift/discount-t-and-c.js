import Head from 'next/head';
import {
  Container, SimpleGrid, Image, Flex, Heading, Box,
  Text, Stack, StackDivider, useColorModeValue,
} from '@chakra-ui/react';
import { PopupWidget } from "react-calendly";
import Navbar from '../../components/navbar';

const Terms = ({ text }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Text 
        fontWeight={600} 
        fontSize={'lg'}
      >
        {text}
      </Text>
    </Stack>
  );
};

export default function DiscountTermsAndConditionsPage() {
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

        <Box bgColor={"brand.green"} minH={'100vh'}>
            {/**Calendly Widget */}
            <PopupWidget
                branding
                color="#1f3d33"
                pageSettings={{
                    backgroundColor: '1f3d33',
                    hideEventTypeDetails: false,
                    hideGdprBanner: true,
                    hideLandingPageDetails: true,
                    primaryColor: 'c5ad8d',
                    textColor: 'ffffff'
                }}
                text="Book Free Appointment"
                textColor="#ffffff"
                url="https://calendly.com/skinplusmedspa/30min"
            />

            <nav>
            <Navbar />
            </nav>

            <Container maxW={'5xl'} py={12} bg>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Stack spacing={4}>
                        <Heading fontFamily={'Lora'}>
                            Discount Terms and Conditions 
                        </Heading>

                        <Stack
                            spacing={4}
                            divider={
                                <StackDivider
                                    borderColor={useColorModeValue('gray.100', 'gray.700')}
                                />
                            }>

                            <Terms
                                text={'1. Promotion is valid until July 31st 2022'}
                            />

                            <Terms
                                text={'2. Limited one promotion per person'}
                            />

                            <Terms
                                text={'3. Discount Card cannot be reused'}
                            />

                            <Terms
                                text={'4. Must present discount card at the time of service to receive discount'}
                            />

                            <Terms
                                text={'5. Promotion will be applied on Medspa services of up to GHC 2,000.00'}
                            />

                            <Terms
                                text={'6. Promotion applies to services only and does not apply to products purchased'}
                            />
                        </Stack>
                    </Stack>

                    <Flex>
                        <Image
                            rounded={'md'}
                            alt={'Terms image'}
                            src={'/t-and-c.png'}
                            objectFit={'cover'}
                        />
                    </Flex>
                </SimpleGrid>
            </Container>
        </Box>
    </>
  );
}