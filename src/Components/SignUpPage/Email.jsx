import React, { useContext } from 'react';
import { CiMail } from "react-icons/ci";
import { VerificationContext } from './Verfication';
import { Input, InputGroup, InputRightElement, IconButton, Flex, Text } from '@chakra-ui/react';

function Email() {
  const { email, handleEmailChange, error_mail} = useContext(VerificationContext);

  return (
    <Flex flexDirection="column" alignItems="center"> {/* Center items vertically */}
      <InputGroup size='md' mt={10} w={650} ml={10} backgroundColor='white' border={0}>
        <Input
          pr='4.5rem'
          placeholder='Email'
          height={10}
          color={'#052c51'}
          onChange={(e) => handleEmailChange(e.target.value)} // Pass a function reference to onChange
        />
        <InputRightElement width='4rem'>
          <IconButton
            aria-label="Home"
            icon={<CiMail />}
            variant="outline"
            colorScheme="white"
            height={20}
            border={0}
            color={'#052c51'}
          />
        </InputRightElement>
      </InputGroup>
      {error_mail&& <Text mt={2} color="red">{error_mail}</Text>} {/* Center the error_mailmessage */}
    </Flex>
  );
}

export default Email;
