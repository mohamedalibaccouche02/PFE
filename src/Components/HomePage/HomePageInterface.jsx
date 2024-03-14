import React from 'react';
import { Flex, Box } from '@chakra-ui/react'; 
import Stats from './Stats';
import Courb from './Courb';
import Cercle from './cercle'; // Corrected import statement

function HomePageInterface() {
  return (
    <Flex color='white' h='150vh' flexDirection='column' bg='#ecbd4c'>
      <Box bg='#ecbd4c'>
        <Stats/>
      </Box>
      <Flex flexDirection='row'>
        <Box flex='1' bg='white' mr='5%' borderRadius='30' height='70%' ml='3%' display='flex' justifyContent='center' alignItems='center'>
          <Courb/>
        </Box> 
        <Box flex='1' bg='white' mr='5%' borderRadius='30' height='70%' ml='3%' display='flex' justifyContent='center' alignItems='center'>
          <Cercle/>
        </Box> 
      </Flex>
    </Flex>
  );
}

export default HomePageInterface;
