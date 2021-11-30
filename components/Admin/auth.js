import {
    Flex, Box, FormControl, FormLabel, FormErrorMessage, Input,
    Stack, Button, Heading, useColorModeValue, useToast, chakra
} from '@chakra-ui/react';
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../library/firebase'

export default function Login() {
    const {
        handleSubmit, register,
        formState: { errors, isSubmitting }
    } = useForm();
    const toast = useToast()
    const router = useRouter()

    const onSubmit = (values) => {
        const password = values.password;
        signInWithEmailAndPassword(auth, "frontdesk@skinplusofficial.com", password)
            .then(() => {
                toast({
                    title: "Success",
                    description: "Login Successful!. Redirecting....",
                    status: "success",
                    duration: 2000,
                    position: "top",
                })
                router.replace('/admin/gift')
            })
            .catch((error) => {
                const errorMessage = error.code;
                toast({
                    title: "Error",
                    description: errorMessage,
                    status: "error",
                    duration: 5000,
                    position: "top",
                    isClosable: true,
                })
            });
    };


    return (
        <Stack
            h={'100vh'}
            align={'center'}
            bg={"brand.green"}>
            <Stack align={'center'}>
                <chakra.img
                    src={'/logo.svg'}
                    mt={10}
                ></chakra.img>
                <Heading
                    align={'center'}
                    fontSize={'4xl'}
                    fontWeight={'regular'}
                    color="brand.sand"
                    fontFamily={'Lora'}
                    pb={5}
                >
                    Skinplus Medspa Admin Sign In
                </Heading>
            </Stack>
            <Box
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                p={8}>
                <Stack spacing={4}>
                    <chakra.form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl>
                            <FormLabel>Email address</FormLabel>
                            <Input
                                type="email"
                                value={"frontdesk@skinplusofficial.com"}
                                disabled
                            />
                        </FormControl>
                        <FormControl isRequired my={3}>
                            <FormLabel>Password</FormLabel>
                            <Input
                                type="password"
                                {...register('password', {
                                    required: 'Required!....Enter your password'
                                })}
                            />
                            <FormErrorMessage colorScheme="red">
                                {errors.password && errors.password.message}
                            </FormErrorMessage>
                        </FormControl>
                        <Stack spacing={10}>
                            <Button
                                type="submit"
                                mt={2}
                                bgColor={'brand.green'}
                                variant={'outline'}
                                fontSize={{ md: "xl" }}
                                _hover={{
                                    bgColor: 'brand.olive'
                                }}
                                color={"white"}
                                disabled={isSubmitting}
                            >
                                Sign in
                            </Button>
                        </Stack>
                    </chakra.form>
                </Stack>
            </Box>
        </Stack>
    );
}