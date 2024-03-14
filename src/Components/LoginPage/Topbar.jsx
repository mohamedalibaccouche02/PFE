import React from 'react';
import { Grid, Box, Image, Flex, Icon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { SlLogin } from "react-icons/sl";
import { FiMail } from "react-icons/fi";
import logo from './logoo.jpg';

function Topbar() {
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6} p={4} bg='#052c51' color='white'>
      <Box>
        <Link to="/">
        <Image src={logo} alt='icon' w='30%' h='50px' />
        </Link>
      </Box>
      <Box>
       
      </Box>
      <Flex alignItems='center' justifyContent='center' marginLeft='auto'>
        <Link to="/about">
          <Icon as={FiMail} boxSize={8} mr={10} />
        </Link>
        <Link to="/signuppage">
          <Icon as={SlLogin} boxSize={8} />
        </Link>
      </Flex>
    </Grid>
  );
}

export default Topbar;
