import React, { useContext } from 'react';
import { Flex, Text, Input, Alert, AlertIcon, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ButtonAjoutChauffeur from './ButtonAjoutChauffeur';
import ChauffeurContext from './ChauffeurContext';
import { color } from 'framer-motion';

function AjoutChauffeurInterface() {
  const { nom, setNom, salaire, setSalaire, startWork, setStartWork, endWork, setEndWork, handleSave, error,setColor } = useContext(ChauffeurContext);

  const handlechangeNom = (e) => {
    setNom(e.target.value);
  };

  const handlechangeSalaire = (e) => {
    setSalaire(e.target.value);
  };

  const handlechangeStartWork = (e) => {
    setStartWork(e.target.value);
  };

  const handlechangeEndWork = (e) => {
    setEndWork(e.target.value);
  };
  const handlechangeColor = (e) => {
    setColor(e.target.value);
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
          justifyContent="space-between"
        >
          <Text mb='8px' fontSize="xl" color='blue'>Add New Chauffeur</Text>
          <Input
            placeholder='Nom'
            size='lg'
            value={nom}
            onChange={handlechangeNom}
            mb={4}
            color='black'
          />
          <Input
            placeholder='Salaire'
            size='lg'
            value={salaire}
            onChange={handlechangeSalaire}
            mb={4}
            color='black'
          />
          <Input
            placeholder='Start Work (HH:MM)'
            size='lg'
            value={startWork}
            onChange={handlechangeStartWork}
            mb={4}
            color='black'
          />
          <Input
            placeholder='End Work (HH:MM)'
            size='lg'
            value={endWork}
            onChange={handlechangeEndWork}
            mb={4}
            color='black'
          />
          <Input
            placeholder='Color'
            size='lg'
            value={color}
            onChange={handlechangeColor}
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
          <Link to='/Chauffeurs'>
            <ButtonAjoutChauffeur handleSave={handleSave} />
            </Link>
          </Center>
        </Flex>
      </Flex>
    </div>
  )
}

export default AjoutChauffeurInterface;
