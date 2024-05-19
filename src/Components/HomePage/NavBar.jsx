import React, { useEffect, useState } from 'react';
import { Grid, Box, Image, Flex, Divider, Icon, Text, Button } from '@chakra-ui/react';
import { HiMiniUserCircle } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';
import logo from './logoo.jpg';
import { ChevronDownIcon } from '@chakra-ui/icons'; 
import { Link, useNavigate } from 'react-router-dom';
import LogoutPopover from './LogoutPopover'; // Import the LogoutPopover component
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';


function NavBar() {
  const history = useNavigate();
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Retrieve username from localStorage
    const storedUsername = localStorage.getItem('loggedInUsername');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []); // Run once on component mount

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('loggedInUsername');
 
    history('/'); 
  };
   
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6} p={4} bg='#052c51' color='white'>
      <Box>
        <Image src={logo} alt='icon' w='30%' h='50px' />
      </Box>
      <Box bg="white" borderRadius="md" p={2} width='600px'>
        <Flex alignItems='center' justifyContent='space-between'>
          <NavLink 
            to="/Home"
            style={({ isActive }) => ({
              color: isActive ? "#ecbd4c" : "#052c51",
              marginLeft:'5%',
              textDecoration: 'none',
            })}
          >
            Home
          </NavLink>
          <Divider orientation="vertical" borderColor="#052c51" mx={1} height='40px'/>
          <NavLink 
            style={({ isActive }) => ({
              color: isActive ? "#ecbd4c" : "#052c51" ,
              textDecoration: 'none',
            })} 
          >
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} >
                Services
              </MenuButton>
              <MenuList>  
                <Link to='/Louages'>
                  <MenuItem color='#052c51'>Louages</MenuItem>
                </Link>
                <Link to='/chauffeurs'>
                  <MenuItem color='#052c51'>Chauffeurs</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </NavLink>
          <Divider orientation="vertical" borderColor="#052c51" mx={1} height='40px'/>
          <NavLink 
            to="/Calendrier"
            style={({ isActive }) => ({
              color: isActive ? "#ecbd4c" : "#052c51",
              textDecoration: 'none',
            })}
          >
            Calendrier 
          </NavLink>
          <Divider orientation="vertical" borderColor="#052c51" mx={1} height='40px'/>
          <NavLink 
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? "#ecbd4c" : "#052c51" ,
              marginRight:'5%',
              textDecoration: 'none',
            })}
          >
            Contact
          </NavLink>
        </Flex>
      </Box>
      <Flex alignItems='center' marginLeft='auto'>
        <Text fontSize="md" color="#white">{username}</Text>
        <Icon as={HiMiniUserCircle} boxSize={14} marginLeft="3" />
       
        <LogoutPopover onLogout={handleLogout} />
      </Flex>
    </Grid>
  );
}

export default NavBar;
