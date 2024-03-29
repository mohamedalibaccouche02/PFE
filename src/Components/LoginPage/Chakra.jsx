import React, { useContext, useState } from 'react';
import { Flex, Box, Image ,Text , Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Login_Form_Chakra from './Login_Form_Chakra';
import Username from './Username_chakra';
import PasswordInput from './Password_Chakra';
import Louage from './louaj.png';
import { LoginContext } from './Login_SubmitContext';
import { useQuery } from 'react-query';
import { fetchAllUsers } from '../../api/user_api';

function Chakra() { 
 const {username , password , setUsername , setPassword} = useContext(LoginContext) ; 
 const [isLoggedIn , setIsLoggedIn] = useState(false) ; 
 const [err , setErr] = useState('') ; 
 const navigate = useNavigate() ; 

 console.log(username , password) ; 

 const { data} = useQuery('users', fetchAllUsers);
 
 const handleLogin = () => {
   if (username.length === 0 || password.length === 0) {
      setErr('There is an empty input') ; 
   } else {
     if (data) {
       
       data.forEach(item => {
         if (item.username === username && item.password === password) {
           setIsLoggedIn(true);
           setUsername('') ; 
           setPassword('') ;
           navigate('/Home') ; 
           
         }
       });
       if (!isLoggedIn) {
         setErr('Wrong account') ;
       }
     }
   }  
 }

  return (
    <Flex color='white' h='100vh'>
      <Box flex='1' bg='RGBA(236,189,76,0.7)' roundedBottomRight={20} boxShadow={20}  > 
        <Login_Form_Chakra />
        <Username />
        <PasswordInput /> 
        
        <Flex justify="center" mt={5}>
          <Button
            backgroundColor={'#052c51'}
            size='md'
            height='48px' 
            width='300px'
            border='2px'
            borderColor='#052c51'
            rounded={20}
            colorScheme="whiteAlpha" 
            onClick={handleLogin}
          > Login </Button>
        </Flex>
       
        <Flex justify="center" mt={2}> {/* Flex container for the "forget password" text */}
          <Text color='red'>{err}</Text>
        </Flex>
      </Box>
      <Box flex='1' bg='#ecbd4c' display='flex' alignItems='center' justifyContent='center' >
        <Image src={Louage} alt='Louage bou blassa' maxH='100%'  />
      </Box>
    </Flex>
  );
}

export default Chakra;
