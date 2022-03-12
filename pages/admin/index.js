import { useState, useEffect, useCallback } from 'react'
import {
  Box, Drawer, DrawerContent, Text, useDisclosure, useToast
} from '@chakra-ui/react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { signOut } from 'firebase/auth';
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from '../../library/firebase'
import { SidebarContent, MobileNav } from '../../components/Admin/navbar'

let logout;

export default function Dashboard({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast()
  const router = useRouter()
  const [data, setData] = useState()

  /**const getUserData = useCallback(async() => {
    if(user){
      const docRef = doc(db, "users", user && user.uid);
      const docSnap = await getDoc(docRef);
  
      setData(docSnap.data())
      setProfilePicURL(docSnap.data().profilePhotoURL)
      setUserName(docSnap.data().firstName + " " + docSnap.data().lastName)
    }
  }, [user, data])

  useEffect(() => {
    getUserData()
  }, [getUserData])*/

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
    router.push('/login')
  };

  return (
    <>
      <Head>
        <title>SkinPlus Medspa Ghana | Dashboard</title>
        <meta 
            name="description" 
            content="SkinPlus Medspa provides a variety of personalized services to its clientele to enhance their look and maintain youth."
        />
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
              p="4" 
            >
              {children}
            </Box>
          </Box>
    </>
  );
}