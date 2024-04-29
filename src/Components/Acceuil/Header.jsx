import React from 'react';
import { Grid, Box, Image, Flex, Button} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../LoginPage/logoo.jpg'

function Header() {
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6} p={4} bg='#052c51' color='white'>
      <Box>
        <Link to="/">
          <Image src={logo} alt='icon' w='30%' h='50px' />
        </Link>
      </Box>
      <Box></Box>
      <Flex alignItems='center' justifyContent='center' marginLeft='auto'>
        <Link to="/loginpage">
          <Button
            backgroundColor={'white'}
            size='md'
            height='48px'
            width='150px'
            border='2px'
            borderColor='#052c51'
            mt={2} // Adjusted marginTop to move the button up
            rounded={20}
            color='#052c51'
            mr={2}
          >
            Login
          </Button>
        </Link>
        <Link to="/signuppage">
          <Button
            backgroundColor={'white'}
            size='md'
            height='48px'
            width='150px'
            border='2px'
            borderColor='#052c51'
            mt={2} // Adjusted marginTop to move the button up
            rounded={20}
            color='#052c51'
            ml={2}
          >
            SignUp
          </Button>
        </Link>
      </Flex>
    </Grid>
  );
}

export default Header;
