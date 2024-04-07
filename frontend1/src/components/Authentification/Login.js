import {React, useState} from 'react'
//import all the neccessary
import { FormControl, VStack , FormLabel, Input, InputGroup, InputRightElement, Show,Button} from '@chakra-ui/react'
const Login = () => {
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [show,setShow]=useState(false);

    const handleClick = () => setShow(!show);

    const handleSubmit = () => {}

  return (
    <VStack spacing="5px" >
    
 
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

        <Button
        width="100%"
        style={{marginTop:'15px'}}
        onClick={handleSubmit}
        backgroundColor="white" color="black" _hover={{backgroundColor:"#D0F9FD"}}
         >
        LOGIN
        </Button>
        
    </VStack>
  )
}

export default Login