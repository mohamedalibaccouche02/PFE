import React, { useState } from 'react';
import { Flex, Box, Heading, Text, SimpleGrid, GridItem, FormControl,Container, FormLabel, FormErrorMessage, FormHelperText, Input,Textarea,Stack,Button,Image} from '@chakra-ui/react';
import backgroundImage from './trah.jpeg'; // Import your background image here
import { EmailIcon } from '@chakra-ui/icons'
import louajee from './louaj.png'
import meeting from './lovepik-business-team-meeting-discussion-picture_500704810.jpg'
import logo from '../LoginPage/logoo.jpg'
import { FaFacebook,FaLinkedin } from "react-icons/fa";
function AcceuilInterface() {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === '';
 

  
  return (
    <Flex color='white' minHeight="300vh" flexDirection="column">
      <Box
        flex='1'
        bg={`url(${backgroundImage})`}
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
        minHeight="80vh"
      >
        <Box
          position="absolute"
          inset="0"
          backgroundColor="rgba(236,189,76,0.6)"
        />
        <Box
          position="absolute"
          top="40%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          zIndex="1"
          p={8}
        >
          <Heading as="h1" size="3xl" mb={8} color='#052c51'>
            Besoin d'un Bon Gestion pour votre Fleet  ?
          </Heading>
          <Heading as='h3' size='lg'>
            Louaji est la première solution dans le pays!
          </Heading>
        </Box>
      </Box>
      <Flex flex={1} flexDirection={{ base: 'column', md: 'row' }} minHeight="240px">
        <Box flex={1} bg="#052c51" p={4} textAlign="center">
          <Image src={louajee} alt="louaj image" />
        </Box>
        <Box flex={1} bg="white" p={4} textAlign="center">
          <Heading as="h1" size="xl" mb={8} color='#052c51'> À Propos de Louaji</Heading>
          <Text noOfLines={[1, 2, 3]} color='#052c51' fontSize="xl" mt={'15%'}>
            Louaji est une société qui offre aux propriétaires de flottes Louages plusieurs services dans une seule solution, gestion des flottes, gestion des chauffeurs et une bonne estimation des recettes.
          </Text>
        </Box>
      </Flex>
      <Box
  flex='1'
  bg={`url(${meeting})`}
  backgroundSize="cover"
  backgroundPosition="center"
  position="relative"
  minHeight="500px"
  
>
  {/* First overlay box for background */}
  <Box
    position="absolute"
    inset="0"
    backgroundColor="rgba(5, 44, 81, 0.5)"
  />
  
  {/* Second overlay box for text content */}
  <Box
    position="absolute"
    top="50%"
    left="50%"
    transform="translate(-50%, -50%)"
    textAlign="center"
    zIndex="1"
    p={8}
  >
     <SimpleGrid columns={3} spacing={0}>
         <GridItem colSpan={1} bg='white' border="3px solid #ecbd4c" mt={50} h='350px' width={350} ml={'-50%'}>
           <Heading size="md" textAlign="center" color={'#052c51'} mt={5}>Gestion des Chauffeurs</Heading>
            <Text color={'#052c51'} mt={'20'} fontSize="md" >
            Notre système vous garantit une bonne gestion pour vos chauffeurs. Vous pouvez consulter les horaires de leurs services, les historiques, ainsi que leurs salaires.
            </Text>
         </GridItem>
         <GridItem colSpan={1} bg='white' border="3px solid #ecbd4c" mt={50} h='350px' width={350}>
          <Heading size="md" textAlign="center" color={'#052c51'} mt={5}>Gestion des Louages</Heading>
           <Text color={'#052c51'} mt={'20'} fontSize="md" >
           Vous pouvez identifier tous vos louages, chacun par son identifiant et sa route, et calculer combien chaque louage fait un gain.

            </Text>
         </GridItem>
         <GridItem colSpan={1} bg='white' border="3px solid #ecbd4c" mt={50} h='350px' width={350} ml={'51%'}>
         <Heading size="md" textAlign="center" color={'#052c51'} mt={5}>Le Gain</Heading>
           <Text color={'#052c51'} mt={'20'} fontSize="md" >
           Vous pouvez voir le nombre total de passagers en temps réel, ainsi qu'une bonne estimation de la recette à la fin de la journée.

           </Text>
         </GridItem>
         </SimpleGrid>
  </Box>
</Box>

      <Flex flex={1} minHeight="400px" bgColor='#ecbd4c' flexDirection="column">
        <Box h={70} w={500} bg='#ecbd4c' mt={50} ml='35%'>
          <Heading color='#052c51' noOfLines={1}>
            Commander Votre Gadget!
          </Heading>
        </Box>
        <Box h={100} w={700} bg='#ecbd4c'  ml='29%' >
          <Heading color='#052c51' noOfLines={2}>
            Appelez-nous sur 29041362
            Ou écrivez-nous si vous avez des questions :
          </Heading>
        </Box>
        <Box bg='#ecbd4c' width='70%' ml='15%'>
  <FormControl isRequired mb="4">
    <FormLabel>Prénom</FormLabel>
    <Input
      placeholder='Prénom'
      borderColor='white'
      borderWidth='2px'
      color='white'
      _placeholder={{ color: 'white' }}
    />
  </FormControl>
  <FormControl mb="4">
    <FormLabel>Email</FormLabel>
    <Input
      type='email'
      value={input}
      onChange={handleInputChange}
      borderColor='white'
      borderWidth='2px'
      color='white'
      _placeholder={{ color: 'white' }}
      placeholder='Email'
    />
    {!isError ? (
      <FormHelperText>
        Entrer votre Email
      </FormHelperText>
    ) : (
      <FormErrorMessage>Email est nécessaire.</FormErrorMessage>
    )}
  </FormControl>
  <Text mb='4'>Laissez-nous un message: </Text>
  <Textarea
    placeholder='Rédigez votre message ici... '
    size='sm'
    borderColor='white'
    borderWidth='2px'
    color='white'
    _placeholder={{ color: 'white' }}
  />
          <Stack direction='row'>
            <Button leftIcon={<EmailIcon />} bg='#052c51' colorScheme='white' variant='solid' ml='40%' mt='20px' mb={'10px'} w={200}>
              Envoyer
            </Button>
          </Stack>
        </Box>
      </Flex>
      <Container maxW='100%' h={100} bg='#052c51' color='white'>
        <Box display="flex" justifyContent="space-between">
          <Box h={50} w={150}  marginTop='20px'>
            <Image src={logo} alt='icon' w='100%' h='50px' />
          </Box>
          <Box h={50} w={320}  marginTop='20px' mr={850}>
          <Text fontSize='md' color='white'>
              47 rue Marrakech Khzema<br />
              4051 Sousse, Tunisie.
            </Text>
            </Box>
          <Flex alignItems="center" marginTop='20px' mr={5}>
            <Box  color="white" fontSize="40px" marginRight="20px">
              <FaFacebook />
            </Box>
            <Box color="white" fontSize="40px">
              <FaLinkedin />
            </Box>
          </Flex>
        </Box>
        
      </Container>
    </Flex>
  );
}

export default AcceuilInterface;
