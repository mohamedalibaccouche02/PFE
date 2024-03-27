import React from 'react';  
import NavBar from '../HomePage/NavBar';
import { Flex, Divider } from '@chakra-ui/react'; 
import Container from './Container'; 
import Button_chakra from '../LoginPage/Button_chakra';
import { Link } from 'react-router-dom'; 
import { fetchAlllouages } from '../../api/louage_api';
import { useQuery } from 'react-query';

function LouagesInterface() { 
    const { data, isError, isLoading } = useQuery('louage', fetchAlllouages);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;
    
    return (
      <div>
        <NavBar/> 
        <Flex color='white' h='150vh' flexDirection='column' bg='#ecbd4c'>
          {data.map((item) => (
            <React.Fragment key={item.id}>
              <Container item={item} />
             
              { <Divider borderWidth="2px" borderColor="whiteAlpha" />}
            </React.Fragment>
          ))}
          <Link to='/AjoutLouage' >
            <Button_chakra name='Ajouter' />
          </Link>
        </Flex>
      </div>
    );
}

export default LouagesInterface;
