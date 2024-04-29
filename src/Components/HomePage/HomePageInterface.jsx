import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react'; 
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
      <Box flex='1' bg='white' mr='5%' borderRadius='30' height='70%' ml='3%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
          <Courb/>
          <Text color={'#052c51'} mb={5} fontSize={'xl'}>Nombre des Passagers total dans chaque jour</Text> 
        </Box> 
        <Box flex='1' bg='white' mr='5%' borderRadius='30' height='70%' ml='3%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
          <Cercle />
          <Text color={'#052c51'} mb={20} fontSize={'xl'}>Pourcentage des Passagers dans chaque Louages</Text> {/* Added mt={4} for margin-top */}
        </Box> 
      </Flex>
    </Flex>
  );
}

export default HomePageInterface;
