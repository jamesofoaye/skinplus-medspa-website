import Head from 'next/head';
import {
    Box, Flex, Text, SimpleGrid, chakra, Stack,
    Image, Heading, useBreakpointValue
} from '@chakra-ui/react';
import Navbar from '../components/navbar'

export default function About() {
    return (
        <>
            <Head>
                <title>SkinPlus Medspa | About Us</title>
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
                <chakra.nav bgColor={"brand.green"}>
                    <Navbar />
                </chakra.nav>

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
                            <Image
                                alt={'Model Picture'}
                                src={'8.png'}
                                height={useBreakpointValue({ base: '520', "2xl": "950" })}
                                pl={useBreakpointValue({ base: null, md: 48, "2xl": 98 })}
                            />
                        </Flex>
                    </SimpleGrid>
                </div>

                <SimpleGrid
                    columns={{ base: 1, md: 2 }}
                    p={{ base: 0, md: 12 }}
                    bgColor="brand.olive"
                >
                    <Flex display={{ base: 'none', md: 'block' }}>
                        <Image
                            alt={'Model Picture'}
                            src={'3.png'}
                            height={'370'}
                            pl={40}
                        />
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
