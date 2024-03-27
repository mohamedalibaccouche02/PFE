import React, { useContext , useEffect } from 'react';
import { Button, Flex} from '@chakra-ui/react';
import { SignupSubmitContext } from './Signup_SubmitContext';
import { VerificationContext } from './Verfication';
import { Link } from 'react-router-dom';

function Button_Signup({ name }) {
  const {
    handleSubmit , 
    signup_result, 
    setSignUp_Result,
  } = useContext(SignupSubmitContext);
  const { parseEmail, email } = useContext(VerificationContext);

  // Parse the email
  const { isValid } = parseEmail(email);
  useEffect(() => {
    console.log(signup_result);
  }, [signup_result]);

  return (
    <Flex justify="center" flexDirection="column" alignItems="center">
      {isValid ? ( // Check if the email is valid 
        // <Link to='/'>
        <Button
          backgroundColor={'#052c51'}
          size='md'
          height='48px'
          width='300px'
          border='2px'
          borderColor='#052c51'
          mt={5}
          rounded={20}
          onClick={handleSubmit}
          colorScheme="whiteAlpha"
        >
          {name}
        </Button>
          // </Link>
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
            onClick={handleSubmit}
            colorScheme="whiteAlpha"
          >
            {name}
          </Button>
        
      )}
    </Flex>
  );
}

export default Button_Signup;
