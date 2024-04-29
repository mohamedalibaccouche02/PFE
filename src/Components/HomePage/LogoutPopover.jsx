import React from 'react';
import {
    Box,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverArrow,
    PopoverCloseButton,
    PopoverBody,
    PopoverFooter,
    Button,
    ButtonGroup,
} from '@chakra-ui/react';
import { SlLogout } from "react-icons/sl";

function LogoutPopover({ onLogout }) {
    const handleLogout = () => {
        onLogout(); // Callback to initiate logout action
    };

    return (
        <Popover placement="bottom-start" strategy="fixed">
            <PopoverTrigger>
                {/* Wrapping the Icon within a Box to ensure consistent positioning */}
                <Box position="relative">
                    <Icon as={SlLogout} boxSize={8} marginLeft="4" cursor="pointer" />
                </Box>
            </PopoverTrigger>
            <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
                <PopoverHeader pt={4} fontWeight='bold' border='0'>
                    Confirm Logout
                </PopoverHeader>
                <PopoverArrow bg='blue.800' />
                <PopoverCloseButton />
                <PopoverBody>
                    Are you sure you want to log out?
                </PopoverBody>
                <PopoverFooter
                    border='0'
                    display='flex'
                    alignItems='center'
                    justifyContent='flex-end'
                    pb={4}
                >
                    <ButtonGroup size='sm'>
                        <Button colorScheme='red' onClick={handleLogout}>Logout</Button>
                        <Button colorScheme='blue'>Cancel</Button>
                    </ButtonGroup>
                </PopoverFooter>
            </PopoverContent>
        </Popover>
    );
}

export default LogoutPopover;
