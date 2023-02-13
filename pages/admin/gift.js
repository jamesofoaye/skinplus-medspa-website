import Head from "next/head";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { auth, db } from "../../library/firebase";
import {
	chakra,
	FormControl,
	FormLabel,
	Heading,
	Select,
	FormErrorMessage,
	Button,
	Flex,
	Stack,
	Input,
	Textarea,
	Box,
	Drawer,
	DrawerContent,
	useDisclosure,
	useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { generateCode } from "../../library/GenerateCode";
import { SidebarContent, MobileNav } from "../../components/Admin/navbar";

let logout;

export default function AdminGift() {
	const { isOpen, onOpen, onClose } = useDisclosure();

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

	const {
		handleSubmit,
		register,
		reset,
		formState: { errors, isSubmitting },
	} = useForm();

	const {
		handleSubmit: handleSubmitSMS,
		register: registerSMS,
		reset: resetSMS,
		formState: { errors: errorsSMS, isSubmitting: isSubmittingSMS },
	} = useForm();

	onAuthStateChanged(auth, (user) => {
		if (!user) {
			router.push("/admin/login");
		}
	});

	const onSubmit = async (values) => {
		try {
			//reference to the collection
			const xmasGiftCardProgramCollection = collection(
				db,
				"xmas-gift-card-program"
			);
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
			});

			reset({ values });
		} catch (error) {
			const errorMessage = error.code;
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

	const sendSMS = async (values) => {
		const { recipientNumber, recipientName, senderName, code } = values;

		try {
			const Message = `Hello ${recipientName}! You have received a SkinPlus Medspa gift card from ${senderName}.
            ${senderName} left a personal message for you on our website that only you can see. You can read this message by
            scanning the QR code on the gift card. Open the link from the QR code and enter this code: ${code} to see your message.
            You can call us on 0559378553 if you have any questions or Visit our website at www.skinplusofficial.com`;

			const destinations = [
				{
					msgid: recipientNumber,
					destination: recipientNumber,
				},
			];

			//send sms to recipient
			const recipeintResponse = await fetch(
				`https://dawurobo-sms-api.vercel.app/v3/sms/send`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						senderid: "SkinPlus",
						destinations: destinations,
						message: Message,
					}),
				}
			);

			toast({
				title: "Successful",
				description: "SMS sent",
				status: "success",
				duration: 5000,
				position: "top",
				isClosable: true,
			});

			resetSMS({ values });
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
				<title>SkinPlus Medspa Ghana | Gift Card</title>
				<meta
					name="description"
					content="SkinPlus Medspa provides a variety of personalized services to its clientele to enhance their look and maintain youth."
				/>
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

				<Box ml={{ base: 0, md: 60 }}>
					<Flex
						minH={"100vh"}
						align={"center"}
						justify={"center"}
						direction={["column", "row"]}
						mt={[10, 0]}
					>
						<chakra.form onSubmit={handleSubmit(onSubmit)}>
							<Stack
								spacing={8}
								mx={"auto"}
								w={["100vw", 500]}
								pt={12}
								px={6}
								fontFamily={"Lora"}
							>
								<Stack align={"center"}>
									<Heading
										fontSize={"4xl"}
										color="brand.sand"
										align={"center"}
										fontFamily={"Lora"}
										fontWeight={"regular"}
									>
										Gift Card Portal
									</Heading>
								</Stack>
								<Box
									rounded={"lg"}
									bg={"brand.cream"}
									boxShadow={"lg"}
									color="black"
									p={8}
								>
									<Stack spacing={4}>
										<FormControl isRequired>
											<FormLabel>Gift Card Type</FormLabel>
											<Select
												borderColor={"black"}
												bg="brand.cream"
												color="black"
												placeholder="Select Gift Card"
												{...register("giftType", {
													required: "Required!....Gift Card",
												})}
											>
												<option
													value="birthday"
													style={{ backgroundColor: "white" }}
												>
													Birthday Card
												</option>
												<option
													value="christmas"
													style={{ backgroundColor: "white" }}
												>
													Christmas Card
												</option>
												<option
													value="valentine"
													style={{ backgroundColor: "white" }}
												>
													Valentine Card
												</option>
											</Select>
											<FormErrorMessage colorScheme="red">
												{errors.giftType && errors.giftType.message}
											</FormErrorMessage>
										</FormControl>

										<FormControl isRequired>
											<FormLabel>From</FormLabel>
											<Input
												placeholder="Sender Name"
												_placeholder={{ color: "gray.500" }}
												borderColor={"black"}
												{...register("senderName", {
													required: "Required!....Enter sender name",
												})}
												_focus={{
													borderColor: "brand.sand",
												}}
												_hover={{
													borderColor: "black",
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
												_placeholder={{ color: "gray.500" }}
												borderColor={"black"}
												{...register("recipientName", {
													required: "Required!....Enter recipient name",
												})}
												_focus={{
													borderColor: "brand.sand",
												}}
												_hover={{
													borderColor: "black",
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
												_placeholder={{ color: "gray.500" }}
												borderColor={"black"}
												{...register("recipientNumber", {
													required: "Required!....Enter recipient phone number",
												})}
												_focus={{
													borderColor: "brand.sand",
												}}
												_hover={{
													borderColor: "black",
												}}
											/>
											<FormErrorMessage colorScheme="red">
												{errors.recipientNumber &&
													errors.recipientNumber.message}
											</FormErrorMessage>
										</FormControl>

										<FormControl isRequired>
											<FormLabel fontSize={{ md: "xl" }}>Message</FormLabel>
											<Textarea
												borderColor={"black"}
												{...register("message", {
													required: "Required!....Enter message",
												})}
												rows="7"
												columns="30"
												placeholder="Message"
												_placeholder={{ color: "gray.500" }}
												_focus={{
													borderColor: "brand.sand",
												}}
												_hover={{
													borderColor: "black",
												}}
											></Textarea>
										</FormControl>
										<Stack spacing={10}>
											<Button
												type="submit"
												bgColor={"brand.green"}
												color={"white"}
												variant={"outline"}
												fontSize={{ md: "xl" }}
												_hover={{
													bgColor: "brand.olive",
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
								mx={"auto"}
								w={"full"}
								pt={12}
								px={6}
								fontFamily={"Lora"}
							>
								<Stack align={"center"}>
									<Heading
										fontSize={"4xl"}
										color="brand.sand"
										align={"center"}
										fontFamily={"Lora"}
										fontWeight={"regular"}
									>
										Gift Card SMS Portal
									</Heading>
								</Stack>
								<Box
									rounded={"lg"}
									bg={"brand.cream"}
									color="black"
									boxShadow={"lg"}
									p={8}
								>
									<Stack spacing={4}>
										<FormControl isRequired>
											<FormLabel>From</FormLabel>
											<Input
												placeholder="Sender Name"
												_placeholder={{ color: "gray.500" }}
												borderColor={"black"}
												{...registerSMS("senderName", {
													required: "Required!....Enter sender name",
												})}
												_focus={{
													borderColor: "brand.sand",
												}}
												_hover={{
													borderColor: "black",
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
												_placeholder={{ color: "gray.500" }}
												borderColor={"black"}
												{...registerSMS("recipientName", {
													required: "Required!....Enter recipient name",
												})}
												_focus={{
													borderColor: "brand.sand",
												}}
												_hover={{
													borderColor: "black",
												}}
											/>
											<FormErrorMessage colorScheme="red">
												{errorsSMS.recipientName &&
													errorsSMS.recipientName.message}
											</FormErrorMessage>
										</FormControl>

										<FormControl isRequired>
											<FormLabel>Recipient Number</FormLabel>
											<Input
												placeholder="Recipient Number"
												_placeholder={{ color: "gray.500" }}
												borderColor={"black"}
												{...registerSMS("recipientNumber", {
													required: "Required!....Enter recipient phone number",
												})}
												_focus={{
													borderColor: "brand.sand",
												}}
												_hover={{
													borderColor: "black",
												}}
											/>
											<FormErrorMessage colorScheme="red">
												{errorsSMS.recipientNumber &&
													errorsSMS.recipientNumber.message}
											</FormErrorMessage>
										</FormControl>

										<FormControl isRequired>
											<FormLabel>Code</FormLabel>
											<Input
												placeholder="Code"
												_placeholder={{ color: "gray.500" }}
												borderColor={"black"}
												{...registerSMS("code", {
													required: "Required!....Enter code",
												})}
												_focus={{
													borderColor: "brand.sand",
												}}
												_hover={{
													borderColor: "black",
												}}
											/>
											<FormErrorMessage colorScheme="red">
												{errorsSMS.code && errorsSMS.code.message}
											</FormErrorMessage>
										</FormControl>

										<Stack spacing={10}>
											<Button
												type="submit"
												bgColor={"brand.green"}
												color={"white"}
												variant={"outline"}
												fontSize={{ md: "xl" }}
												_hover={{
													bgColor: "brand.olive",
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
				</Box>
			</Box>
		</>
	);
}
