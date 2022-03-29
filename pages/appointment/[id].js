import { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
    Heading, Box, Center, Stack, Button, Icon, HStack, Text,
    useToast, UnorderedList, ListItem, chakra
} from "@chakra-ui/react";
import { FiUser, FiPhone } from 'react-icons/fi'
import { BsCalendar3, BsGlobe } from 'react-icons/bs'
import { useForm } from 'react-hook-form';
import moment from 'moment';
import { collection, query, where, onSnapshot , setDoc, doc } from 'firebase/firestore'
import { db } from '../../library/firebase'

const ManageAppointment = () => {
    const router = useRouter()
    const toast = useToast()

    const { id } = router.query

    const [data, setData] = useState([]);

    const getData = useCallback(async() => {
        const q = query(collection(db, "appointment"), where("userId", "==", id));

        onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setData({
                    id: doc.id,
                    ...doc.data()
                })   
            });
        });

    }, [id])

    useEffect(() => { 
        getData()
    }, [getData])

    //Confirm Appointment
    const confirmAppointment = async() => {
        const appointmentRef =  doc(db, 'appointment', data && data.id);
        await setDoc(appointmentRef, {
            status: "confirmed",
        }, { merge: true });

        toast({
            title: "Success",
            description: "Appointment Confirmed, See you soon!",
            status: "success",
            duration: 5000,
            position: "top",
        })
    }

    //Cancel Appointment
    const cancelAppointment = async() => {
        const appointmentRef =  doc(db, 'appointment', data && data.id);
        await setDoc(appointmentRef, {
            status: "cancelled",
        }, { merge: true });

        toast({
            title: "Success",
            description: "Appointment Cancelled",
            status: "success",
            duration: 5000,
            position: "top",
        })
    }

    //Reschedule Appointment
    const rescheduleAppointment = async() => {
        const appointmentRef =  doc(db, 'appointment', data && data.id);
        await setDoc(appointmentRef, {
            status: "rescheduled",
        }, { merge: true });

        toast({
            title: "Success",
            description: "Appointment Rescheduled, \n A representative from SkinPlus Medspa will call you to get your new appointment date. Thank you.",
            status: "success",
            duration: 15000,
            position: "top",
        })
    }

    return (
        <div>
            <Head>
                <title>SkinPlus MedSpa Ghana | Manage Appointment</title>
                <meta
                    name="description"
                    content="SkinPlus Medspa provides a variety of personalized services 
                    to its clientele to enhance their look and maintain youth."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Center py={6} bg={"brand.green"}>
                <Box
                    maxW={'xl'}
                    w={'full'}
                    p={6}
                    minH={'100vh'}
                >
                    <Center>
                        <Link href={'/'} passHref>
                            <Button leftIcon={<BsGlobe />} bg={'brand.olive'} variant='solid'>
                                Visit Our Main Website
                            </Button>
                        </Link>
                    </Center>

                    <Heading fontSize={'3xl'} textAlign={"center"} my={5} textDecoration={'underline'}>
                        Appointment Details
                    </Heading>

                    {data.length === 0 ? (
                        <Text fontSize={'2xl'} textAlign={"center"}>
                            Loading...
                        </Text>
                    ) : (
                        <>
                            <HStack>
                                <Heading 
                                    fontSize={'3xl'} 
                                    textTransform={'capitalize'} 
                                    textAlign="center" 
                                    mx={'auto'}
                                    my={2}
                                >
                                   Status: {''}
                                   <chakra.span  color={data.status === 'cancelled' ? 'red' : 'brand.sand'}>
                                       {data.status}
                                    </chakra.span>
                                </Heading>
                            </HStack>  

                            <HStack spacing='24px'>
                                <Icon as={FiUser} />
                                <Heading fontSize={'2xl'}>
                                    {data.name}
                                </Heading>
                            </HStack>  

                            <HStack spacing='24px'>
                                <Icon as={FiPhone} />
                                <Heading fontSize={'2xl'}>
                                    {data.phone}
                                </Heading>
                            </HStack>  

                            <HStack spacing='24px'>
                                <Icon as={BsCalendar3} />
                                <Heading fontSize={'2xl'}>
                                    {moment(data.nextAppointmentDate).calendar()}
                                </Heading>
                            </HStack>
                                              
                            <Text spacing='24px'>
                                <Text fontSize='2xl' mt={4}>Services</Text>
                                {data && data.services.map((service, index) => {
                                    return(
                                        <UnorderedList key={index} mx={8} fontSize={'lg'}>
                                            <ListItem>{service}</ListItem>
                                        </UnorderedList>
                                    )
                                })}
                            </Text>                    

                            <Stack mt={8} direction={'row'} spacing={2}>
                                <Button
                                    flex={1}
                                    fontSize={'lg'}
                                    rounded={'full'}
                                    bg={'brand.sand'}
                                    _hover={{
                                        bg: 'brand.sand',
                                    }}
                                    _focus={{
                                        bg: 'brand.sand',
                                    }}
                                    onClick={confirmAppointment}
                                >
                                    Confirm
                                </Button>
                                <Button
                                    flex={1}
                                    fontSize={'lg'}
                                    rounded={'full'}
                                    _focus={{
                                        bg: 'brand.olive',
                                    }}
                                    onClick={cancelAppointment}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    flex={1}
                                    fontSize={'lg'}
                                    rounded={'full'}
                                    bg={'brand.olive'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'brand.olive',
                                    }}
                                    _focus={{
                                        bg: 'brand.olive',
                                    }}
                                    onClick={rescheduleAppointment}
                                >
                                    Reschedule
                                </Button>
                            </Stack>
                        </>
                    )}
                </Box>
            </Center>
        </div>
    );
};

export default ManageAppointment;
