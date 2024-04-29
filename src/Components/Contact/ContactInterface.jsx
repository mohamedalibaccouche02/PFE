import React from 'react'
import { Flex ,Box,Text,Textarea,Stack,Button} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
function ContactInterface() {
  return (
    <div>
      <Flex color='white' h='90vh' flexDirection='column' bg='#ecbd4c'> 
      <Box bg='#ecbd4c'>
      <Text mt={'10'} mb='10' ml={'7'} fontSize={'xl'}>Laissez-nous un message: </Text>
  <Textarea 
    placeholder='Rédigez votre message ici... '
    size='bg'
    ml={'10%'}
    w={'80%'}
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
    </div>
  )
}

export default ContactInterface
