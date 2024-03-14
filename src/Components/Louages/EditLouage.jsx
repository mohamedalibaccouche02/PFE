import React, { useContext, useState } from 'react';
import { Flex, Text, Input, Alert, AlertIcon } from '@chakra-ui/react';
import { Link, Route, useParams } from 'react-router-dom';
import ButtonAjout from './ButtonAjout';
import LouagesContext from './LouagesContext';

function EditLouage() {
  const { id } = useParams();
  const { route_edited, setRoute_Edited, id_edited, setId_Edited, editItem , route } = useContext(LouagesContext);
  const [error, setError] = useState(''); // Define setError using useState

  const handlechangeID_Edited = (e) => {
    setId_Edited(e.target.value);
  };

  const handlechangeROUTE_Edited = (e) => {
    setRoute_Edited(e.target.value);
  };

  const handleSave_Edited = () => {
    
      
     if (id_edited.length === 0)  {
 
      const updatedLouage = {id:id , route:route_edited} ; 
      editItem(id, updatedLouage);
      setError('');
      setId_Edited('');
      setRoute_Edited('');
    } else if (route_edited.length === 0) { 
        const updatedLouage = {id:id_edited , route:route}
      
      editItem(id, updatedLouage);
      setError('');
      setId_Edited('');
      setRoute_Edited('');
    } else {
      const updatedLouage = { id: id_edited, route: route_edited };
      editItem(id, updatedLouage);
      setError('');
      setId_Edited('');
      setRoute_Edited('');
    }
  }

  return (
    <div>
      <Flex color='white' h='150vh' flexDirection='column' bg='#ecbd4c'>
        <Text mb='8px'>Value</Text>
        <Input
          placeholder='ID_Edited'
          size='sm'
          value={id_edited}
          onChange={handlechangeID_Edited}
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
        <Link to='/Louages'>
          <ButtonAjout handleSave={handleSave_Edited} />
        </Link>
      </Flex>
    </div>
  )
}

export default EditLouage;
