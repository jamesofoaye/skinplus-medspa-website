import {useState, useEffect} from "react";
import Head from 'next/head'
import { useRouter } from 'next/router';
import moment from 'moment';
import { signOut } from 'firebase/auth';
import { auth, db } from '../../library/firebase'
import {
    Table, Thead, Tbody, Tr, Th, Td, Flex, Stack, Box, Drawer, DrawerContent,
    useDisclosure, useToast, ListItem, UnorderedList,
} from "@chakra-ui/react"
import { onAuthStateChanged } from 'firebase/auth';
import {
    collection, onSnapshot
} from "firebase/firestore";
import { SidebarContent, MobileNav } from '../../components/Admin/navbar'

let logout;

export default function Appointments() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
              <Flex>
                    <Stack
                        direction={{ base: "column" }}
                        w="full"
                        shadow="lg"
                    >
                        <Table bg='brand.olive' color={'white'} mt={5}>
                            <Thead>
                                <Tr>
                                    <Th color={'white'}>No.</Th>
                                    <Th color={'white'}>Name</Th>
                                    <Th color={'white'}>Phone Number</Th>
                                    <Th color={'white'}>Previous Appointment Date and Time</Th>
                                    <Th color={'white'}>Next Appointment Date and Time</Th>
                                    <Th color={'white'}>Services</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {/**data && data.map((details, index) => {
                                    return (
                                        <Tr key={index}>
                                            <Td>{index + 1}</Td>
                                            <Td>{details.name}</Td>
                                            <Td>{details.phone}</Td>
                                            <Td>{details.nextAppointmentDate}</Td>
                                            <Td>{details.prevAppointmentDate}</Td>
                                            
                                        </Tr>
                                    );
                                })*/}
                                {data && data.map((details, index) => {
                                    return(
                                        <Tr key={index}>
                                            <Td>{index + 1}</Td>
                                            <Td>{details.name}</Td>
                                            <Td>{details.phone}</Td>
                                            <Td>{moment(details.prevAppointmentDate).calendar()}</Td>
                                            <Td>{moment(details.nextAppointmentDate).format('LTS')}</Td>
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