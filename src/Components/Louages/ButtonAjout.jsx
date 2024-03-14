import React from 'react'
import { ButtonGroup,Button } from '@chakra-ui/react'
function ButtonAjout({handleSave}) {
  return (
    <div>
      <ButtonGroup variant='outline' spacing='6'>
     <Button colorScheme='blue' onClick={handleSave}>Save</Button>
     </ButtonGroup>

    </div>
  )
}

export default ButtonAjout
