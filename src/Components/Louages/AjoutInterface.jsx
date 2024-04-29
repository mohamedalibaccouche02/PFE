import React, { useContext } from 'react';
import { Flex, Text, Input, Alert, AlertIcon, Center, Select } from '@chakra-ui/react';
import LouagesContext from './LouagesContext';
import { ButtonGroup,Button } from '@chakra-ui/react'
import LouageImage from './louaj.png';
import { useMutation } from 'react-query';
import { createlouage } from '../../api/louage_api';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function AjoutInterface() {
  const { route, setRoute, error, setError , nom , setNom,raspberryID,setRaspberryID} = useContext(LouagesContext);
  const navigate = useNavigate();
 
  const handelchangeraspberryID = (e) =>{
    setRaspberryID(e.target.value);
  };



  const handlechangenom= (e) => {
    setNom(e.target.value);
  };

  const handlechangeROUTE = (value) => {
    setRoute(value);
  };

  const createLouageMutation = useMutation(createlouage);

  const handleSave = async () => {
    if (raspberryID ===0 && nom.length === 0 && route.length === 0) {
      setError('Tous les champs sont nécessaires');
    }else if(raspberryID.length ===0){
      setError('ID is required.');
    }
     else if (nom.length === 0) {
      setError('nom is required.');
    } else if (route.length === 0) {
      setError('Route is required.');
    } else {
      const newLouage = { raspberryID,nom, route, src: LouageImage };
      try {
        const { data } = await createLouageMutation.mutateAsync(newLouage);
     
          
          setError('');
          setRaspberryID('');
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
        <Text mb='8px' fontSize="xl" color='blue'>Ajouter</Text>
        <Input
          placeholder='Raspberry ID'
          size='lg'
          onChange={handelchangeraspberryID}
          mb={4} 
          color='black'
        />
        <Input
          placeholder='nom'
          size='lg'
          onChange={handlechangenom}
          mb={4} 
          color='black'
        />
        <Select
          placeholder="Select Route"
          value={route}
          onChange={(e) => handlechangeROUTE(e.target.value)}
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
        {error && (
          <Alert status="error" mb={4}>
            <AlertIcon />
            {error}
          </Alert>
        )}
        <Center>
          <ButtonGroup variant='outline' spacing='6'>
            <Button colorScheme='blue' w='200px' onClick={handleSave}>Save</Button>
            <Link to={'/Louages'} >
                <Button colorScheme='blue' w='200px' >Annuler</Button>
              </Link>
          </ButtonGroup>
        </Center>
      </Flex>
    </Flex>
  );
}

export default AjoutInterface;
