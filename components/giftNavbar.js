import {
  chakra,
  HStack,
  Flex,
  useDisclosure,
  CloseButton,
  VStack,
  Button,
} from "@chakra-ui/react";

import { AiFillHome, AiOutlineInbox} from "react-icons/ai";

export default function GiftNavbar() {
  const mobileNav = useDisclosure();

  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
        Main Portal
      </Button>
      <Button
        w="full"
        variant="solid"
        colorScheme="brand"
        leftIcon={<AiOutlineInbox />}
      >
        Dashboard
      </Button>
    </VStack>
  );

  return (
    <chakra.header
      transition="box-shadow 0.2s"
      borderTop="6px solid"
      borderTopColor="brand.400"
      w="full"
      overflowY="hidden"
      borderBottomWidth={2}
      borderBottomColor={'gray.200'}
    >
      <chakra.div h="4.5rem" mx="auto" maxW="1200px">
        <Flex
          w="full"
          h="full"
          px="6"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex justify="flex-end" align="center" color="gray.400">
            <HStack spacing="5" display={{ base: "none", md: "flex" }}>
              <Button colorScheme="brand" variant="ghost" size="sm">
                Main Portal
              </Button>
              <Button colorScheme="brand" variant="solid" size="sm">
                Dashboard
              </Button>
            </HStack>
          </Flex>
        </Flex>
        {MobileNavContent}
      </chakra.div>
    </chakra.header>
  );
}