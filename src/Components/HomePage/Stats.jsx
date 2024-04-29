import React, { useEffect, useState } from 'react';
import { Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Flex } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { fetchAlllouages} from '../../api/louage_api';
import { getAllPassengers ,getTotalPassengersFromDatabase} from '../../api/passengers_api';

function Stats() {
  const { data: allLouagesData, isLoading: isAllLouagesLoading, isError: isAllLouagesError } = useQuery('allLouages', fetchAlllouages);
  const { data: allPassengersData, isLoading: isAllPassengersLoading, isError: isAllPassengersError } = useQuery('allPassengers', getAllPassengers);
  const { data: totalPassengersData, isLoading: isTotalPassengersLoading, isError: isTotalPassengersError } = useQuery('totalPassengers', getTotalPassengersFromDatabase);
  const [todayPassengers, setTodayPassengers] = useState([]);

  useEffect(() => {
    if (allPassengersData) {
      const todayDate = new Date().toISOString().split('T')[0];
      const todayPassengersData = allPassengersData.filter(passenger => passenger.createdAt.split('T')[0] === todayDate);
      setTodayPassengers(todayPassengersData);
    }
  }, [allPassengersData]);

  if (isAllLouagesLoading || isAllPassengersLoading || isTotalPassengersLoading) return <div>Loading...</div>;
  if (isAllLouagesError || isAllPassengersError || isTotalPassengersError) return <div>Error fetching data</div>;

  // Calculate total revenue for each louage
  const todayRevenueByLouage = {};
  allLouagesData.forEach(louage => {
    todayRevenueByLouage[louage.nom] = todayPassengers.filter(passenger => passenger.raspberryID === louage.raspberryID).reduce((total, passenger) => total + passenger.face_count, 0) * 1;
  });

  // Determine which louage has the highest revenue
  const louageNames = Object.keys(todayRevenueByLouage);
  const louageRevenues = louageNames.map(name => todayRevenueByLouage[name]);
  const maxRevenue = Math.max(...louageRevenues);
  const highestRevenueLouage = louageNames[louageRevenues.indexOf(maxRevenue)];

  const statsData = allLouagesData.map(louage => ({
    label: "Revenu D'Aujourdhui",
    number: `${todayRevenueByLouage[louage.nom].toFixed(2)} DT`,
    helpText: louage.nom,
    type: louage.nom === highestRevenueLouage ? 'increase' : 'decrease'
  }));

  const totalPassengers = totalPassengersData || 0;
  const totalRevenue = totalPassengers * 1;

  statsData.push(
    { label: 'Passagers Semainier', number: `${totalPassengers} Passagers`, helpText: '100%', type: 'increase' },
    { label: 'Revenu Semainier', number: `${totalRevenue.toFixed(2)} DT`, helpText: '100%', type: 'increase' }
  );

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
