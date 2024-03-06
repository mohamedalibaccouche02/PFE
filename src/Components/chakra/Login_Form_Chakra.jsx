import React from 'react';
import { Flex, Box, Center, Text } from '@chakra-ui/react';

function Login_Form_Chakra() {
  return (
    <Flex justify="center">
      <Center>
        <Box w='200px' h='50'  mt={100}  textAlign="center" display="flex" alignItems="center" justifyContent="center">
          <Text color="#052c51" fontSize={40} fontFamily="Montserrat">Login</Text>
        </Box>
      </Center>
    </Flex>
  );
}

export default Login_Form_Chakra;
