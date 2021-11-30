import { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'
import {
    chakra, Box, Flex, useToast, FormControl, FormLabel, Heading, FormErrorMessage,
    Button, Stack, useColorModeValue, Input,  Modal, ModalOverlay, ModalContent,
    ModalHeader, ModalFooter, ModalBody, useDisclosure,
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
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [giftType, setGiftType] = useState("");
    const [bg, setBg] = useState("");
    const [bgMobile, setBgMobile] = useState("");
    const [code, setCode] = useState("");
    const [status, setStatus] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [message, setMessage] = useState("");
    const [id, setId] = useState("");

    const updateStatus = async () => {
        const xmasGiftCardProgramCollection = doc(db, "xmas-gift-card-program", id)
        //data to be sent
        const xmasGiftCardProgramPayload = {
            status: "opened",
        };

        await setDoc(xmasGiftCardProgramCollection, xmasGiftCardProgramPayload, { merge: true });
    }
    
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

            if(code === values.code){
                onOpen()
                toast({
                    title: "Successful",
                    description: "Correct code",
                    status: "success",
                    duration: 2000,
                    position: "top",
                    isClosable: true,
                })
                updateStatus()
                reset({values})
            }  else {
                toast({
                    title: "Error",
                    description: "Wrong Code. Please Try Again!",
                    status: "error",
                    duration: 5000,
                    position: "top",
                    isClosable: true,
                })
            }
        } catch (error) {
            const errorMessage = error.code;
            if (errorMessage === "invalid-argument") {                
                toast({
                    title: "Error",
                    description: "Wrong Code. Please Try Again!",
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

    useEffect(() => {
        if (giftType === "birthday") {
            setBg("/birthday-bg.jpg")
            setBgMobile("/birthday-bg-mobile.jpg")
        } else if (giftType === "christmas") {
            setBg("/xmas-bg.jpg")
            setBgMobile("/xmas-bg-mobile.jpg")
        }
    },[giftType])

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

            <Stack
                h={'100vh'}
                align={'center'}
                bg={"brand.green"}>
                <Stack align={'center'}>
                    <chakra.img
                        src={'/logo.svg'}
                        mt={5}
                    ></chakra.img>
                    <Heading
                        fontSize={'4xl'}
                        fontWeight={'regular'}
                        color="brand.sand"
                        fontFamily={'Lora'}
                    >
                        Gift Card
                    </Heading>
                    <chakra.p
                        fontFamily={'Lora'}
                        fontSize={'lg'}
                        fontWeight={'regular'}
                        color="brand.sand"
                        px={5}
                        align={'center'}
                    >
                       Enter the code you received through sms with sender name SkinPlus
                    </chakra.p>
                </Stack>
                <chakra.form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={8}
                           mx={'auto'}
                           maxW={'xl'}
                           py={12}
                           px={6}
                           justify={'center'}
                    >
                        <Box
                            rounded={'lg'}
                            bg={useColorModeValue('white', 'gray.700')}
                            boxShadow={'lg'}
                            p={8}>
                            <Stack spacing={4}>
                                <FormControl isRequired>
                                    <FormLabel fontFamily={'Lora'}>Code</FormLabel>
                                    <Input
                                        placeholder="Code"
                                        type="text"
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
                                        fontFamily={'Lora'}
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
                <Stack align={'center'}>
                    <chakra.p
                        fontFamily={'Lora'}
                        fontSize={'lg'}
                        fontWeight={'regular'}
                        color="red"
                        align={'center'}
                        mx={5}
                    >
                        NOTE: Call SkinPlus Medspa on {''}
                        <chakra.a href="tel:+233596068336">
                            0596068336 {''}
                        </chakra.a>
                        if you didn&apos;t receive any SMS with your code
                    </chakra.p>
                </Stack>
            </Stack>

            <Modal size={'full'} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent
                    fontFamily={'Sacramento'}
                    color={giftType === "birthday" ? "white" : "black"}
                    bgImage={{base:bgMobile, md:bg}}
                    bgSize={"cover"}
                    bgPosition={'center'}
                    bgRepeat={"no-repeat"}
                    pl={giftType === "birthday" ? 0 : 100}
                    pt={giftType === "birthday" ? 0 : 100}
                >
                    <ModalHeader
                        fontSize="4xl"
                        fontWeight={'regular'}
                        align={'center'}
                    >
                        Message from {from} to {to}
                    </ModalHeader>
                    <ModalBody>
                        <chakra.p
                            mt={2}
                            fontSize="3xl"
                            color={giftType === "birthday" ? "white" : "black"}
                        >
                            {message}
                        </chakra.p>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default Gift;