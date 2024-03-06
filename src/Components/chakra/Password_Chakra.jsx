import React, { useContext } from 'react';
import { Input, InputGroup, InputRightElement, IconButton, Box, Text, Flex } from '@chakra-ui/react';
import { CiLock, CiUnlock } from 'react-icons/ci';
import { PasswordContext } from './Passwordcontext';
import { LoginContext } from './Login_SubmitContext';

function PasswordInput() {
  const {  password, setPassword, Message_pass } = useContext(LoginContext); // Destructure Message_pass from context
  const { togglePasswordVisibility,showPassword, setShowPassword } = useContext(PasswordContext); // Correctly access togglePasswordVisibility from PasswordContext

  return (
    <Flex flexDirection="column" alignItems="start"> {/* Use Flexbox with column direction and start-aligned items */}
      <InputGroup size="md" mt={10} w={650} ml={10} backgroundColor="white">
        <Input
          pr="4.5rem"
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter password"
          color={'black'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          <IconButton
            onClick={togglePasswordVisibility} // Use togglePasswordVisibility from PasswordContext
            icon={showPassword ? <CiUnlock /> : <CiLock />}
            color={'#052c51'}
            height={0}
            border={0}
          />
        </InputRightElement>
      </InputGroup>
      <Box ml={10} mt={1}> {/* Use margin to position the error message */}
        <Text color="red">{Message_pass}</Text>
      </Box>
    </Flex>
  );
}

export default PasswordInput;
