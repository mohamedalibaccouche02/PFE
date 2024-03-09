import React from 'react'
import { Flex, Box, Center, Text } from '@chakra-ui/react';
function Sign_up_text() {
  return (
    <Flex justify="center">
      <Center>
        <Box w='200px' h='50'  mt={100}  textAlign="center" display="flex" alignItems="center" justifyContent="center">
          <Text color="#052c51" fontSize={50} fontFamily="Montserrat">Sign Up</Text>
        </Box>
      </Center>
    </Flex>
  )
}

export default Sign_up_text
