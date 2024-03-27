import React, { useContext, useState } from 'react';
import { Flex, Text, Input, Alert, AlertIcon, Button, ButtonGroup, Center } from '@chakra-ui/react';
import ChauffeurContext from './ChauffeurContext';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditChauffeur() {
  const { chauffeurId } = useContext(ChauffeurContext);
  const [nomEdited, setNomEdited] = useState('');
  const [salaireEdited, setSalaireEdited] = useState('');
  const [startWorkEdited, setStartWorkEdited] = useState('');
  const [endWorkEdited, setEndWorkEdited] = useState('');
  const [colorEdited, setColorEdited] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const mutation = useMutation(async (updatedChauffeur) => {
    const response = await axios.put(`http://localhost:5000/chauffeurs/${chauffeurId}`, updatedChauffeur);
    return response.data;
  });

  const handleSaveEdited = async () => {
    const updatedChauffeur = {
      nom: nomEdited,
      salaire: salaireEdited,
      startWork: startWorkEdited,
      endWork: endWorkEdited,
      color: colorEdited
    };

    if (!nomEdited || !salaireEdited || !startWorkEdited || !endWorkEdited || !colorEdited) {
      setError('All fields are required.');
    } else {
      setError('');

      try {
        await mutation.mutateAsync(updatedChauffeur);
        navigate('/chauffeurs'); // Navigate to the Chauffeurs page after successful update
      } catch (error) {
        console.error(error);
        setError('Failed to update chauffeur');
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
      >
        <Text mb='8px' fontSize="xl" color='blue'>Edit Chauffeur</Text>
        <Input
          placeholder='Nom'
          size='lg'
          value={nomEdited}
          onChange={(e) => setNomEdited(e.target.value)}
          mb={4}
          color='black'
        />
        <Input
          placeholder='Salaire'
          size='lg'
          value={salaireEdited}
          onChange={(e) => setSalaireEdited(e.target.value)}
          mb={4}
          color='black'
        />
        <Input
          placeholder='Start Work'
          size='lg'
          value={startWorkEdited}
          onChange={(e) => setStartWorkEdited(e.target.value)}
          mb={4}
          color='black'
        />
        <Input
          placeholder='End Work'
          size='lg'
          value={endWorkEdited}
          onChange={(e) => setEndWorkEdited(e.target.value)}
          mb={4}
          color='black'
        />
        <Input
          placeholder='Color'
          size='lg'
          value={colorEdited}
          onChange={(e) => setColorEdited(e.target.value)}
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
            <Button colorScheme='blue' onClick={handleSaveEdited}>Save</Button>
          </ButtonGroup>
        </Center>
      </Flex>
    </Flex>
  );
}

export default EditChauffeur;
