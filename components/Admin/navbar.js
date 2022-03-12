import {
    chakra, IconButton, Avatar, Box, CloseButton, Flex, HStack, VStack, Icon,
    useColorModeValue, Text, Menu, MenuButton, MenuItem, MenuList,
} from '@chakra-ui/react';
import { FiGift, FiMenu, FiChevronDown, FiList } from 'react-icons/fi';
import { BsCalendarDay } from 'react-icons/bs';
import Link from 'next/link'

const LinkItems = [
    {
        name: 'Appointments',
        icon: BsCalendarDay,
        href: '/admin'
    },
    {
        name: 'Gift Card',
        icon: FiGift,
        href: '/admin/gift'
    },
    {
        name: 'Gift Dashboard',
        icon: FiList,
        href: '/admin/dashboard'
    }
];

export const SidebarContent = ({ onClose, ...rest }) => {
    return (
        <Box
            transition="3s ease"
            bg={'brand.green'}
            borderRight="1px"
            borderRightColor={'brand.green'}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h={['20', '36']} alignItems="center" mx="8" justifyContent="space-between">
                <CloseButton color="white" display={{ base: 'flex', md: 'none' }} onClick={onClose} size={10} mr={5} />

                <chakra.img src={'/logo.svg'} py={[0,5]} display={{ base: 'none', md: 'flex' }}></chakra.img>
            </Flex>

            {LinkItems.map((link) => (
                <NavItem
                    key={link.name}
                    icon={link.icon}
                    href={link.href}
                    onClick={onClose}
                >
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};

export const NavItem = ({ icon, href, children, ...rest }) => {
    return (
        <Link href={href} passHref>
            <chakra.a style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
                <Flex
                    align="center"
                    p="4"
                    mx="4"
                    borderRadius="lg"
                    role="group"
                    cursor="pointer"
                    color="white"
                    fontSize="xl"
                    _hover={{
                        bg: 'brand.sand',
                        color: 'white',
                    }}
                    {...rest}>
                    {icon && (
                        <Icon
                            mr="4"
                            fontSize="lg"
                            _groupHover={{
                                color: 'white',
                            }}
                            as={icon}
                        />
                    )}
                    {children}
                </Flex>
            </chakra.a>
        </Link>
    );
};

export const MobileNav = ({ onOpen, logout, ...rest }) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={["brand.green", "white"]}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            position="fixed"
            top={0}
            left={0}
            right={0}
            {...rest}>
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
                color={["white", "black"]}
            />

            <HStack spacing={{ base: '0', md: '6' }} color={'black'}>
                <Flex alignItems={'center'} pos="static">
                    <Menu>
                        <MenuButton
                            py={2}
                            transition="all 0.3s"
                            _focus={{ boxShadow: 'none' }}>
                            <HStack>
                                <Avatar size={'sm'} />
                                <VStack
                                    display={{ base: 'none', md: 'flex' }}
                                    alignItems="flex-start"
                                    spacing="1px"
                                    ml="2">
                                    <Text fontSize="lg" fontWeight={600}>Front Desk</Text>
                                </VStack>
                                <Box display={{ base: 'none', md: 'flex' }}>
                                    <FiChevronDown />
                                </Box>
                            </HStack>
                        </MenuButton>

                        <MenuList bg={'white'}>
                            <MenuItem 
                                fontSize={'lg'} 
                                fontWeight={600} 
                                onClick={logout}
                            >
                                Sign out
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};