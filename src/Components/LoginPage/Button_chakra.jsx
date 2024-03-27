import React, { useContext } from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { LoginContext } from './Login_SubmitContext'; // Adjust the import path as needed
import { Link } from 'react-router-dom';

function Button_chakra({ name }) {
  const { password, username, onsubmit } = useContext(LoginContext);
  const isFormFilled = username.length > 0 && password.length > 0; 
  
  return (
    <Flex justify="center"> 
      {/* Conditionally render the Link component */}
      {isFormFilled ? (
        <Link to="/home">
          <Button
            backgroundColor={'#052c51'}
            size='md'
            height='48px'
            width='300px'
            border='2px'
            borderColor='#052c51'
            mt={5}
            rounded={20}
            colorScheme="whiteAlpha" 
           
          >
            {name}
          </Button>
        </Link>
      ) : (
        <Button
          backgroundColor={'#052c51'}
          size='md'
          height='48px'
          width='300px'
          border='2px'
          borderColor='#052c51'
          mt={5}
          rounded={20}
          onClick={onsubmit}
          colorScheme="whiteAlpha"
        >
          {name}
        </Button>
      )}
    </Flex>
  );
}

export default Button_chakra;
