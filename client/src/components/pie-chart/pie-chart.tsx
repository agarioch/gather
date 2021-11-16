import React from 'react';
import { Pie } from '@visx/shape';
import { Group } from '@visx/group';

const data = [
  { type: 'completed', number: 3 },
  { type: 'total', number: 7 },
];

const PieChart = () => {
  const width = 400;
  const half = width / 2;
  return (
    <svg width={width} height={width}>
      <Group top={half} left={half}>
        <Pie data={data} pieValue={(data) => data.number} outerRadius={half}></Pie>
      </Group>
    </svg>
  );
};
