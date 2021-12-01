import {useState, useEffect} from "react";
import {
    Flex, Stack, Table, Thead, Tbody, Tr, Th, Td, chakra
} from "@chakra-ui/react";
import CopyButton from "../../components/copyButton";
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot, collection } from "firebase/firestore";
import {auth, db} from '../../library/firebase'
import Head from "next/head";
import { useRouter } from 'next/router'

export default function Component({value}) {
    const router = useRouter()
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
            if (user.email !== "frontdesk@skinplusofficial.com") {
                router.push('/admin/login')
            }
        } else {
            router.push('/')
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
                <title>SkinPlus MedSpa Ghana | Gift Card Dashboard</title>
                <meta
                    name="description"
                    content="SkinPlus Medspa provides a variety of personalized services
                    to its clientele to enhance their look and maintain youth."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <chakra.div
                w="full"
                h={'100vh'}
                bg="brand.green"
                p={50}
            >
                <Flex>
                    <Stack
                        direction={{ base: "column" }}
                        w="full"
                        shadow="lg"
                    >
                        <Table variant='simple' bg='brand.olive' color={'white'}>
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
            </chakra.div>
        </>
    );
}