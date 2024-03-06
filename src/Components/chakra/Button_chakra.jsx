import React, { useContext } from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { LoginContext } from './Login_SubmitContext'; // Adjust the import path as needed

function Button_chakra({ name }) {
  const { onsubmit } = useContext(LoginContext);

  return (
    <Flex justify="center">
      <Button
        size='md'
        height='48px'
        width='200px'
        border='2px'
        borderColor='#052c51'
        mt={5}
        rounded={20}
        onClick={onsubmit}
      >
        {name}
      </Button>
    </Flex>
  );
}

export default Button_chakra;
