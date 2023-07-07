import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Link,
  Image,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Direction to our Shop',
    href: '/map',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Services',
    href: '/services',
  },
  {
    label: 'Consultation',
    href: '/consultation',
  },
  {
    label: 'Membership',
    href: '/membership',
  },
  {
    label: 'IV Therapy',
    href: '/therapy',
  },
  {
    label: 'Shop',
    href: '/shop',
  },
  {
    label: 'Contact',
    href: '/contact-us',
  },
];

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        color={'white'}
        bgColor={'brand.olive'}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Phone Navigation'}
            _hover={{
              bgColor: 'none',
            }}
            _focus={{
              bgColor: 'none',
            }}
          />
        </Flex>

        <Flex justify={'center'} mx={'auto'}>
          <Flex display={{ base: 'none', md: 'flex' }}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={'row'}>
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <div>
            <Box key={navItem.label} textAlign={'center'}>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={'white'}
                _hover={{
                  textDecoration: 'none',
                  textColor: 'brand.green',
                }}>
                {navItem.label}
              </Link>
            </Box>
          </div>
        ))}
      </Stack>
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={'brand.green'} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} color={'white'}>
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};
