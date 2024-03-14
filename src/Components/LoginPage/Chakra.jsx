import React, { useContext } from 'react';
import { Flex, Box, Image ,Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Login_Form_Chakra from './Login_Form_Chakra';
import Username from './Username_chakra';
import PasswordInput from './Password_Chakra';
import Button_chakra from './Button_chakra';
import Louage from './louaj.png';
import { SignupSubmitContext } from '../SignUpPage/Signup_SubmitContext';

function Chakra() { 
  const { signup_result } = useContext(SignupSubmitContext) 
  console.log(signup_result) ;
  return (
    <Flex color='white' h='100vh'>
      <Box flex='1' bg='RGBA(236,189,76,0.7)' roundedBottomRight={20} boxShadow={20}  > 
        <Login_Form_Chakra />
        <Username />
        <PasswordInput /> 
        
          <Button_chakra name='Login' />
       
        <Flex justify="center" mt={2}> {/* Flex container for the "forget password" text */}
          <Text>Forget password?</Text>
        </Flex>
      </Box>
      <Box flex='1' bg='#ecbd4c' display='flex' alignItems='center' justifyContent='center' >
        <Image src={Louage} alt='Louage bou blassa' maxH='100%'  />
      </Box>
    </Flex>
  );
}

export default Chakra;
