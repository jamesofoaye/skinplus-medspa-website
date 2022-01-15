import {
  chakra, HStack, Flex, Button,
} from "@chakra-ui/react";
import { useRouter } from 'next/router'

export default function GiftNavbar() {
  const router = useRouter()

  return (
    <chakra.header w="full">
      <chakra.div h="4.5rem" mx="auto">
        <Flex
          w="full"
          h="full"
          px="6"
          pt={10}
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex justify="flex-end" align="center" mx="auto" color="white">
            <HStack spacing="5" display={{ base: "none", md: "flex" }}>
              <Button onClick={() => router.push('/admin/gift')}>
                Main Portal
              </Button>
              <Button onClick={() => router.push('/admin/dashboard')}>
                Dashboard
              </Button>
            </HStack>
          </Flex>
        </Flex>
      </chakra.div>
    </chakra.header>
  );
}