import React, { useContext } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { UsernameContext } from './UsernameContext';
import { Input, InputGroup, InputRightElement, IconButton, Box, Text, Flex } from '@chakra-ui/react';
import { LoginContext } from './Login_SubmitContext'; 

function UsernameInput() {
    const {  setUsername, Message_user  } = useContext(LoginContext);

    return (
        <Flex flexDirection="column" alignItems="start"> {/* Use Flexbox with column direction and start-aligned items */}
            <InputGroup size='md' mt={10} w={650} ml={10} backgroundColor='white' border={0}>
                <Input
                    pr='4.5rem'
                    placeholder='Username'
                    height={10}
                    color={'#052c51'}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <InputRightElement width='4rem'>
                    <IconButton
                        aria-label="Home"
                        icon={<FaUserCircle />}
                        variant="outline"
                        colorScheme="white"
                        height={30}
                        border={0}
                        color={'#052c51'}
                    />
                </InputRightElement>
            </InputGroup>
            <Box ml={10} mt={1}> {/* Use margin to position the error message */}
                <Text color="red">{Message_user}</Text>
            </Box>
        </Flex>
    );
}

export default UsernameInput;
