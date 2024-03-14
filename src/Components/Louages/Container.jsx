import React, { useContext } from 'react';
import Button_chakra from '../LoginPage/Button_chakra';
import { Flex, Box, Spacer, Button } from '@chakra-ui/react';
import LouagesContext from './LouagesContext';
import { Link } from 'react-router-dom';

function Container({ item }) {
  const { deleteItem } = useContext(LouagesContext);

  const handleDelete = () => {
    console.log("Deleting item:", item.id);
    deleteItem(item.id);
  };

  return (
    <Flex alignItems="center">
      <Box w='200px' h='150px' ml='2%'>
        <img src={item.src} alt="Louage Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Box>
      <Spacer />
      {item.id}
      <Spacer />
      <Box w='180px' h='10'>
        {item.route}
      </Box>
      <Spacer />
      <Box mr='2%'>
        <Link to={`/EditLouage/${item.id}`}>
          <Button_chakra name='Edit' />
        </Link>
      </Box>
      <Box mr='2%'>
        <Button
          backgroundColor={'#052c51'}
          size='md'
          height='48px'
          width='300px'
          border='2px'
          borderColor='#052c51'
          mt={5}
          rounded={20}
          colorScheme="whiteAlpha"
          onClick={handleDelete}
        >
          supprimer
        </Button>
      </Box>
    </Flex>
  );
}

export default Container;
