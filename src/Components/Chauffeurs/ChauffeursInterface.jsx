import React from 'react';  
import NavBar from '../HomePage/NavBar';
import { Flex, Divider } from '@chakra-ui/react'; // Import Divider component from Chakra-UI
import ContainerChauffeur from './ContainerChauffeur'; 
import Button_chakra from '../LoginPage/Button_chakra';
import { Link } from 'react-router-dom'; 
import { fetchAllChauffeurs } from '../../api/chauffeur_api';
import { useQuery } from 'react-query';

function ChauffeursInterface() { 
  const { data, isError, isLoading } = useQuery('chauffeur', fetchAllChauffeurs);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;
    return (
      <div>
        <NavBar/> 
        <Flex color='white' h='150vh' flexDirection='column' bg='#ecbd4c'>
          {data.map((item, ) => (
            <React.Fragment key={item.nom}>
              <ContainerChauffeur item={item} />
              
              {<Divider borderWidth="2px" borderColor="whiteAlpha"/>}
            </React.Fragment>
          ))}
          <Link to='/AjoutChauffeur' >
            <Button_chakra name='Ajouter' />
          </Link>
        </Flex>
      </div>
    )
}

export default ChauffeursInterface;
