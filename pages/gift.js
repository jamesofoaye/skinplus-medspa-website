import { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'
import {
    chakra, Box, Image, Flex, Link, useToast,
    FormControl, FormLabel, Heading, Select,
    FormErrorMessage, Button, Stack, useColorModeValue,
    Input, Textarea
} from "@chakra-ui/react";
import { useForm } from 'react-hook-form';
import {collection, query, where, getDocs, setDoc, doc} from 'firebase/firestore'
import { db } from '../library/firebase'

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
    const [message, setMessage] = useState("");
    const [id, setId] = useState("");
    
    const onSubmit = async (values) => {
        try {
            const dataRef = collection(db, "xmas-gift-card-program")
            const q = query(dataRef, where("code", "==", values.code))
            const querySnapshot = await getDocs(q)

            querySnapshot.forEach((doc) => {                
                setGiftType(doc.data().giftType)
                setCode(doc.data().code)
                setStatus(doc.data().status)
                setFrom(doc.data().from)
                setTo(doc.data().to)
                setMessage(doc.data().message)
                setId(doc.id)
            })

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
            if (errorMessage === "invalid-argument") {                
                toast({
                    title: "Error",
                    description: "Wrong Code!",
                    status: "error",
                    duration: 5000,
                    position: "top",
                    isClosable: true,
                })
            } else {
                toast({
                    title: "Error",
                    description: errorMessage,
                    status: "error",
                    duration: 5000,
                    position: "top",
                    isClosable: true,
                })
            }
        }
    };

    const updateStatus = async () => {
        const xmasGiftCardProgramCollection = doc(db, "xmas-gift-card-program", id)
        //data to be sent
            const xmasGiftCardProgramPayload = {
                status: "opened",
            };
            
        await setDoc(xmasGiftCardProgramCollection, xmasGiftCardProgramPayload, { merge: true });

    }

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
                        bgImage={{base:bgMobile, md:bg}}
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
                                    {
                                        //update status
                                        updateStatus()
                                    }
                                    <chakra.h1
                                        display="block"
                                        color={useColorModeValue("gray.800", "white")}
                                        fontWeight="bold"
                                        fontSize="2xl"
                                        mt={2}
                                    >
                                        Message from {from} to {to} 
                                    </chakra.h1>
                                    <chakra.p
                                        mt={2}
                                        fontSize="lg"
                                        color={useColorModeValue("gray.600", "gray.400")}
                                    >
                                        {message}
                                    </chakra.p>
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