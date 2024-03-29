import React, { useEffect, useState } from 'react';
import { Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Flex } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { getTotalPassengersFromDatabase, getAllPassengers } from '../../api/passengers_api';

function Stats() {
  const { data: totalPassengersData, isLoading: isTotalPassengersLoading, isError: isTotalPassengersError } = useQuery('totalPassengers', getTotalPassengersFromDatabase);
  const { data: allPassengersData, isLoading: isAllPassengersLoading, isError: isAllPassengersError } = useQuery('allPassengers', getAllPassengers);
  const [todayPassengers, setTodayPassengers] = useState([]);

  useEffect(() => {
    if (allPassengersData) {
      const todayDate = new Date().toISOString().split('T')[0];
      const todayPassengersData = allPassengersData.filter(passenger => passenger.createdAt.split('T')[0] === todayDate);
      setTodayPassengers(todayPassengersData);
    }
  }, [allPassengersData]);

  if (isTotalPassengersLoading || isAllPassengersLoading) return <div>Loading...</div>;
  if (isTotalPassengersError || isAllPassengersError) return <div>Error fetching data</div>;

  const totalPassengers = totalPassengersData || 0;
  const totalRevenue = totalPassengers * 1.1;
  const todayTotalPassengers = todayPassengers.reduce((total, passenger) => total + passenger.face_count, 0);
  const todayTotalRevenue = todayTotalPassengers * 1.1;

  const statsData = [
    
  { label: "Passagers D'Aujourdhui", number: `${todayTotalPassengers}`, helpText: '100%', type: 'increase' },
  { label: "Revenu D'Aujourdhui", number: `${todayTotalRevenue.toFixed(2)} dt`, helpText: '100%', type: 'increase' },
  { label: 'Passagers Semainier', number: `${totalPassengers}`, helpText: '100%', type: 'increase' },
  {label:  'Revenu Semainier', number: `${totalRevenue.toFixed(2)} dt`, helpText: '100%', type: 'increase' },

    


    
  ];

  return (
    <Flex alignItems="center" justifyContent="center" mt={10} mb={10}>
      {statsData.map((item, index) => (
        <StatBox key={index} label={item.label} number={item.number} helpText={item.helpText} type={item.type} />
      ))}
    </Flex>
  );
}

function StatBox({ label, number, helpText, type }) {
  return (
    <Flex alignItems="center" justifyContent="center" bg="white" boxShadow="md" p={12} borderRadius="md" color="black" maxW="200px" mr={20}>
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
