import { FormControl, VStack , FormLabel, Input, InputGroup, InputRightElement, Show,Button} from '@chakra-ui/react'
import React from 'react'
import { useState } from "react";


const SignUp = () => {
    const [name,setName]=useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();
    const [show,setShow]=useState(false);

    const handleClick = () => setShow(!show);
    const postdetails=(pics)=>{}

    const handleSubmit = () => {}

  return (
    <VStack spacing="5px" >
    <FormControl id='first-name' isRequired >
        <FormLabel>Name</FormLabel>
        <Input placeholder='Enter Your Name' 
            onChange={(e) => setName(e.target.value)}
            />
        </FormControl>
        <FormControl id='email' isRequired >
        <FormLabel>Email</FormLabel>
        <Input placeholder='Enter Your Email' 
            onChange={(e) => setEmail(e.target.value)}
            />
        </FormControl>

        <FormControl id='Password' isRequired >
        <FormLabel>Password</FormLabel>
        <InputGroup>
        <Input
        type={show ? 'text' : "password"}
        placeholder='Enter Your Password' 
            onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
            </Button>

            </InputRightElement>
            
        </InputGroup>
      
        </FormControl>

        <FormControl id='Pic'  >
        <FormLabel >Profile Picture</FormLabel>
        <Input type='file' 
        p={1}
        accept='image/*'
            onChange={(e) => postdetails(e.target.files[0])}
            />
        </FormControl>

        <Button
        width="100%"
        style={{marginTop:'15px'}}
        onChange={handleSubmit}
        backgroundColor="white" color="black" _hover={{backgroundColor:"#D0F9FD"}}

         >

        

        SUBMIT
        </Button>
        
    </VStack>
  )
}

export default SignUp