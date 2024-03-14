import React from 'react';
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Flex,
} from '@chakra-ui/react';

function Stats() {
  // Data for the StatBoxes
  const statsData = [
    { label: 'Sent', number: '345,670', helpText: '23.36%', type: 'increase' },
    { label: 'Received', number: '123,456', helpText: '12.45%', type: 'decrease' },
    { label: 'Pending', number: '78,901', helpText: '10.28%', type: 'increase' },
    { label: 'Pending', number: '78,901', helpText: '10.28%', type: 'increase' },
  ];

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      mt={10} // Adjust the top margin as needed 
      mb={10}
   
    >
      {statsData.map((item) => (
        <StatBox label={item.label} number={item.number} helpText={item.helpText} type={item.type} />
      ))}
    </Flex>
  );
}

function StatBox({ label, number, helpText, type }) {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      bg="white"
      boxShadow="md"
      p={12}
      borderRadius="md"
      color="black"
      maxW="200px" // Adjust the width as needed
      mr={20} // Add right margin for spacing between StatBoxes
    >
      <Stat>
        <StatLabel>{label}</StatLabel>
        <StatNumber>{number}</StatNumber>
        <StatHelpText>
          <StatArrow type={type} />
          {helpText}
        </StatHelpText>
      </Stat>
    </Flex>
  );
}

export default Stats;
