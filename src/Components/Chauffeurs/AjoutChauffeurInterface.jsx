import React, { useContext } from 'react';
import { Flex, Text, Input, Alert, AlertIcon, Center,Button,ButtonGroup } from '@chakra-ui/react';
import ChauffeurContext from './ChauffeurContext';
import {createChauffeur} from '../../api/chauffeur_api'; 
import { useMutation } from 'react-query';
import { useNavigate,Link } from 'react-router-dom';

function AjoutChauffeurInterface() {
  const { nom, setNom, salaire, setSalaire, startWork, setStartWork, endWork, setEndWork,  error,color,setColor,setError ,motpasse,setMotpasse} = useContext(ChauffeurContext);
  const navigate = useNavigate();
  
  const handlechangeMotpasse = (e) => {
    setMotpasse(e.target.value);
  }
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


  const createChauffeurMutation = useMutation(createChauffeur);
  const handleSave = async () => {
    if (nom.length === 0 &&  salaire.length === 0 &&startWork.length===0 &&endWork.length===0 &&color.length===0 &&motpasse.length===0) {
      setError('Nom and Salaire are required.');
    
    }else if(motpasse.length===0){
      setError('Password is required.');
    }
    else if (nom.length === 0) {
      setError('Nom is required.');
    } else if (salaire.length === 0) {
      setError('Salaire is required.');
    } else if (startWork.length === 0) {
      setError('Start Work is required.');
    } else if (endWork.length === 0) {
      setError('End Work is required.');
    } else if (color.length === 0) {
      setError('Color is required.');
    } else {
      const newChauffeur = {
        nom,
        motpasse,
        salaire,
        startWork,
        endWork,
        src: 'https://bit.ly/broken-link',
        color,
      };
      try {
        const { data } = await createChauffeurMutation.mutateAsync(newChauffeur);
        setError('');
        setNom('');
        setMotpasse('');
        setSalaire('');
        setStartWork('');
        setEndWork('');
        setColor('');
        navigate('/Chauffeurs');
      } catch (error) {
        console.error(error);
        setError('Failed to create chauffeur.');
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
            placeholder='Password'
            size='lg'
            value={motpasse}
            onChange={handlechangeMotpasse}
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
          <ButtonGroup variant='outline' spacing='6'>
            <Button colorScheme='blue' w='200px' onClick={handleSave}>Save</Button>
            <Link to={'/chauffeurs'} >
                <Button colorScheme='blue' w='200px' >Annuler</Button>
              </Link>
          </ButtonGroup>
        </Center>
        </Flex>
      </Flex>
    </div>
  )
}

export default AjoutChauffeurInterface;
