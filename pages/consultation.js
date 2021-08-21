import Head from 'next/head';
import {
    chakra, Box, Text, useBreakpointValue
} from "@chakra-ui/react";
import Navbar from '../components/navbar'
import { InlineWidget } from "react-calendly";

export default function Consultation() {
    return (
        <>
            <Head>
                <title>SkinPlus Medspa | Consultation</title>
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
            <InlineWidget
                pageSettings={{
                    backgroundColor: '1f3d33',
                    hideEventTypeDetails: false,
                    hideGdprBanner: true,
                    hideLandingPageDetails: false,
                    primaryColor: 'c5ad8d',
                    textColor: 'ffffff'
                }}
                styles={{
                    height: '630px',
                    minWidth: '320px'
                }}
                url="https://calendly.com/jamesofoaye/consultation"
            />

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