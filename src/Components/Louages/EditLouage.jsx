import React, { useContext, useState } from 'react';
import { Flex, Text, Input, Alert, AlertIcon, Center, ButtonGroup, Button } from '@chakra-ui/react';
import { useMutation } from 'react-query'; 
import { useNavigate } from 'react-router-dom';
import LouagesContext from './LouagesContext';
import axios from 'axios'; 

function EditLouage() {
  
  const { louageId } = useContext(LouagesContext);
  const [nom_edited, setNom_edited] = useState('');
  const [route_edited, setRoute_Edited] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Define the mutation function
  const mutation = useMutation(async (updatedLouage) => {
    const response = await axios.put(`http://localhost:5000/louages/${louageId}`, updatedLouage);
    return response.data;
  });

  const handlechangenom_edited = (e) => {
    setNom_edited(e.target.value);
  };

  const handlechangeROUTE_Edited = (e) => {
    setRoute_Edited(e.target.value);
  };

  const handleSave_Edited = async () => {
    if (nom_edited.length === 0 || route_edited === '') {
      setError('There is an empty input');
    } else {
      const updatedLouage = { nom: nom_edited, route: route_edited };
      try {
        await mutation.mutateAsync(updatedLouage);
        navigate('/Louages'); // Navigate to the Louages page after successful update
      } catch (error) {
        console.error(error);
        setError('Failed to update louage');
      }
    }
  };

  return (
    <div>
      <Flex color='white' h='150vh' flexDirection='column' bg='#ecbd4c'>
        <Text mb='8px'>Value</Text>
        <Input
          placeholder='nom_edited'
          size='sm'
          value={nom_edited}
          onChange={handlechangenom_edited}
        />
        <Input
          placeholder='Route_Edited'
          size='sm'
          value={route_edited}
          onChange={handlechangeROUTE_Edited}
        />
        {error && (
          <Alert status="error" mt={4}>
            <AlertIcon />
            {error}
          </Alert>
        )}
        <Center>
          <ButtonGroup variant='outline' spacing='6'>
            <Button colorScheme='blue' onClick={handleSave_Edited}>Save</Button>
          </ButtonGroup>
        </Center>
      </Flex>
    </div>
  );
}

export default EditLouage;
