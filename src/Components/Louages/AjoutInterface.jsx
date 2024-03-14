import React, { useContext } from 'react';
import { Flex, Text, Input, Alert, AlertIcon, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ButtonAjout from './ButtonAjout';
import LouagesContext from './LouagesContext';

function AjoutInterface() {
  const { route, setRoute, id, setId, handleSave, error } = useContext(LouagesContext);

  const handlechangeID = (e) => {
    setId(e.target.value);
  };

  const handlechangeROUTE = (e) => {
    setRoute(e.target.value);
    console.log(route)
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
          placeholder='ID'
          size='lg'
          onChange={handlechangeID}
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
          <Link to='/Louages'>
            <ButtonAjout handleSave={handleSave} />
          </Link>
        </Center>
      </Flex>
    </Flex>
  );
}

export default AjoutInterface;
