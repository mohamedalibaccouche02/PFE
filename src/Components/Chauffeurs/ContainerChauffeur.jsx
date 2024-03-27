import React, { useContext } from 'react';
import { Flex, Box, Spacer, Button, Avatar, Center } from '@chakra-ui/react'; // Import Center component from Chakra-UI
import ChauffeurContext from './ChauffeurContext';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query'; 
import { deleteChauffeur } from '../../api/chauffeur_api';

function ContainerChauffeur({ item }) { // Define item as a parameter
    const {setChauffeurId } = useContext(ChauffeurContext);
    const navigate = useNavigate();
    const queryClient = useQueryClient();
  const mutation = useMutation(deleteChauffeur, {
    onSuccess: () => {
      // Invalidate and refetch the 'chauffeur' query to update the UI
      queryClient.invalidateQueries('chauffeur');
    },});

    const handleDelete = () => {
      mutation.mutate(item._id); 
    }; 
  

    const handleEdit = () => {
      setChauffeurId(item._id);
      navigate(`/EditChauffeur/${item._id}`);
    };
  
  return (
    <div>
      <Flex alignItems="center" direction="row"> {/* Set direction to row */}
        <Box w='200px' h='150px' ml='2%' mt='3%'>
          <Avatar src={item.src} style={{ width: '50%', height: '60%', objectFit: 'cover',  }} />
        </Box>
        <Spacer /> 
        <Box w='180px' h='10'> 
          {item.nom} 
        </Box>
        <Spacer />
        <Box w='180px' h='10'> 
          <Center> {/* Center the salary within the box */}
            {item.salaire}
          </Center>
        </Box>
        <Spacer />
        <Box mr='2%'>
          
            <Button
              backgroundColor={'#052c51'}
              size='md'
              height='48px'
              width='300px'
              border='2px'
              borderColor='#052c51'
              mt={0}
              rounded={20}
              colorScheme="white"
              onClick={handleEdit}
            >
              Edit
            </Button>
          
        </Box>
        <Box mr='2%'>
          <Button
            backgroundColor={'#052c51'}
            size='md'
            height='48px'
            width='300px'
            border='2px'
            borderColor='#052c51'
            mt={0}
            rounded={20}
            colorScheme="whiteAlpha"
            onClick={handleDelete}
          >
            supprimer
          </Button>
        </Box>
      </Flex>
    </div>
  )
}

export default ContainerChauffeur;
