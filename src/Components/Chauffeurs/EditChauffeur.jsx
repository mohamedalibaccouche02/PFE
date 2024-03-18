import React, { useContext, useState } from 'react';
import { Flex, Text, Input, Alert, AlertIcon } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import ButtonAjoutChauffeur from './ButtonAjoutChauffeur';
import ChauffeurContext from './ChauffeurContext';

function EditChauffeur() {
  const { nom } = useParams(); // Change from 'id' to 'nom'
  const { nom_edited, salaire, salaire_edited, setNom_Edited, setSalaire_Edited, editItem, startWork, setStartWork, endWork, setEndWork,color,setColor } = useContext(ChauffeurContext);
  const [error, setError] = useState('');

  const handlechangeNom = (e) => {
    setNom_Edited(e.target.value);
  };

  const handlechangeSalaire = (e) => {
    setSalaire_Edited(e.target.value);
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

  const handleSave_Edited = () => {
    if (nom_edited.length === 0) {
      const updatedChauffeur = { nom: nom, salaire: salaire_edited, startWork: startWork, endWork: endWork ,color:color };
      editItem(nom, updatedChauffeur);
      setError('');
      setNom_Edited('');
      setSalaire_Edited('');
      setStartWork('');
      setEndWork('');
      setColor('');
    } else if (salaire_edited.length === 0) {
      const updatedLouage = { nom: nom_edited, salaire: salaire, startWork: startWork, endWork: endWork ,color:color};
      editItem(nom, updatedLouage);
      setError('');
      setNom_Edited('');
      setSalaire_Edited('');
      setStartWork('');
      setEndWork('');
      setColor('');
    } else {
      const updatedChauffeur = { nom: nom_edited, salaire: salaire_edited, startWork: startWork, endWork: endWork ,color:color};
      editItem(nom, updatedChauffeur);
      setError('');
      setNom_Edited('');
      setSalaire_Edited('');
      setStartWork('');
      setEndWork('');
      setColor('');
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
          placeholder='Nom_edited'
          size='lg'
          value={nom_edited}
          onChange={handlechangeNom}
          mb={4}
          color='black'
        />
        <Input
          placeholder='Salaire_edited'
          size='lg'
          value={salaire_edited}
          onChange={handlechangeSalaire}
          mb={4}
          color='black'
        />
        <Input
          placeholder='Start Work'
          size='lg'
          value={startWork}
          onChange={handlechangeStartWork}
          mb={4}
          color='black'
        />
        <Input
          placeholder='End Work'
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
        <Link to='/Chauffeurs'>
        <ButtonAjoutChauffeur handleSave={handleSave_Edited} />
        </Link>
      </Flex>
    </Flex>
  );
}

export default EditChauffeur;
