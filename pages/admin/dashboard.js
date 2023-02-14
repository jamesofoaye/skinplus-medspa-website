import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { auth, db } from "../../library/firebase";
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	Flex,
	Stack,
	Box,
	Button,
	Drawer,
	DrawerContent,
	AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
	useDisclosure,
	useToast,
} from "@chakra-ui/react";
import { onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot } from "firebase/firestore";
import { SidebarContent, MobileNav } from "../../components/Admin/navbar";
import CopyButton from "../../components/copyButton";

let logout;

export default function GiftDashboard() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	 const { 
		isOpen: isOpenSMS,
		 onOpen: onOpenSMS,
		  onClose: onCloseSMS
		} = useDisclosure()
		 const cancelRef = useRef()

	const toast = useToast();
	const router = useRouter();

	//Log out
	logout = () => {
		signOut(auth);
		toast({
			title: "Success",
			description: "Log Out Succesfully!. Redirecting....",
			status: "success",
			duration: 2000,
			position: "top",
		});
		router.push("/admin/login");
	};

	onAuthStateChanged(auth, (user) => {
		if (!user) {
			router.push("/admin/login");
		}
	});

	const [data, setData] = useState([
		{
			id: "Loading...",
			from: "Loading...",
			to: "Loading...",
			recipientNumber: "Loading...",
			message: "Loading...",
			code: "Loading...",
		},
	]);

	const dataRef = collection(db, "xmas-gift-card-program");

	useEffect(
		() =>
			onSnapshot(dataRef, (snapshot) =>
				setData(
					snapshot.docs.map((doc) => ({
						//data from firebase
						...doc.data(),
						//document Id from firebase
						id: doc.id,
					}))
				)
			),
		[]
	);

	const sendSMS = (data) => {
		const { recipientNumber, to, from, code } = data;
		toast({
			title: "Processing...",
			description: "Please Wait While SMS is being sent",
			status: "info",
			duration: 1500,
			position: "top",
			isClosable: true,
		});

		try {
			const Message = `Hello ${to}! You have received a SkinPlus Medspa gift card from ${from}. ${from} left a personal message for you on our website that only you can see. You can read this message by scanning the QR code on the gift card. Open the link from the QR code and enter this code: ${code} to see your message. You can call us on 0559378553 if you have any questions or Visit our website at www.skinplusofficial.com`;

			const destinations = [
				{
					msgid: recipientNumber,
					destination: recipientNumber,
				},
			];

			//send sms to recipient
			fetch("https://dawurobo-sms-api.vercel.app/v3/sms/send", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					senderid: "SkinPlus",
					destinations: destinations,
					message: Message,
				}),
			})
				.then((res) => {
					toast({
						title: "Successful",
						description: "SMS sent",
						status: "success",
						duration: 5000,
						position: "top",
						isClosable: true,
					});
				})
				.catch((err) => {
					const errorMessage = err.message;

					toast({
						title: "Error",
						description: errorMessage,
						status: "error",
						duration: 5000,
						position: "top",
						isClosable: true,
					});
				});
		} catch (error) {
			const errorMessage = error.message;

			toast({
				title: "Error",
				description: errorMessage,
				status: "error",
				duration: 5000,
				position: "top",
				isClosable: true,
			});
		}
	};

	return (
		<>
			<Head>
				<title>SkinPlus Medspa Ghana | Gift Card Dashboard</title>
				<meta
					name="description"
					content="SkinPlus Medspa provides a variety of personalized services to its clientele to enhance their look and maintain youth."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Box minH="100vh" bg={"gray.100"}>
				<SidebarContent
					onClose={() => onClose}
					display={{ base: "none", md: "block" }}
				/>

				<Drawer
					autoFocus={false}
					isOpen={isOpen}
					placement="left"
					onClose={onClose}
					returnFocusOnClose={false}
					onOverlayClick={onClose}
					size="full"
				>
					<DrawerContent>
						<SidebarContent onClose={onClose} />
					</DrawerContent>
				</Drawer>

				{/* mobilenav */}
				<MobileNav onOpen={onOpen} logout={logout} />

				<Box ml={{ base: 0, md: 60 }} px={4} pt={66}>
					<Flex>
						<Stack direction={{ base: "column" }} w="full" shadow="lg">
							<Table variant="simple" bg="brand.olive" color={"white"} mt={5}>
								<Thead>
									<Tr>
										<Th color={"white"}>No.</Th>
										<Th color={"white"}>From</Th>
										<Th color={"white"}>To</Th>
										<Th color={"white"}>Message</Th>
										<Th color={"white"}>Recipient Number</Th>
										<Th color={"white"}>SMS</Th>
										<Th color={"white"}>Code</Th>
									</Tr>
								</Thead>
								<Tbody>
									{data.map((details, index) => {
										return (
											<Box key={details.id}>
												<Tr>
													<Td>{index + 1}</Td>
													<Td>{details.from}</Td>
													<Td>{details.to}</Td>
													<Td>{details.message}</Td>
													<Td>{details.recipientNumber}</Td>
													<Td>
														<Button
															onClick={() => onOpenSMS()}
															bg="brand.green"
															color="white"
															_hover={{
																bg: "brand.sand",
															}}
															pos="static"
														>
															Notify
														</Button>
													</Td>
													<Td>
														<CopyButton value={details.code} />
													</Td>
												</Tr>

												<AlertDialog
													isOpen={isOpenSMS}
													leastDestructiveRef={cancelRef}
													onClose={onCloseSMS}
												>
													<AlertDialogOverlay>
													<AlertDialogContent>
														<AlertDialogHeader fontSize="lg" fontWeight="bold">
															SMS Notification
														</AlertDialogHeader>

														<AlertDialogBody>
															Are you sure you want to send sms {details.to}?
														</AlertDialogBody>

														<AlertDialogFooter>
														<Button ref={cancelRef} onClick={onCloseSMS}>
															No
														</Button>
														<Button
														 	bg="brand.green"
															color="white"
															_hover={{
																bg: "brand.sand",
															}}
															pos="static"
															onClick={() => sendSMS(details)} 
															ml={3}
														>
															Yes
														</Button>
														</AlertDialogFooter>
													</AlertDialogContent>
													</AlertDialogOverlay>
												</AlertDialog>
											</Box>
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
