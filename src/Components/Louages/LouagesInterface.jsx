import React, { useContext } from 'react';  
import NavBar from '../HomePage/NavBar';
import { Flex, Divider } from '@chakra-ui/react'; // Import Divider component from Chakra-UI
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
          {items.map((item, index) => (
            <React.Fragment key={item.id}>
              <Container item={item} />
              {/* Add a thicker divider if it's not the last item */}
              {index !== items.length - 1 && <Divider borderWidth="2px" borderColor="whiteAlpha" />}
            </React.Fragment>
          ))}
          <Link to='/AjoutLouage' >
            <Button_chakra name='Ajouter' />
          </Link>
        </Flex>
      </div>
    )
}

export default LouagesInterface;
