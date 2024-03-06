import React from 'react';
import { Grid, Box, Image, Flex, Icon } from '@chakra-ui/react';
import { SlLogin } from "react-icons/sl";
import { FiMail } from "react-icons/fi";
import logo from './logoo.jpg';

function Topbar() {
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6} p={4} bg='#052c51' color='white'>
      <Box>
        <Image src={logo} alt='icon' w='30%' h='50px' />
      </Box>
      <Box>
        {/* Add your navigation links or components here */}
      </Box>
      <Flex alignItems='center' justifyContent='center' marginLeft='auto'>
        <Icon as={FiMail} boxSize={8} mr={10} />
        <Icon as={SlLogin} boxSize={8} />
      </Flex>
    </Grid>
  );
}

export default Topbar;
