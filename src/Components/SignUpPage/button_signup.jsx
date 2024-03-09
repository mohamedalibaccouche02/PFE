import React, { useContext } from 'react';
import { Button, Flex} from '@chakra-ui/react';
import { SignupSubmitContext } from './Signup_SubmitContext';

function Button_Signup({ name }) {
  const {
    handleSubmit , 
    signup_result, 
    setSignUp_Result,
  } = useContext(SignupSubmitContext);
 
  return (
    <Flex justify="center" flexDirection="column" alignItems="center">
      <Button
        backgroundColor={'#052c51'}
        size='md'
        height='48px'
        width='200px'
        border='2px'
        borderColor='#052c51'
        mt={5}
        rounded={20}
        onClick={handleSubmit}
        colorScheme="whiteAlpha"
        
      >
        {name}
      </Button>
    </Flex>
  );
}

export default Button_Signup;
