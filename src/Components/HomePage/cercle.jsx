import { Flex } from '@chakra-ui/react';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default class Example extends PureComponent {
  render() {
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
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </Flex>
    );
  }
}
