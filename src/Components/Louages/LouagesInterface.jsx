// LouagesInterface.js
import React, { useContext } from 'react';  
import NavBar from '../HomePage/NavBar';
import { Flex } from '@chakra-ui/react'; 
import Container from './Container'; 
import Button_chakra from '../LoginPage/Button_chakra';
import { Link } from 'react-router-dom'; 
import LouagesContext from './LouagesContext';

function LouagesInterface() { 
    const { items } = useContext(LouagesContext);

    return (
      <div>
        <NavBar/> 
        <Flex color='white' h='150vh' flexDirection='column' bg='#ecbd4c'>
          {items.map((item) => 
            <Container item={item} key={item.id} />
          )}
          <Link to='/AjoutLouage' >
            <Button_chakra name='Ajouter' />
          </Link>
        </Flex>
      </div>
    )
}

export default LouagesInterface;
