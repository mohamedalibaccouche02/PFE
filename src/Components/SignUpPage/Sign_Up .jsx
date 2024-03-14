import React from 'react';
import { Flex, Box, Image } from '@chakra-ui/react';
import Email from './Email';
import Louage from './louaj.png';
import Sign_up_text from './Sign_up_text'; 
import Button_Signup from './button_signup';

import Tel from './Tel'; 

function Sign_Up() { 
  return (
    <Flex color='white' h='100vh'>
      <Box flex='1' bg='RGBA(236,189,76,0.7)' roundedBottomRight={20} boxShadow={20}  > 
        <Sign_up_text/>
        <Flex flexDirection="column" alignItems="center">
        <Email/>
        <Tel/></Flex>
        <Button_Signup name= "signup" />
        
      </Box>
      <Box flex='1' bg='#ecbd4c' display='flex' alignItems='center' justifyContent='center' >
        <Image src={Louage} alt='Louage bou blassa' maxH='100%'  />
      </Box>
    </Flex>
  );
}

export default Sign_Up;
