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
import GiftNavbar from "../../components/giftNavbar";

export default function AdminGift() {
    const toast = useToast()
    const router = useRouter()
    const {
        handleSubmit, register, reset,
        formState: { errors, isSubmitting }
    } = useForm();

    const {
        handleSubmit: handleSubmitSMS, register: registerSMS, reset: resetSMS,
        formState: { errors: errorsSMS, isSubmitting: isSubmittingSMS }
    } = useForm();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            if (user.email !== "frontdesk@skinplusofficial.com") {               
                router.push('/admin/login')
            }
        } else {
            router.push('/')
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

    const sendSMS = async (values) => {
        try {
            const Message = `Hello ${values.recipientName}! You have received a SkinPlus Medspa gift card from ${values.senderName}.
            ${values.senderName} left a personal message for you on our website that only you can see. You can read this message by
            scanning the QR code on the gift card. Open the link from the QR code and enter this code: ${values.code} to see your message.
            You can call us on 0559378553 if you have any questions or Visit our website at www.skinplusofficial.com`

            //send sms to recipient
            const recipeintResponse = await fetch(
                `https://api.dawurobo.com/send_sms?sender=SkinPlus&numbers=${values.recipientNumber}&message=${Message}&validate=false`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        Message,
                    })
                });

            toast({
                title: "Successful",
                description: "SMS sent",
                status: "success",
                duration: 5000,
                position: "top",
                isClosable: true,
            })

            resetSMS({values})
        } catch (error) {
            const errorMessage = error.message;
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
                    <Stack
                        spacing={8}
                        mx={'auto'}
                        w={'full'}
                        py={12} px={6}
                        fontFamily={'Lora'}
                    >
                        <GiftNavbar />
                        <Stack align={'center'}>
                            <chakra.img src={'/logo.svg'}></chakra.img>
                            <Heading
                                fontSize={'4xl'}
                                color="brand.sand"
                                align={'center'}
                                fontFamily={'Lora'}
                                fontWeight={'regular'}
                            >
                                Gift Card Admin Portal
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

                                <FormControl isRequired>
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
                                        Save
                                    </Button>
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                </chakra.form>

                <chakra.form onSubmit={handleSubmitSMS(sendSMS)}>
                    <Stack
                        spacing={8}
                        mx={'auto'}
                        w={'full'}
                        py={12} px={6}
                        fontFamily={'Lora'}
                    >
                        <Stack align={'center'}>
                            <chakra.img src={'/logo.svg'}></chakra.img>
                            <Heading
                                fontSize={'4xl'}
                                color="brand.sand"
                                align={'center'}
                                fontFamily={'Lora'}
                                fontWeight={'regular'}
                            >
                                Gift Card SMS Portal
                            </Heading>
                        </Stack>
                        <Box
                            rounded={'lg'}
                            bg={useColorModeValue('white', 'gray.700')}
                            boxShadow={'lg'}
                            p={8}>
                            <Stack spacing={4}>
                                <FormControl isRequired>
                                    <FormLabel>From</FormLabel>
                                    <Input
                                        placeholder="Sender Name"
                                        {...registerSMS('senderName', {
                                            required: 'Required!....Enter sender name'
                                        })}
                                        _focus={{
                                            borderColor: 'brand.sand'
                                        }}
                                    />
                                    <FormErrorMessage colorScheme="red">
                                        {errorsSMS.senderName && errorsSMS.senderName.message}
                                    </FormErrorMessage>
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>To</FormLabel>
                                    <Input
                                        placeholder="Recipient Name"
                                        {...registerSMS('recipientName', {
                                            required: 'Required!....Enter recipient name'
                                        })}
                                        _focus={{
                                            borderColor: 'brand.sand'
                                        }}
                                    />
                                    <FormErrorMessage colorScheme="red">
                                        {errorsSMS.recipientName && errorsSMS.recipientName.message}
                                    </FormErrorMessage>
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Recipient Number</FormLabel>
                                    <Input
                                        placeholder="Recipient Number"
                                        {...registerSMS('recipientNumber', {
                                            required: 'Required!....Enter recipient phone number'
                                        })}
                                        _focus={{
                                            borderColor: 'brand.sand'
                                        }}
                                    />
                                    <FormErrorMessage colorScheme="red">
                                        {errorsSMS.recipientNumber && errorsSMS.recipientNumber.message}
                                    </FormErrorMessage>
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Code</FormLabel>
                                    <Input
                                        placeholder="Code"
                                        {...registerSMS('code', {
                                            required: 'Required!....Enter code'
                                        })}
                                        _focus={{
                                            borderColor: 'brand.sand'
                                        }}
                                    />
                                    <FormErrorMessage colorScheme="red">
                                        {errorsSMS.code && errorsSMS.code.message}
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
                                        isLoading={isSubmittingSMS}
                                    >
                                        Send SMS
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