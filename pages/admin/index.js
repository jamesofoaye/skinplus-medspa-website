import {useState, useEffect, useRef} from "react";
import Head from 'next/head'
import { useRouter } from 'next/router';
import moment from 'moment';
import { signOut } from 'firebase/auth';
import { auth, db } from '../../library/firebase'
import { useForm, useFieldArray } from 'react-hook-form';
import {
    Table, Thead, Tbody, Tr, Th, Td, Flex, Stack, Box, Drawer, 
    DrawerContent, useDisclosure, useToast, ListItem, UnorderedList,
    Button, Modal, ModalOverlay, ModalContent, ModalHeader,
    ModalFooter, ModalBody, ModalCloseButton,FormControl, Input,
    InputGroup, InputRightElement, FormLabel, chakra, Badge, IconButton
} from "@chakra-ui/react"
import { onAuthStateChanged } from 'firebase/auth';
import {
    collection, onSnapshot, addDoc, doc, query, where,
    deleteDoc, updateDoc, orderBy, limit, getDocs 
} from "firebase/firestore";
import { SidebarContent, MobileNav } from '../../components/Admin/navbar'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { generateUserId } from "../../library/GenerateUserId";
import { AiOutlineSearch } from 'react-icons/ai'

import {
  Pagination,
  usePagination,
  PaginationPage,
  PaginationNext,
  PaginationPrevious,
  PaginationPageGroup,
  PaginationContainer,
  PaginationSeparator
} from "@ajna/pagination";

let logout;

const searchClient = algoliasearch(
  'NBE0ZM82V1',
  '666d0ae88f9b1998bf2777600bb7bb90'
);

export default function Appointments() {
  //menu useDisclosure
  const { 
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();

  //Add Appointment useDisclosure
  const { 
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal
  } = useDisclosure();

  //Edit Appointment useDisclosure
  const { 
    isOpen: isOpenEditModal,
    onOpen: onOpenEditModal,
    onClose: onCloseEditModal
  } = useDisclosure();

  //Add Appointment useForm
  const {
    handleSubmit, register, control,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      services: [{ service: '' }]
    }
  });

  //Add Appointment useFieldArray
  const {
    fields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "services",
  });

  //Edit Appointment useForm
  const {
    handleSubmit: handleSubmitEdit,
    register: registerEdit, 
    setValue,
    formState: { 
        errors: errorsEdit,
        isSubmitting: isSubmittingEdit
    }
  } = useForm({
    defaultValues: {
      services: [{ service: '' }]
    }
  });

  //Search useForm
  const {
    handleSubmit: handleSubmitSearch,
    register: registerSearch, 
    formState: {
        isSubmitting: isSubmittingSearch
    }
  } = useForm();

  //Edit Appointment useFieldArray
  const {
    fields: fieldsEdit,
    append: appendEdit,
    remove: removeEdit,
    replace
  } = useFieldArray({
    control,
    name: "services",
  });


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
    const [editDocID, setEditDocID] = useState('');
    const [searchResult, setSearchResult] = useState('');

    useEffect(() => {
        const q = query(collection(db, "appointment"), where("nextAppointmentDate", ">=", moment().format()), orderBy("nextAppointmentDate"), orderBy("name", "asc"), limit(10));
        
        onSnapshot(q, {includeMetadataChanges: true}, (snapshot) => {
            const result = []

            snapshot.forEach((doc) => {
                result.push({
                    //data from firebase
                    ...doc.data(), 
                    //document Id from firebase
                    id: doc.id
                });
            });
            
            setData(result)
        })
    }, []);

    // // states
    // const [appointmentTotal, setAppointmentTotal] = useState(undefined);
    // const [pokemons, setPokemons] = useState([]);

    // // constants
    // const outerLimit = 2;
    // const innerLimit = 2;

    // const { pages, pagesCount, offset, currentPage, setCurrentPage, 
    //     setIsDisabled, isDisabled, pageSize, setPageSize
    // } = usePagination({
    //     total: appointmentTotal,
    //     limits: {
    //         outer: outerLimit,
    //         inner: innerLimit
    //     },
    //     initialState: {
    //         pageSize: 5,
    //         isDisabled: false,
    //         currentPage: 1
    //     }
    // });
    
    // // effects
    // useEffect(() => {
    //     fetchPokemons(pageSize, offset)
    //     .then((pokemons) => {
    //         setAppointmentTotal(pokemons.count);
    //         setPokemons(pokemons.results);
    //     })
    //     .catch((error) => console.log("App =>", error));
    // }, [currentPage, pageSize, offset]);

    // // handlers
    // const handlePageChange = (nextPage) => {
    //     // -> request new data using the page number
    //     setCurrentPage(nextPage);
    // };

    // const handlePageSizeChange = (event) => {
    //     const pageSize = Number(event.target.value);

    //     setPageSize(pageSize);
    // };

    // const handleDisableClick = () => {
    //     setIsDisabled((oldState) => !oldState);
    // };

    //Add New Appointment to system
    const onSubmit = async (values, e) => {
        try {
            //reference to the collection
            const appointmentCollection = collection(db, "appointment");
            //data to be sent
            const appointmentPayload = {
                userId: generateUserId(),
                name: values.name,
                phone: values.phone,
                nextAppointmentDate: values.nextAppointmentDate,
                prevAppointmentDate: "",
                services: values.services.map(item => item.service),
                status: 'confirmed'
            };

            await addDoc(appointmentCollection, appointmentPayload);

            toast({
                title: "Successful",
                description: "Added To system",
                status: "success",
                duration: 5000,
                position: "top",
                isClosable: true,
            })

            //close Modal
            //onCloseModal()
        } catch (error) {
            const errorMessage = error.code;
            toast({
                title: "Error",
                description: errorMessage,
                status: "error",
                duration: 5000,
                position: "top",
                isClosable: true,
            })
        }

        //reset forms
        e.target.reset()
    };

    //Edit Appointment
    const onSubmitEdit = async (values, e) => {
        try {
            //reference to the document
            const appointmentDocument = doc(db, "appointment", editDocID);
            //data to be sent
            const appointmentEditPayload = {
                name: values.name,
                phone: values.phone,
                status: 'confirmed',
                nextAppointmentDate: values.nextAppointmentDate,
                prevAppointmentDate: values.prevAppointmentDate,
                services: values.services.map(item => item.service)
            };

            await updateDoc(appointmentDocument, appointmentEditPayload);

            toast({
                title: "Successful",
                description: "Edited Successfully",
                status: "success",
                duration: 5000,
                position: "top",
                isClosable: true,
            })

            //Close Modal
            onCloseEditModal()
        } catch (error) {
            const errorMessage = error.code;
            toast({
                title: "Error",
                description: errorMessage,
                status: "error",
                duration: 5000,
                position: "top",
                isClosable: true,
            })
        }
    };

    //Search
    const onSubmitSearch = async (values, e) => {
        try {
            console.log(values)
            const q = query(
                    collection(db, "appointment"),
                    where("name", "==", values.search.toUpperCase() || "name", "==", values.search.toLowerCase())
                );

            const querySnapshot = await getDocs(q);

            const result = []

            querySnapshot.forEach((doc) => {
                result.push({
                    //data from firebase
                    ...doc.data(), 
                    //document Id from firebase
                    id: doc.id
                });

                setSearchResult(result)
            });

            e.target.reset()
            
        } catch (error) {
            const errorMessage = error.code;
            toast({
                title: "Error",
                description: errorMessage,
                status: "error",
                duration: 5000,
                position: "top",
                isClosable: true,
            })
        }
    };

    console.log("Search Result",searchResult)

  return (
    <>
      <Head>
        <title>SkinPlus Medspa Ghana | Appointment Management</title>
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
                    {/**Add Appointment Button */}
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

                    {/**
                     * <Box mt={6}>
                        //Algolia Search Widget 
                        <InstantSearch
                            indexName="skinplus"
                            searchClient={searchClient}
                        >
                            <SearchBox />
                            <Hits />
                        </InstantSearch>
                        </Box>
                    */
                    }
                    <chakra.form 
                        onSubmit={handleSubmitSearch(onSubmitSearch)}
                        width='60vw'
                    >
                        <InputGroup 
                            size='md' 
                            mx={4} 
                            mt={5}
                        >
                            <Input
                                pr='4.5rem'
                                placeholder='Search...'
                                borderColor='brand.olive'
                                borderWidth={2}
                                color='brand.green'
                                _placeholder={{
                                    color: 'brand.green'
                                }}
                                _focus={{ 
                                    borderColor: 'brand.olive'
                                }}
                                _hover={{ 
                                    borderColor: 'brand.olive'
                                }}
                                {...registerSearch('search', {
                                    required: 'Required!....Enter clients name'
                                })}
                            />
                            <InputRightElement>
                                <IconButton
                                    bg={'brand.green'}
                                    aria-label='Search'
                                    icon={<AiOutlineSearch />}
                                    _hover={{ 
                                        borderColor: 'brand.olive'
                                    }}
                                    _focus={{ 
                                        borderColor: 'brand.olive'
                                    }}
                                    type='submit'
                                    isLoading={isSubmittingSearch}
                                />
                            </InputRightElement>
                        </InputGroup>
                    </chakra.form>
                </Flex>

                {/**Add Appointment Forms */}
                <Modal
                    initialFocusRef={initialRef}
                    isOpen={isOpenModal}
                    onClose={onCloseModal}
                    isCentered
                >
                    <ModalOverlay />
                    <ModalContent bgColor={'brand.green'} color={'white'}>
                        <chakra.form onSubmit={handleSubmit(onSubmit)}>
                            <ModalHeader>Add Appointment</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <FormControl isRequired>
                                    <FormLabel>Name</FormLabel>
                                    <Input 
                                        ref={initialRef} 
                                        placeholder='Enter Name' 
                                        {...register('name', {
                                            required: 'Required!....Enter clients name'
                                        })}
                                    />
                                </FormControl>

                                <FormControl mt={4} isRequired>
                                    <FormLabel>Phone Number</FormLabel>
                                    <Input 
                                        placeholder='Enter Phone Number'
                                        {...register('phone', {
                                            required: 'Required!....Enter clients phone number'
                                        })}
                                    />
                                </FormControl>

                                <FormControl mt={4} isRequired>
                                    <FormLabel>Next Appointment Date And Time</FormLabel>
                                    <Input 
                                        placeholder='Next Appointment Date And Time'
                                        type='datetime-local'
                                        {...register('nextAppointmentDate', {
                                            required: 'Required!....Enter clients phone number'
                                        })}
                                    />
                                </FormControl>

                                <FormControl mt={4} isRequired>
                                    <FormLabel>Services</FormLabel>
                                    <Box ml={5}>
                                        <ul>
                                            {fields.map((item, index) => {
                                                return (
                                                    <li key={item.id}>
                                                        <Flex my={2}>
                                                            <Input 
                                                                {...register(`services.${index}.service`, {
                                                                    required: 'Required!....Enter clients phone number',
                                                                    value: ''
                                                                })} 
                                                            />

                                                            <Button 
                                                                type="button" 
                                                                onClick={() => remove(index)}
                                                                ml={2}
                                                                bg={'red'}
                                                                _hover={{
                                                                    backgroundColor: 'red'
                                                                }}
                                                            >
                                                                Delete
                                                            </Button>
                                                        </Flex>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </Box>

                                    <Button
                                        mt={5}
                                        type="button"
                                        onClick={() => {
                                            append({ service: '' });
                                        }}
                                        bg={'brand.olive'}
                                        _hover={{
                                            backgroundColor: 'brand.olive'
                                        }}
                                        >
                                        Add Another Service
                                    </Button>
                                </FormControl>
                            </ModalBody>

                            <ModalFooter>
                                <Button 
                                    bg={'brand.olive'} 
                                    mr={3}
                                    type={'submit'}
                                    isLoading={isSubmitting}
                                >
                                    Save
                                </Button>

                                <Button 
                                    onClick={onCloseModal}
                                    bg={'red.500'}
                                    _hover={{
                                        backgroundColor: 'red.500'
                                    }}
                                >
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
                                        textAlign={'center'}
                                    >
                                        Previous Appointment Date and Time
                                    </Th>
                                    <Th 
                                        color={'white'}
                                        fontSize={'lg'}
                                        textAlign={'center'}
                                    >
                                        Next Appointment Date and Time
                                    </Th>
                                    <Th 
                                        color={'white'}
                                        fontSize={'lg'}
                                        textAlign={'center'}
                                    >
                                        Services
                                    </Th>
                                    <Th 
                                        color={'white'}
                                        fontSize={'lg'}
                                        textAlign={'center'}
                                    >
                                        Status
                                    </Th>
                                    <Th 
                                        color={'white'}
                                        fontSize={'lg'}
                                        textAlign={'center'}
                                    >
                                        Actions
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
                                                {   
                                                    details.prevAppointmentDate === "" 
                                                        ? 
                                                    "No Previous Appointment Date" 
                                                        :
                                                    ` ${moment(details.prevAppointmentDate).format('dddd, MMMM Do YYYY \\at LT')}
                                                    `
                                                }
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
                                            <Td textTransform={'capitalize'}>
                                                <Badge 
                                                    fontSize={'md'} 
                                                    colorScheme={details.status === 'cancelled' ? 'red' : 'purple'}
                                                >
                                                    {details.status}
                                                </Badge>
                                            </Td>
                                            <Td>
                                                <Flex>
                                                    {/** Edit Appointment */}
                                                    <Button 
                                                        mx={3}
                                                        bg={'brand.sand'}
                                                        _hover={{
                                                            backgroundColor: 'brand.sand'
                                                        }}
                                                        position="static"
                                                        onClick={() => { 
                                                            //set document id
                                                            setEditDocID(details.id)
                                                            //set name
                                                            setValue('name', details.name, {
                                                                shouldValidate: true,
                                                                shouldDirty: true
                                                            })
                                                            //set phone number
                                                            setValue('phone', details.phone, {
                                                                shouldValidate: true,
                                                                shouldDirty: true
                                                            })
                                                            //set Previous Appointment Date
                                                            setValue('prevAppointmentDate', details.nextAppointmentDate, {
                                                                shouldValidate: true,
                                                                shouldDirty: true
                                                            })
                                                            //open Edit Modal
                                                            onOpenEditModal()
                                                        }}
                                                    >
                                                        Edit
                                                    </Button>

                                                    {/** Delete Appointment */}
                                                    <Button 
                                                        bg={'red'}
                                                        _hover={{
                                                            bgColor: 'red'
                                                        }}
                                                         position="static"
                                                        onClick={async () => {
                                                            await deleteDoc(doc(db, "appointment", details.id))
                                                        }}
                                                    >
                                                        Delete
                                                    </Button>
                                                </Flex>
                                            </Td>
                                        </Tr>
                                    )
                                })}
                            </Tbody>
                        </Table>
                    </Stack>
                </Flex>

                {/**Edit Appointment Forms */}
                <Modal
                    isOpen={isOpenEditModal}
                    onClose={onCloseEditModal}
                    isCentered
                >
                    <ModalOverlay />
                    <ModalContent bgColor={'brand.green'} color="white">
                        <chakra.form onSubmit={handleSubmitEdit(onSubmitEdit)}>
                            <ModalHeader>Edit Appointment</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <FormControl isRequired>
                                    <FormLabel>Name</FormLabel>
                                    <Input 
                                        placeholder='Enter Name' 
                                        {...registerEdit('name', {
                                            required: 'Required!....Enter clients name'
                                        })}
                                    />
                                </FormControl>

                                <FormControl mt={4} isRequired>
                                    <FormLabel>Phone Number</FormLabel>
                                    <Input 
                                        placeholder='Enter Phone Number'
                                        {...registerEdit('phone', {
                                            required: 'Required!....Enter clients phone number'
                                        })}
                                    />
                                </FormControl>

                                <FormControl mt={4} isRequired>
                                    <FormLabel>Next Appointment Date And Time</FormLabel>
                                    <Input 
                                        placeholder='Next Appointment Date And Time'
                                        type='datetime-local'
                                        {...registerEdit('nextAppointmentDate', {
                                            required: 'Required!....Enter clients phone number'
                                        })}
                                    />
                                </FormControl>

                                <FormControl mt={4} isRequired>
                                    <FormLabel>Services</FormLabel>
                                    <Box ml={5}>
                                        <ul>
                                            {fieldsEdit.map((item, index) => {
                                                return (
                                                    <li key={item.id}>
                                                        <Flex my={2}>
                                                            <Input 
                                                                {...registerEdit(`services.${index}.service`, {
                                                                    required: 'Required!....Enter clients phone number',
                                                                })} 
                                                            />

                                                            <Button 
                                                                type="button" 
                                                                onClick={() => removeEdit(index)}
                                                                ml={2}
                                                                bg={'red'}
                                                                _hover={{
                                                                    backgroundColor: 'red'
                                                                }}
                                                            >
                                                                Delete
                                                            </Button>
                                                        </Flex>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </Box>

                                    <Button
                                        mt={5}
                                        type="button"
                                        onClick={() => {
                                            appendEdit({ service: '' });
                                        }}
                                        bg={'brand.olive'}
                                        _hover={{
                                            backgroundColor: 'brand.olive'
                                        }}
                                        >
                                        Add Another Service
                                    </Button>
                                </FormControl>
                            </ModalBody>

                            <ModalFooter>
                                <Button 
                                    bg={'brand.olive'} 
                                    mr={3}
                                    type={'submit'}
                                    isLoading={isSubmittingEdit}
                                >
                                    Save
                                </Button>
                                <Button 
                                    onClick={onCloseEditModal}
                                    bg={'red.500'}
                                    _hover={{
                                        backgroundColor: 'red.500'
                                    }}
                                >
                                    Cancel
                                </Button>
                            </ModalFooter>
                        </chakra.form>
                    </ModalContent>
                </Modal>
            </Box>
        </Box>
    </>
  );
}
