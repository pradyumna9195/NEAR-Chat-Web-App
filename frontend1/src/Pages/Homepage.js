import {  Container,Box,Text,Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react'
import React from 'react'
import Login from '../components/Authentification/Login'
import SignUp from '../components/Authentification/SignUp'
import { useHistory } from "react-router";
import { useEffect} from "react";

const Homepage = () => {
  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) history.push("/chats"); 
  }, [history]);
return(
    <Container maxW="xl" centerContent>
    <Box
    d='flex'
    justifyContent="center"
    p={3}
    bg={"#041E42"}
    borderRadius="20px"
    borderWidth={"1px"}
    w="100%"
    m="20% 0px 15px 0px"
    shadow="4px 7px 20px black">
        <Text color="white" fontSize='4xl' fontFamily="DM Sans" align="center">NEAR CHAT</Text>
    </Box>
    <Box
    d='flex'
    justifyContent="center"
    p={4}
    bg="#041E42"
    color="white"
    borderRadius="22px"
    borderWidth={"1px"}
    w="100%"
    shadow="4px 7px 13px black">
    <Tabs variant='soft-rounded' >
  <TabList mb="1em" >
    <Tab width="50%" color={"white"} >LOGIN</Tab>
    <Tab width="50%" color={"white"}>SIGN UP</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
      <SignUp/>
    </TabPanel>
  </TabPanels>
</Tabs>
 
    </Box>

    </Container>
);
}

export default Homepage