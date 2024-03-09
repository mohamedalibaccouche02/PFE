// Button_Email.jsx
import React, { useContext } from 'react';
import { Button, Flex, Text } from '@chakra-ui/react'; // Import Text from Chakra UI for styling
import { VerificationContext } from './Verfication';// Corrected import path

function Button_Email({ name }) {
  const { email, handleEmailChange, error } = useContext(VerificationContext);

  const handleClick = () => {
    handleEmailChange(email); // Validate the email when the button is clicked
  };

  return (
    <Flex justify="center" flexDirection="column" alignItems="center"> {/* Center content vertically */}
    {error && <Text mt={2} color="red">{error}</Text>} {/* Display error message in red color */}
      <Button
        size='md'
        height='48px'
        width='200px'
        border='2px'
        borderColor='#052c51'
        mt={5}
        rounded={20}
        onClick={handleClick} // Use handleClick function when the button is clicked
      >
        {name}
      </Button>
     
    </Flex>
  );
}

export default Button_Email;
