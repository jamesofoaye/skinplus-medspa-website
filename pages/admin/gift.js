import { useState, useEffect, useCallback } from 'react'
import {
    chakra, FormControl, FormLabel, Heading, Select,
    FormErrorMessage, Button, Flex, Box, Stack,
    useColorModeValue,useToast, Input, Textarea
} from "@chakra-ui/react"
import Head from 'next/head'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import { onAuthStateChanged } from 'firebase/auth';
import {
    collection, addDoc, serverTimestamp,
} from "firebase/firestore";
import { auth, db } from '../../library/firebase'
import { generateCode} from '../../library/GenerateCode'

export default function AdminGift() {
    const toast = useToast()
    const router = useRouter()
    const {
        handleSubmit, register, reset,
        formState: { errors, isSubmitting }
    } = useForm();

   // const [code] = useState(generateCode());

    onAuthStateChanged(auth, (user) => {
        if (user) {
            if (user.email !== "frontdesk@skinplusofficial.com") {               
                router.push('/admin/login')
            }
        } else {
            router.push('/admin/login')
        }
    });

    const onSubmit = async (values) => {
        try {
            //reference to the documents
            const xmasGiftCardProgramCollection = collection(db, "xmas-gift-card-program");
            //data to be sent
            const xmasGiftCardProgramPayload = {
                from: values.senderName,
                to: values.recipientName,
                message: values.message,
                giftType: values.giftType,
                status: "unscanned",
                createdAt: serverTimestamp(),
                code: generateCode(),
                recipientNumber: values.recipientNumber,
            };
            
            await addDoc(xmasGiftCardProgramCollection, xmasGiftCardProgramPayload);

            toast({
                title: "Successful",
                description: "Added To system",
                status: "success",
                duration: 10000,
                position: "top",
                isClosable: true,
            })

            reset({values})
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
                                    <FormLabel>Gift Card Type</FormLabel>
                                    <Select
                                        placeholder="Select Gift Card"
                                        {...register('giftType', {
                                            required: 'Required!....Gift Card',
                                        })}
                                    >
                                        <option value="birthday">Birthday Card</option>
                                        <option value="christmas">Christmas Card</option>
                                    </Select>
                                    <FormErrorMessage colorScheme="red">
                                        {errors.giftType && errors.giftType.message}
                                    </FormErrorMessage>
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>From</FormLabel>
                                    <Input
                                        placeholder="Sender Name"
                                        {...register('senderName', {
                                            required: 'Required!....Enter sender name'
                                        })}
                                        _focus={{
                                            borderColor: 'brand.sand'
                                        }}
                                    />
                                    <FormErrorMessage colorScheme="red">
                                        {errors.senderName && errors.senderName.message}
                                    </FormErrorMessage>
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>To</FormLabel>
                                    <Input
                                        placeholder="Recipient Name"
                                        {...register('recipientName', {
                                            required: 'Required!....Enter recipient name'
                                        })}
                                        _focus={{
                                            borderColor: 'brand.sand'
                                        }}
                                    />
                                    <FormErrorMessage colorScheme="red">
                                        {errors.recipientName && errors.recipientName.message}
                                    </FormErrorMessage>
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Recipient Number</FormLabel>
                                    <Input
                                        placeholder="Recipient Number"
                                        {...register('recipientNumber', {
                                            required: 'Required!....Enter recipient phone number'
                                        })}
                                        _focus={{
                                            borderColor: 'brand.sand'
                                        }}
                                    />
                                    <FormErrorMessage colorScheme="red">
                                        {errors.recipientNumber && errors.recipientNumber.message}
                                    </FormErrorMessage>
                                </FormControl>

                                <FormControl>
                                    <FormLabel fontSize={{ md: "xl" }}>
                                        Message
                                        </FormLabel>
                                    <Textarea
                                        {...register('message', {
                                            required: 'Required!....Enter message'
                                        })}
                                        rows="7"
                                        columns="30"
                                        placeholder="Message"
                                        _focus={{
                                            borderColor: 'brand.sand'
                                        }}>
                                    </Textarea>
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
                                        Send
                                    </Button>
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                </chakra.form>
            </Flex>
        </div >
    )
}