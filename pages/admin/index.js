import {useState, useEffect, useRef} from "react";
import Head from 'next/head'
import { useRouter } from 'next/router';
import moment from 'moment';
import { signOut } from 'firebase/auth';
import { auth, db } from '../../library/firebase'
import {
    Table, Thead, Tbody, Tr, Th, Td, Flex, Stack, Box, Drawer, 
    DrawerContent, useDisclosure, useToast, ListItem, UnorderedList,
    Button, Modal, ModalOverlay, ModalContent, ModalHeader,
    ModalFooter, ModalBody, ModalCloseButton,FormControl, Input,
    FormLabel, chakra
} from "@chakra-ui/react"
import { onAuthStateChanged } from 'firebase/auth';
import {
    collection, onSnapshot
} from "firebase/firestore";
import { SidebarContent, MobileNav } from '../../components/Admin/navbar'

let logout;

export default function Appointments() {
  const { 
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();

  const { 
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal
  } = useDisclosure();

  const initialRef = useRef()

  const toast = useToast()
  const router = useRouter()

  //Log out
  logout = () => {
    signOut(auth);
    toast({
      title: "Success",
      description: "Log Out Succesfully!. Redirecting....",
      status: "success",
      duration: 2000,
      position: "top",
    })
    router.push('/admin/login')
  };

    onAuthStateChanged(auth, (user) => {
        if (!user) {
            router.push('/admin/login')
        }
    });

    const [data, setData] = useState([]);

    const dataRef = collection(db, "appointment");

   useEffect(() =>
        onSnapshot(dataRef, (snapshot) => {
           console.log(snapshot.docs.map((doc) => doc.data() ))
           setData(snapshot.docs.map((doc) => ({
                //data from firebase
                ...doc.data(),
                //document Id from firebase
                id: doc.id
            })))
            setData(snapshot.docs.map((doc) => (
                //data from firebase
                doc.data()
            )))

            const result = []

            snapshot.forEach((doc) => {
                result.push(doc.data());
            });
            setData(result)
        }), []
    );

  return (
    <>
      <Head>
        <title>SkinPlus Medspa Ghana | Gift Card</title>
        <meta 
            name="description" 
            content="SkinPlus Medspa provides a variety of personalized services to its clientele to enhance their look and maintain youth."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box minH="100vh" bg={'gray.100'}>
            <SidebarContent
              onClose={() => onClose}
              display={{ base: 'none', md: 'block' }}
            />

            <Drawer
              autoFocus={false}
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              returnFocusOnClose={false}
              onOverlayClick={onClose}
              size="full">
              <DrawerContent>
                <SidebarContent onClose={onClose} />
              </DrawerContent>
            </Drawer>

            {/* mobilenav */}
            <MobileNav
              onOpen={onOpen}
              logout={logout}
            />

            <Box 
              ml={{ base: 0, md: 60 }} 
              px={4}
              pt={66}
            >
                <Button 
                    color={'white'} 
                    bg={'brand.green'}
                    mt={5}
                    _hover={{
                        backgroundColor: 'brand.green'
                    }}
                    position="static"
                    onClick={onOpenModal}
                >
                    Add Appointment
                </Button>

                {/**Add Appointment Forms */}
                <Modal
                    initialFocusRef={initialRef}
                    isOpen={isOpenModal}
                    onClose={onCloseModal}
                    isCentered
                >
                    <ModalOverlay />
                    <ModalContent bgColor={'brand.green'}>
                        <chakra.form>
                            <ModalHeader>Add Appointment</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <FormControl isRequired>
                                    <FormLabel>Name</FormLabel>
                                    <Input ref={initialRef} placeholder='Enter Name' />
                                </FormControl>

                                <FormControl mt={4} isRequired>
                                    <FormLabel>Phone Number</FormLabel>
                                    <Input placeholder='Enter Phone Number' />
                                </FormControl>

                                <FormControl mt={4} isRequired>
                                    <FormLabel>Next Appointment Date And Time</FormLabel>
                                    <Input 
                                        placeholder='Next Appointment Date And Time'
                                        type='datetime-local'
                                    />
                                </FormControl>
                            </ModalBody>

                            <ModalFooter>
                                <Button bg={'brand.olive'} mr={3}>
                                    Save
                                </Button>
                                <Button onClick={onCloseModal}>
                                    Cancel
                                </Button>
                            </ModalFooter>
                        </chakra.form>
                    </ModalContent>
                </Modal>

                <Flex>
                    <Stack
                        direction={{ base: "column" }}
                        w="full"
                        shadow="lg"
                    >

                        <Table bg='brand.olive' color={'white'} mt={5}>
                            <Thead>
                                <Tr>
                                    <Th 
                                        color={'white'} 
                                        fontSize={'lg'}
                                    >
                                        No.
                                    </Th>
                                    <Th 
                                        color={'white'}
                                        fontSize={'lg'}
                                    >
                                        Name
                                    </Th>
                                    <Th 
                                        color={'white'}
                                        fontSize={'lg'}
                                    >
                                        Phone Number
                                    </Th>
                                    <Th 
                                        color={'white'}
                                        fontSize={'lg'}
                                    >
                                        Previous Appointment Date and Time
                                    </Th>
                                    <Th 
                                        color={'white'}
                                        fontSize={'lg'}
                                    >
                                        Next Appointment Date and Time
                                    </Th>
                                    <Th 
                                        color={'white'}
                                        fontSize={'lg'}
                                    >
                                        Services
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {data.length === 0 ? (
                                    <Tr>
                                        <Td>Loading...</Td>
                                        <Td>Loading...</Td>
                                        <Td>Loading...</Td>
                                        <Td>Loading...</Td>
                                        <Td>Loading...</Td>
                                        <Td>Loading...</Td>     
                                    </Tr>
                                )  : data.map((details, index) => {
                                    return(
                                        <Tr key={index}>
                                            <Td>{index + 1}</Td>
                                            <Td>{details.name}</Td>
                                            <Td>{details.phone}</Td>
                                            <Td>
                                                {/**Formatted in Day, Month and Time */}
                                                {moment(details.prevAppointmentDate).format('dddd, MMMM Do YYYY \\at LT')}
                                            </Td>
                                            <Td>
                                                {moment(details.nextAppointmentDate).format('dddd, MMMM Do YYYY \\at LT')}
                                            </Td>
                                            <Td>
                                                {details.services.map((service, index) => {
                                                    return(
                                                        <UnorderedList key={index}>
                                                            <ListItem>{service}</ListItem>
                                                        </UnorderedList>
                                                    )
                                                })}
                                            </Td>
                                                
                                        </Tr>
                                    )
                                })}
                            </Tbody>
                        </Table>
                    </Stack>
                </Flex>
            </Box>
          </Box>
    </>
  );
}