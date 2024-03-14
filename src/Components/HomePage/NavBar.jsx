import React from 'react';
import { Grid, Box, Image, Flex, Divider, Icon, Text, Button } from '@chakra-ui/react';
import { HiMiniUserCircle } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';
import logo from './logoo.jpg';
import { ChevronDownIcon } from '@chakra-ui/icons'; 
import { Link } from 'react-router-dom';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from '@chakra-ui/react'

function NavBar() {
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
                <MenuItem color='#052c51'>  Louages</MenuItem>
                </Link>
                <MenuItem color = '#052c51'>Chauffeurs</MenuItem>
                
              </MenuList>
            </Menu>
          </NavLink>

          <Divider orientation="vertical" borderColor="#052c51" mx={1} height='40px'/>

          <NavLink 
            to="/income"
            style={({ isActive }) => ({
              color: isActive ? "#ecbd4c" : "#052c51",
              textDecoration: 'none',
            })}
          >
            Income 
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
        <Text fontSize="md" color="#white">Username</Text>
        <Icon as={HiMiniUserCircle} boxSize={14} marginLeft="2" />
      </Flex>
    </Grid>
  );
}

export default NavBar;
