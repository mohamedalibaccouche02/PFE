import React, { useContext} from 'react';
import { Flex, Box, Spacer, Button , ButtonGroup } from '@chakra-ui/react';
import LouagesContext from './LouagesContext';
import LouageImage from './louaj.png';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query'; 
import { deletelouage } from '../../api/louage_api';

function Container({ item }) {
  const {setLouageId } = useContext(LouagesContext);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation(deletelouage, {
    onSuccess: () => {
      // Invalidate and refetch the 'louage' query to update the UI
      queryClient.invalidateQueries('louage');
    },
  });

  const handleDelete = () => {
    mutation.mutate(item._id); // Trigger the mutation with the item's ID directly
  }; 

  const handleEdit = () => {
    setLouageId(item._id);
    navigate(`/EditLouage/${item._id}`);
  };

  return (
    <Flex alignItems="center">
      <Box w='200px' h='150px' ml='2%'>
        <img src={LouageImage} alt="Louage Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Box>
      <Spacer />
      {item.nom}
      <Spacer />
      <Box w='180px' h='10'>
        {item.route}
      </Box>
      <Spacer />
      <Box mr='2%'>
        <ButtonGroup variant='outline' spacing='6'>
          <Button
            backgroundColor={'#052c51'}
            size='md'
            height='48px'
            width='300px'
            border='2px'
            borderColor='#052c51'
            mt={5}
            rounded={20}
            colorScheme="white" 
            onClick={handleEdit}
          >
            Edit
          </Button>
        </ButtonGroup>
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
          Delete
        </Button>
      </Box>
    </Flex>
  );
}

export default Container;
