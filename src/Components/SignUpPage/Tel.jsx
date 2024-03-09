import React, { useContext } from 'react';
import { PhoneContext } from './Validationnumber';
import {  InputGroup, Input, InputRightElement,  } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';

function Tel() {
  const { phoneNumber, handlePhoneChange, error_number } = useContext(PhoneContext);

  
  return (<>
    
      <InputGroup size='md' mt={10} w={650} ml={10} border={0} backgroundColor='white' >
        <InputRightElement pointerEvents='none' width='4rem'>
          <PhoneIcon color='#052c51' />
        </InputRightElement>
        <Input 
        pr='4.5rem'
        type='tel'
         placeholder='Phone number'
         height={10}
         color={'#052c51'}
         onChange={(e) => handlePhoneChange(e.target.value)}
        
        />
      </InputGroup>
    {error_number && <div style={{ color: 'red', textAlign: 'center' }}>{error_number}</div>}
</>
     
    
  );
}

export default Tel;
