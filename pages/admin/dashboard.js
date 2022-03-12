import {useState, useEffect} from "react";
import Head from 'next/head'
import { useRouter } from 'next/router';
import { signOut } from 'firebase/auth';
import { auth, db } from '../../library/firebase'
import {
    chakra, FormControl, FormLabel, Heading, Select, Table, Thead, Tbody, Tr, Th, Td,
    FormErrorMessage, Button, Flex, Stack, Input, Textarea, Box, Drawer, DrawerContent, useDisclosure, useToast
} from "@chakra-ui/react"
import { useForm } from 'react-hook-form';
import { onAuthStateChanged } from 'firebase/auth';
import {
    collection, addDoc, serverTimestamp, onSnapshot
} from "firebase/firestore";
import { generateCode } from '../../library/GenerateCode'
import { SidebarContent, MobileNav } from '../../components/Admin/navbar'
import CopyButton from "../../components/copyButton";

let logout;

export default function GiftDashboard({ children }) {
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

    const [data, setData] = useState([{
        id: "Loading...",
        from: "Loading...",
        to: "Loading...",
        recipientNumber: "Loading...",
        message: "Loading...",
        code: "Loading...",
    }]);

    const dataRef = collection(db, "xmas-gift-card-program");

    useEffect(() =>
        onSnapshot(dataRef, (snapshot) =>
            setData(snapshot.docs.map((doc) => ({
                //data from firebase
                ...doc.data(),
                //document Id from firebase
                id: doc.id
            })))
        ), []
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
                        <Table variant='simple' bg='brand.olive' color={'white'} mt={5}>
                            <Thead>
                                <Tr>
                                    <Th color={'white'}>From</Th>
                                    <Th color={'white'}>To</Th>
                                    <Th color={'white'}>Message</Th>
                                    <Th color={'white'}>Recipient Number</Th>
                                    <Th color={'white'}>Code</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {data.map((details) => {
                                    return (
                                        <Tr key={details.id}>
                                            <Td>{details.from}</Td>
                                            <Td>{details.to}</Td>
                                            <Td>{details.message}</Td>
                                            <Td>{details.recipientNumber}</Td>
                                            <Td>
                                                <CopyButton value={details.code} />
                                            </Td>
                                        </Tr>
                                    );
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