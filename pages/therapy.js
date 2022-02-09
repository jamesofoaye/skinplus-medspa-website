import Head from 'next/head';
import Link from 'next/link'
import {
    Box, Button, chakra, Flex, Image,
    SimpleGrid, VStack, Icon,
} from "@chakra-ui/react";
import { PopupWidget } from "react-calendly";
import Navbar from '../components/navbar'
import { IKImage, IKContext } from 'imagekitio-react'

export default function Therapy() {
    const Feature = (props) => {
        return (
            <Flex>
                <Icon
                    boxSize={5}
                    mt={1}
                    mr={2}
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
                    color={"gray.700"}
                    {...props}
                />
            </Flex>
        );
    };


    return (
        <>
            <Head>
                <title>SkinPlus Medspa Ghana | IV Therapy</title>
                <meta name="description" content="SkinPlus Medspa provides a variety of 
                personalized services to its clientele to enhance their look and maintain
                youth."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <chakra.nav
                fontFamily={'Lora'}
                bgColor={"brand.green"}
            >
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
                url="https://calendly.com/skinplusmedspa/30min"
            />

            <Flex
                px={{ base: 5, md: 8 }}
                py={{ md: 10 }}
                w="full"
                justifyContent="center"
                alignItems="center"
                pos="absolute"
                fontFamily={'Lora'}
                bg="white"
            >
                <Box
                    p={{ md: 20 }}
                    py={{ base: 5 }}
                    mx="auto"
                >
                    <SimpleGrid
                        alignItems="start"
                        columns={{ base: 1, md: 2 }}
                        mb={24}
                        spacingY={{ base: 10, md: 32 }}
                        spacingX={{ base: 10, md: 24 }}
                    >
                        <Box>
                            <chakra.h2
                                fontFamily={'Oswald'}
                                mb={4}
                                fontSize={{ base: "2xl", md: "4xl" }}
                                fontWeight="extrabold"
                                textAlign={{ base: "center", md: "left" }}
                                color={"gray.900"}
                                lineHeight={{ md: "shorter" }}
                                textShadow="2px 0 currentcolor"
                            >
                                What Is IV Therapy?
                            </chakra.h2>
                            <chakra.p
                                mb={5}
                                textAlign={{ base: "center", sm: "left" }}
                                color={"gray.600"}
                                fontSize={{ md: "lg" }}
                            >
                                IV therapy is a type of therapy commonly used for its wide
                                range of health benefits, which can include anti-aging, improved
                                immune system minimized anxiety, reversed symptoms of hangovers
                                and more. Although many may believe that nutrient deficiencies
                                aren’t so common anymore, there are still many individuals who
                                aren’t getting the essential nutrients our bodies need to
                                perform optimally.

                                Because IV treatment is administered directly into the veins,
                                the results may be faster than those of oral or other traditional
                                medicines. Physicians believe IV nutrient therapy can be safe,
                                effective and restorative, and can be customized to suit the
                                unique needs of each patient individually.
                            </chakra.p>
                            <VStack
                                direction="column"
                                flexGrow={1}
                                spacing={2}
                                alignItems="start"
                                mb={6}
                            >
                                <Feature>Boosts Energy</Feature>
                                <Feature>Detoxifies the body</Feature>
                                <Feature>Enhances the immune system</Feature>
                                <Feature>Decreases artery plaque</Feature>
                            </VStack>
                            <Link href="/consultation">
                                <Button
                                    w={{ base: "full", sm: "auto" }}
                                    size="lg"
                                    bgColor={'brand.green'}
                                    color={'white'}
                                    variant={'outline'}
                                    _hover={{
                                        bgColor: 'brand.olive'
                                    }}
                                >
                                    Book Now
                                </Button>
                            </Link>
                        </Box>
                        <Box
                            w="full"
                            h="full"
                            my={{ md: 24 }}
                        >
                            <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                                <IKImage
                                    path="/iv_saline_bags.jpg"
                                    lqip={{ active: true }}
                                    loading="lazy"
                                />
                            </IKContext>
                        </Box>
                    </SimpleGrid>

                    <SimpleGrid
                        alignItems="center"
                        columns={{ base: 1, md: 2 }}
                        flexDirection="column-reverse"
                        mb={24}
                        spacingY={{ base: 10, md: 32 }}
                        spacingX={{ base: 10, md: 24 }}
                    >
                        <Box order={{ base: "none", md: 2 }}>
                            <chakra.h2
                                fontFamily={'Oswald'}
                                mb={4}
                                fontSize={{ base: "2xl", md: "4xl" }}
                                fontWeight="extrabold"
                                textAlign={{ base: "center", md: "left" }}
                                color={"gray.900"}
                                lineHeight={{ md: "shorter" }}
                            >
                                Brainstorm IV Kit
                            </chakra.h2>
                            <chakra.p
                                mb={5}
                                textAlign={{ base: "center", sm: "left" }}
                                color={"gray.600"}
                                fontSize={{ md: "lg" }}
                            >
                                Combining folic acid, B12, L-taurine and alpha-lipoic
                                acid, the Brainstorm IV kit may help improve overall
                                brain function, increase memory recall and improve
                                certain aspects of learning.
                            </chakra.p>
                            <VStack
                                direction="column"
                                flexGrow={1}
                                spacing={2}
                                alignItems="start"
                                mb={6}
                            >
                                <Feature>Improve overall brain function</Feature>
                                <Feature>Increase memory recall</Feature>
                                <Feature>Enhance certain aspects of learning</Feature>
                            </VStack>
                            <Link href="/consultation">
                                <Button
                                    w={{ base: "full", sm: "auto" }}
                                    size="lg"
                                    bgColor={'brand.green'}
                                    color={'white'}
                                    variant={'outline'}
                                    _hover={{
                                        bgColor: 'brand.olive'
                                    }}
                                >
                                    Book Now
                                </Button>
                            </Link>
                        </Box>
                        <Box
                            w="full"
                            h="full"
                        >
                            <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                                <IKImage
                                    path="/Brainstorm-IV-Kit-Updated.png"
                                    lqip={{ active: true }}
                                    loading="lazy"
                                />
                            </IKContext>
                        </Box>
                    </SimpleGrid>

                    <SimpleGrid
                        alignItems="start"
                        columns={{ base: 1, md: 2 }}
                        mb={24}
                        spacingY={{ base: 10, md: 32 }}
                        spacingX={{ base: 10, md: 24 }}
                    >
                        <Box>
                            <chakra.h2
                                fontFamily={'Oswald'}
                                mb={4}
                                fontSize={{ base: "2xl", md: "4xl" }}
                                fontWeight="extrabold"
                                textAlign={{ base: "center", md: "left" }}
                                color={"gray.900"}
                                lineHeight={{ md: "shorter" }}
                                textShadow="2px 0 currentcolor"
                            >
                                Myer's Cocktail Premix
                            </chakra.h2>
                            <chakra.p
                                mb={5}
                                textAlign={{ base: "center", sm: "left" }}
                                color={"gray.600"}
                                fontSize={{ md: "lg" }}
                            >
                                Comprised of essential multivitamins and other nutrients,
                                this cocktail premix is designed to help alleviate chronic
                                symptoms, including on-going pain, asthma and more.
                            </chakra.p>
                            <VStack
                                direction="column"
                                flexGrow={1}
                                spacing={2}
                                alignItems="start"
                                mb={6}
                            >
                                <Feature>Helps alleviate stress</Feature>
                                <Feature>Helps reduce migraines</Feature>
                                <Feature>Improves immunity</Feature>
                                <Feature>Reduces chronic pain</Feature>
                            </VStack>
                            <Link href="/consultation">
                                <Button
                                    w={{ base: "full", sm: "auto" }}
                                    size="lg"
                                    bgColor={'brand.green'}
                                    color={'white'}
                                    variant={'outline'}
                                    _hover={{
                                        bgColor: 'brand.olive'
                                    }}
                                >
                                    Book Now
                                </Button>
                            </Link>
                        </Box>
                        <Box
                            w="full"
                            h="full"
                        >
                            <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                                <IKImage
                                    path="/IV-Bag-Myers-Cocktail.png"
                                    lqip={{ active: true }}
                                    loading="lazy"
                                />
                            </IKContext>
                        </Box>
                    </SimpleGrid>

                    <SimpleGrid
                        alignItems="center"
                        columns={{ base: 1, md: 2 }}
                        flexDirection="column-reverse"
                        mb={24}
                        spacingY={{ base: 10, md: 32 }}
                        spacingX={{ base: 10, md: 24 }}
                    >
                        <Box order={{ base: "none", md: 2 }}>
                            <chakra.h2
                                fontFamily={'Oswald'}
                                mb={4}
                                fontSize={{ base: "2xl", md: "4xl" }}
                                fontWeight="extrabold"
                                textAlign={{ base: "center", md: "left" }}
                                color={"gray.900"}
                                lineHeight={{ md: "shorter" }}
                            >
                                Inner Beauty IV Kit
                            </chakra.h2>
                            <chakra.p
                                mb={5}
                                textAlign={{ base: "center", sm: "left" }}
                                color={"gray.600"}
                                fontSize={{ md: "lg" }}
                            >
                                Designed to help bring out radiance and natural glow,
                                this kit includes six treatments of premium-quality
                                compounds believed to fortify hair, skin and nails,
                                reduce wrinkles and quench skin from the inside out.
                            </chakra.p>
                            <VStack
                                direction="column"
                                flexGrow={1}
                                spacing={2}
                                alignItems="start"
                                mb={6}
                            >
                                <Feature>Fortifies hair, skin and nails</Feature>
                                <Feature>Reduces wrinkles</Feature>
                                <Feature>Quenches tired skin</Feature>
                            </VStack>
                            <Link href="/consultation">
                                <Button
                                    w={{ base: "full", sm: "auto" }}
                                    size="lg"
                                    bgColor={'brand.green'}
                                    color={'white'}
                                    variant={'outline'}
                                    _hover={{
                                        bgColor: 'brand.olive'
                                    }}
                                >
                                    Book Now
                                </Button>
                            </Link>
                        </Box>
                        <Box
                            w="full"
                            h="full"
                        >
                            <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                                <IKImage
                                    path="/IV-Bag-Inner-Bauty.png"
                                    lqip={{ active: true }}
                                    loading="lazy"
                                />
                            </IKContext>
                        </Box>
                    </SimpleGrid>

                    <SimpleGrid
                        alignItems="start"
                        columns={{ base: 1, md: 2 }}
                        mb={24}
                        spacingY={{ base: 10, md: 32 }}
                        spacingX={{ base: 10, md: 24 }}
                    >
                        <Box>
                            <chakra.h2
                                fontFamily={'Oswald'}
                                mb={4}
                                fontSize={{ base: "2xl", md: "4xl" }}
                                fontWeight="extrabold"
                                textAlign={{ base: "center", md: "left" }}
                                color={"gray.900"}
                                lineHeight={{ md: "shorter" }}
                                textShadow="2px 0 currentcolor"
                            >
                                Immunity IV Kit
                            </chakra.h2>
                            <chakra.p
                                mb={5}
                                textAlign={{ base: "center", sm: "left" }}
                                color={"gray.600"}
                                fontSize={{ md: "lg" }}
                            >
                                Designed to help your immune system, prevent illnesses
                                and make you feel better faster after getting sick, this
                                IV kit includes six treatments of premium-quality compounds
                                that can help improve immunity and promote optimal wellness.
                            </chakra.p>
                            <VStack
                                direction="column"
                                flexGrow={1}
                                spacing={2}
                                alignItems="start"
                                mb={6}
                            >
                                <Feature>Protects against infection</Feature>
                                <Feature>Improves healing time</Feature>
                                <Feature>Builds up your immune system</Feature>
                                <Feature>Reduces duration of illnesses</Feature>
                            </VStack>
                            <Link href="/consultation">
                                <Button
                                    w={{ base: "full", sm: "auto" }}
                                    size="lg"
                                    bgColor={'brand.green'}
                                    color={'white'}
                                    variant={'outline'}
                                    _hover={{
                                        bgColor: 'brand.olive'
                                    }}
                                >
                                    Book Now
                                </Button>
                            </Link>
                        </Box>
                        <Box
                            w="full"
                            h="full"
                        >
                            <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                                <IKImage
                                    path="/IV-Bag-Immunity.png"
                                    lqip={{ active: true }}
                                    loading="lazy"
                                />
                            </IKContext>
                        </Box>
                    </SimpleGrid>

                    <SimpleGrid
                        alignItems="center"
                        columns={{ base: 1, md: 2 }}
                        flexDirection="column-reverse"
                        mb={24}
                        spacingY={{ base: 10, md: 32 }}
                        spacingX={{ base: 10, md: 24 }}
                    >
                        <Box order={{ base: "none", md: 2 }}>
                            <chakra.h2
                                fontFamily={'Oswald'}
                                mb={4}
                                fontSize={{ base: "2xl", md: "4xl" }}
                                fontWeight="extrabold"
                                textAlign={{ base: "center", md: "left" }}
                                color={"gray.900"}
                                lineHeight={{ md: "shorter" }}
                            >
                                Get-Up-And-Go IV Kit
                            </chakra.h2>
                            <chakra.p
                                mb={5}
                                textAlign={{ base: "center", sm: "left" }}
                                color={"gray.600"}
                                fontSize={{ md: "lg" }}
                            >
                                Designed to help kickstart your metabolism and feel more
                                energized, this IV kit includes six treatments of
                                premium-quality compounds believed to help burn fat,
                                boost metabolism and provide the nutrients needed for
                                optimal wellness.
                            </chakra.p>
                            <VStack
                                direction="column"
                                flexGrow={1}
                                spacing={2}
                                alignItems="start"
                                mb={6}
                            >
                                <Feature>Helps burn fat</Feature>
                                <Feature>Restores energy</Feature>
                                <Feature>Boosts your metabolism</Feature>
                                <Feature>Improves performance</Feature>
                            </VStack>
                            <Link href="/consultation">
                                <Button
                                    w={{ base: "full", sm: "auto" }}
                                    size="lg"
                                    bgColor={'brand.green'}
                                    color={'white'}
                                    variant={'outline'}
                                    _hover={{
                                        bgColor: 'brand.olive'
                                    }}
                                >
                                    Book Now
                                </Button>
                            </Link>
                        </Box>
                        <Box
                            w="full"
                            h="full"
                        >
                            <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                                <IKImage
                                    path="/IV-Bag-Get-Up-And-Go.png"
                                    lqip={{ active: true }}
                                    loading="lazy"
                                />
                            </IKContext>
                        </Box>
                    </SimpleGrid>

                    <SimpleGrid
                        alignItems="start"
                        columns={{ base: 1, md: 2 }}
                        mb={24}
                        spacingY={{ base: 10, md: 32 }}
                        spacingX={{ base: 10, md: 24 }}
                    >
                        <Box>
                            <chakra.h2
                                fontFamily={'Oswald'}
                                mb={4}
                                fontSize={{ base: "2xl", md: "4xl" }}
                                fontWeight="extrabold"
                                textAlign={{ base: "center", md: "left" }}
                                color={"gray.900"}
                                lineHeight={{ md: "shorter" }}
                                textShadow="2px 0 currentcolor"
                            >
                                Recovery &amp; Performance IV Kit
                            </chakra.h2>
                            <chakra.p
                                mb={5}
                                textAlign={{ base: "center", sm: "left" }}
                                color={"gray.600"}
                                fontSize={{ md: "lg" }}
                            >
                                Designed to help shorten the time of recovery after
                                an injury and potentially improve athletic ability,
                                this kit includes six treatments of premium-quality
                                compounds that can help promote improved performance
                                and overall wellness.
                            </chakra.p>
                            <VStack
                                direction="column"
                                flexGrow={1}
                                spacing={2}
                                alignItems="start"
                                mb={6}
                            >
                                <Feature>Decreases recovery time</Feature>
                                <Feature>Enhances athletic performance</Feature>
                                <Feature>Replenishes essential nutrients</Feature>
                                <Feature>Reduces inflammation</Feature>
                            </VStack>
                            <Link href="/consultation">
                                <Button
                                    w={{ base: "full", sm: "auto" }}
                                    size="lg"
                                    bgColor={'brand.green'}
                                    color={'white'}
                                    variant={'outline'}
                                    _hover={{
                                        bgColor: 'brand.olive'
                                    }}
                                >
                                    Book Now
                                </Button>
                            </Link>
                        </Box>
                        <Box
                            w="full"
                            h="full"
                        >
                            <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                                <IKImage
                                    path="/IV-Bag-Recovery.png"
                                    lqip={{ active: true }}
                                    loading="lazy"
                                />
                            </IKContext>
                        </Box>
                    </SimpleGrid>

                    <SimpleGrid
                        alignItems="center"
                        columns={{ base: 1, md: 2 }}
                        flexDirection="column-reverse"
                        mb={24}
                        spacingY={{ base: 10, md: 32 }}
                        spacingX={{ base: 10, md: 24 }}
                    >
                        <Box order={{ base: "none", md: 2 }}>
                            <chakra.h2
                                fontFamily={'Oswald'}
                                mb={4}
                                fontSize={{ base: "2xl", md: "4xl" }}
                                fontWeight="extrabold"
                                textAlign={{ base: "center", md: "left" }}
                                color={"gray.900"}
                                lineHeight={{ md: "shorter" }}
                            >
                                Reboot IV Kit
                            </chakra.h2>
                            <chakra.p
                                mb={5}
                                textAlign={{ base: "center", sm: "left" }}
                                color={"gray.600"}
                                fontSize={{ md: "lg" }}
                            >
                                Replenish your body and combat hangover-related symptoms
                                like dehydration, headache, and nausea with our Reboot
                                IV Kit. This premix is one of our various IV nutrition
                                therapy offerings and includes six treatments of premium-quality
                                compounds designed to replenish the fluids needed for optimal wellness.
                            </chakra.p>
                            <VStack
                                direction="column"
                                flexGrow={1}
                                spacing={2}
                                alignItems="start"
                                mb={6}
                            >
                                <Feature>Rehydrates your body</Feature>
                                <Feature>Eases nausea</Feature>
                                <Feature>Reduces inflammation</Feature>
                                <Feature>Fights fatigue</Feature>
                            </VStack>
                            <Link href="/consultation">
                                <Button
                                    w={{ base: "full", sm: "auto" }}
                                    size="lg"
                                    bgColor={'brand.green'}
                                    color={'white'}
                                    variant={'outline'}
                                    _hover={{
                                        bgColor: 'brand.olive'
                                    }}
                                >
                                    Book Now
                                </Button>
                            </Link>
                        </Box>
                        <Box
                            w="full"
                            h="full"
                        >
                            <IKContext urlEndpoint="https://ik.imagekit.io/4imk7wydrsn/">
                                <IKImage
                                    path="/IV-Bag-Reboot.png"
                                    lqip={{ active: true }}
                                    loading="lazy"
                                />
                            </IKContext>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Flex>
        </>
    );
}