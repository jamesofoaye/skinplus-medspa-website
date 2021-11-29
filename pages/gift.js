import { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'
import {
    chakra, Box, Image, Flex, Link, useToast,
    FormControl, FormLabel, Heading, Select,
    FormErrorMessage, Button, Stack, useColorModeValue,
    Input, Textarea
} from "@chakra-ui/react";
import { useForm } from 'react-hook-form';
import {collection, query, where, getDoc, setDoc, doc} from 'firebase/firestore'
import { db } from '../library/firebase'
import { async } from '@firebase/util';

const Gift = () => {
    const toast = useToast()
    const {
        handleSubmit, register, reset,
        formState: { errors, isSubmitting }
    } = useForm();

    const [giftType, setGiftType] = useState("");
    const [bg, setBg] = useState("");
    const [bgMobile, setBgMobile] = useState("");
    const [code, setCode] = useState("");
    const [status, setStatus] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [message, setTo] = useState("");
    
    const onSubmit = async (values) => {
        try {
            const dataRef = collection(db, "xmas-gift-card-program")
            const q = query(dataRef, where("code", "==", values.code))
            const querySnapshot = await getDoc(q)
            setGiftType(querySnapshot.data().giftType)
            setCode(querySnapshot.data().code)
            setStatus(querySnapshot.data().status)
            setFrom(querySnapshot.data().from)
            setTo(querySnapshot.data().to)
            console.log("id:", querySnapshot.data()._id)

            toast({
                title: "Successful",
                description: "Correct code",
                status: "success",
                duration: 5000,
                position: "top",
                isClosable: true,
            })
        } catch (error) {
            const errorMessage = error.code;
            toast({
                title: "Error",
                description: errorMessage,
                status: "error",
                duration: 5000,
                position: "top",
                isClosable: true,
            })
        }
    };

    /**const updateStatus = async () => {
        const xmasGiftCardProgramCollection = doc(db, "xmas-gift-card-program", )
        //data to be sent
            const xmasGiftCardProgramPayload = {
                status: "opened",
            };
            
            await setDoc(dataRef, xmasGiftCardProgramPayload, { merge: true });

    }*/

    if (giftType === "birthday") {
        setBg("/birthday-bg.jpg")
        setBgMobile("/birthday-bg-mobile.jpg")
    } else if (giftType === "christmas") {
        setBg("/xmas-bg.jpg")
        setBgMobile("/xmas-bg-mobile.jpg")
    }

    return (
        <div>
            <Head>
                <title>SkinPlus MedSpa Ghana | Gift Card Program</title>
                <meta
                    name="description" 
                    content="SkinPlus Medspa provides a variety of personalized services 
                    to its clientele to enhance their look and maintain youth."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {status.length === 0 || status === "unscanned" ? (
                <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={"brand.green"}>
                    <chakra.form onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={8} mx={'auto'} maxW={'xl'} py={12} px={6}>
                            <Stack align={'center'}>
                                <chakra.img src={'/logo.svg'}></chakra.img>
                                <Heading
                                    fontSize={'4xl'}
                                    color="brand.sand"
                                >
                                    SkinPlus MedSpa Gift Card
                                </Heading>
                            </Stack>
                            <Box
                                rounded={'lg'}
                                bg={useColorModeValue('white', 'gray.700')}
                                boxShadow={'lg'}
                                p={8}>
                                <Stack spacing={4}>
                                    <FormControl isRequired>
                                        <FormLabel>Code</FormLabel>
                                        <Input
                                            placeholder="Code"
                                            {...register('code', {
                                                required: 'Required!....Enter code'
                                            })}
                                            _focus={{
                                                borderColor: 'brand.sand'
                                            }}
                                        />
                                        <FormErrorMessage colorScheme="red">
                                            {errors.senderName && errors.senderName.message}
                                        </FormErrorMessage>
                                    </FormControl>

                                    <Stack spacing={10}>
                                        <Button
                                            type="submit"
                                            bgColor={'brand.green'}
                                            color={"white"}
                                            variant={'outline'}
                                            fontSize={{ md: "xl" }}
                                            _hover={{
                                                bgColor: 'brand.olive'
                                            }}
                                            isLoading={isSubmitting}
                                        >
                                            Open Message
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Stack>
                    </chakra.form>
                </Flex>
            ) : (
                    <Flex
                        p={50}
                        w="full"
                        h="100vh"
                        alignItems="center"
                        justifyContent="center"
                        bgImage={"/xmas-bg.jpg"}
                        bgSize={"cover"}
                        bgPosition={'center'}
                        bgRepeat={"no-repeat"}
                    >
                        <Box
                            mx="auto"
                            maxW="2xl"
                        >
                            <Box p={6}>
                                <Box>
                                    <chakra.h1
                                        display="block"
                                        color={useColorModeValue("gray.800", "white")}
                                        fontWeight="bold"
                                        fontSize="2xl"
                                        mt={2}
                                    >
                                        Message from to
                                    </chakra.h1>
                                    <chakra.p
                                        mt={2}
                                        fontSize="sm"
                                        color={useColorModeValue("gray.600", "gray.400")}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
                                        parturient et sem ipsum volutpat vel. Natoque sem et aliquam
                                        mauris egestas quam volutpat viverra. In pretium nec senectus
                                        erat. Et malesuada lobortis.
                                    </chakra.p>
                                </Box>

                                <Box mt={4}>
                                    <Flex alignItems="center">
                                        <Flex alignItems="center">
                                            <Image
                                                h={10}
                                                fit="cover"
                                                rounded="full"
                                                src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                                                alt="Avatar"
                                            />
                                            <Link
                                                mx={2}
                                                fontWeight="bold"
                                                color={useColorModeValue("gray.700", "gray.200")}

                                            >
                                                Jone Doe
                                    </Link>
                                        </Flex>
                                        <chakra.span
                                            mx={1}
                                            fontSize="sm"
                                            color={useColorModeValue("gray.600", "gray.300")}
                                        >
                                            21 SEP 2015
                                </chakra.span>
                                    </Flex>
                                </Box>
                            </Box>
                        </Box>
                    </Flex>  
            )
            }
        </div>
    );
};

export default Gift;