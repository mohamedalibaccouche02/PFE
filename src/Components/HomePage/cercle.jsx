import { Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { useQuery } from 'react-query';
import { fetchAlllouages } from '../../api/louage_api';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function Example() {
  const { data: allLouagesData, isLoading: isAllLouagesLoading, isError: isAllLouagesError } = useQuery('allLouages', fetchAlllouages);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (allLouagesData) {
      const totalPassengers = allLouagesData.reduce((total, louage) => total + louage.passengers.reduce((acc, passenger) => acc + passenger.face_count, 0), 0);
      
      const louageData = allLouagesData.map(louage => ({
        name: louage.nom,
        value: (louage.passengers.reduce((acc, passenger) => acc + passenger.face_count, 0) / totalPassengers) * 100,
        totalPassengers: louage.passengers.reduce((acc, passenger) => acc + passenger.face_count, 0)
      }));
      

      setData(louageData);
    }
  }, [allLouagesData]);
  console.log(data);

  if (isAllLouagesLoading) return <div>Loading...</div>;
  if (isAllLouagesError) return <div>Error fetching data</div>;

  return (
    <Flex justifyContent="center" alignItems="center" h="100vh">
      <PieChart width={600} height={600}>
        <Pie
          data={data}
          cx={300}
          cy={300}
          innerRadius={120}
          outerRadius={200}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
            const RADIAN = Math.PI / 180;
            const radius = 25 + innerRadius + (outerRadius - innerRadius);
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
              <text
                x={x}
                y={y}
                fill={COLORS[index % COLORS.length]}
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
              >
                {`${data[index]?.name}: ${(value).toFixed(2)}%`}
              </text>
            );
          }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip 
          formatter={(value, name, props) => [`${props.payload.name}: ${props.payload.totalPassengers} Passengers`]}
        />
      </PieChart>
    </Flex>
  );
}
