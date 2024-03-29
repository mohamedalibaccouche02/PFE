import React from 'react';
import { VictoryChart, VictoryBar, VictoryLabel } from 'victory';
import { useQuery } from 'react-query';
import axios from 'axios';

function App() {
  // Fetch total passengers data using useQuery
  const { data: passengersData, isLoading, isError } = useQuery('passengersData', getTotalPassengersFromDatabase);

  // Function to fetch total passengers from the backend API
  async function getTotalPassengersFromDatabase() {
    try {
      const response = await axios.get('http://localhost:5000/passengers');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch total passengers: ' + error.message);
    }
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  // Process passengers data to group by day and calculate total passengers for each day
  const passengersByDay = {};
  passengersData.forEach(passenger => {
    const createdAtDate = new Date(passenger.createdAt);
    let day;
    if (createdAtDate.getDay() === 0) {
      day = 'Dimanche';
    } else {
      day = createdAtDate.toLocaleString('fr-FR', { weekday: 'long' });
    }
    const faceCount = passenger.face_count;

    if (!passengersByDay[day]) {
      passengersByDay[day] = { x: day, y: faceCount };
    } else {
      passengersByDay[day].y += faceCount;
    }
  });

  // Convert passengersByDay object to an array of objects
  const chartData = Object.values(passengersByDay);

  return (
    
      
      <VictoryChart
        domainPadding={{ x: 10 }}
        animate={{ duration: 500 }}
      >
        <VictoryBar
          data={chartData}
          x="x"
          y="y"
          style={{
            data: { fill: "tomato", width: 12 }
          }}
          labels={({ datum }) => datum.y} // Display face count number on top of each bar
          labelComponent={<VictoryLabel dy={-20} />} // Adjust label position
          animate={{
            onExit: {
              duration: 500,
              before: () => ({
                _y: 0,
                fill: "orange",
                label: "BYE"
              })
            }
          }}
        />
      </VictoryChart>
    
  );
}

export default App;
