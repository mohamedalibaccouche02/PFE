import React, { useState } from 'react';
import { Flex, Text, Input, Alert, AlertIcon, Center, ButtonGroup, Button, Select } from '@chakra-ui/react';
import { useMutation, useQuery } from 'react-query';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { fetchAlllouages } from '../../api/louage_api';

function EditLouage() {
  const [nomEdited, setNomEdited] = useState('');
  const [routeEdited, setRouteEdited] = useState('');
  const [error, setError] = useState('');
  const { data, isLoading, isError } = useQuery('Louage', fetchAlllouages);
  const location = useLocation();
  const id = location.pathname.split('/').pop(); // Extract the value after `/EditLouage/`
  console.log('id:', id);
  const navigate = useNavigate();

  
  const mutation = useMutation(async (updatedLouage) => {
    const response = await axios.put(`http://localhost:5000/louages/${id}`, updatedLouage);
    return response.data;
  });

  const handleNomChange = (e) => {
    setNomEdited(e.target.value);
  };

  const handleRouteChange = (value) => {
    setRouteEdited(value);
  };

  const handleSaveEdited = async () => {
    if (nomEdited.length === 0 || routeEdited === '') {
      setError('There is an empty input');
    } else {
      const updatedLouage = { nom: nomEdited, route: routeEdited };
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
          <Text mb='8px' fontSize="xl" color='blue'>Edit Louage</Text>
          {isLoading ? (
            <Text>Loading...</Text>
          ) : isError ? (
            <Text>Error fetching data</Text>
          ) : (
            <>
              <Input
                placeholder={data.find(item => item._id === id)?.nom || ''}
                size='lg'
                value={nomEdited}
                onChange={handleNomChange}
                mb={4}
                color='black'
              />
              <Select
                placeholder="Select Route"
                value={routeEdited}
                onChange={(e) => handleRouteChange(e.target.value)}
                size='lg'
                mb={4}
                color='black'
              >
                <option value="kalaa kbira">Kalaa Kbira</option>
                <option value="hergla">Hergla</option>
                <option value="Beb bhar">Beb Bhar</option>
                <option value="akouda">Akouda</option>
                <option value="menchia">Menchia</option>
              </Select>
            </>
          )}
          {error && (
            <Alert status="error" mb={4}>
              <AlertIcon />
              {error}
            </Alert>
          )}
          <Center>
            <ButtonGroup variant='outline' spacing='6'>
              <Button colorScheme='blue' w='200px' onClick={handleSaveEdited}>Save</Button>
              <Link to={'/Louages'} >
                <Button colorScheme='blue' w='200px' >Annuler</Button>
              </Link>
            </ButtonGroup>
          </Center>
        </Flex>
      </Flex>
    </div>
  );
}

export default EditLouage;
