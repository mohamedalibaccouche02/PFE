import React, { useContext } from 'react';
import { Flex, Text, Input, Alert, AlertIcon, Center } from '@chakra-ui/react';
import LouagesContext from './LouagesContext';
import { ButtonGroup,Button } from '@chakra-ui/react'
import LouageImage from './louaj.png';
import { useMutation } from 'react-query';
import { createlouage } from '../../api/louage_api';
import { useNavigate } from 'react-router-dom';

function AjoutInterface() {
  const { route, setRoute, id, setId, error, setError, addItem  , nom , setNom} = useContext(LouagesContext);
  const navigate = useNavigate();

  const handlechangenom= (e) => {
    setNom(e.target.value);
  };

  const handlechangeROUTE = (e) => {
    setRoute(e.target.value);
  };

  const createLouageMutation = useMutation(createlouage);

  const handleSave = async () => {
    if (nom.length === 0 && route.length === 0) {
      setError('ID and Route are required.');
    } else if (nom.length === 0) {
      setError('ID is required.');
    } else if (route.length === 0) {
      setError('Route is required.');
    } else {
      const newLouage = { nom, route, src: LouageImage };
      try {
        const { data } = await createLouageMutation.mutateAsync(newLouage);
     
          
          setError('');
          setNom('');
          setRoute('');
          navigate('/Louages');
        
      } catch (error) {
        console.error(error);
        setError('Failed to create louage.');
      }
    }
  };

  return (
    <Flex
      align="center"
      justify="center"
      h="100vh"
      bg="#ecbd4c"
    >
      <Flex
        color='white'
        flexDirection='column'
        p={8}
        borderRadius="md"
        boxShadow="md" 
        bg='white'
        w="80%" 
        h='50%'
        justifyContent="space-between" // Align children with space between
      >
        <Text mb='8px' fontSize="xl" color='blue'>Value</Text>
        <Input
          placeholder='nom'
          size='lg'
          onChange={handlechangenom}
          mb={4} 
          color='black'
        />
        <Input
          placeholder='Route'
          size='lg'
          onChange={handlechangeROUTE}
          mb={4}
          color='black'
        />
        {error && (
          <Alert status="error" mb={4}>
            <AlertIcon />
            {error}
          </Alert>
        )}
        <Center>
          <ButtonGroup variant='outline' spacing='6'>
            <Button colorScheme='blue' onClick={handleSave}>Save</Button>
          </ButtonGroup>
        </Center>
      </Flex>
    </Flex>
  );
}

export default AjoutInterface;
