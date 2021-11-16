import React, { useState } from 'react';
import { Pie } from '@visx/shape';
import { Group } from '@visx/group';
import { Text } from '@visx/text';

type UserData = {
  type: string;
  number: number;
  color: string;
};
type PieChartProps = {
  data: UserData[];
  handleClick?: () => void;
};

const PieChart = ({ data, handleClick }: PieChartProps) => {
  const [active, setActive] = useState<UserData | null>(null);
  const totalUsers = data.reduce((acc, curr) => acc + curr.number, 0);
  const completed = data.filter((el) => el.type === 'completed')[0].number;

  const width = 200;
  const half = width / 2;

  return (
    <svg width={width} height={width}>
      <Group top={half} left={half}>
        <Pie
          data={data}
          pieValue={(data) => data.number}
          pieSort={(a, b) => (b.type === 'completed' ? 1 : -1)}
          outerRadius={half}
          innerRadius={(arc) => {
            const size = active && active.type === arc.data.type ? 12 : 8;
            return half - size;
          }}
          padAngle={0.04}
        >
          {(pie) => {
            return pie.arcs.map((arc) => {
              return (
                <g
                  key={arc.data.type}
                  onMouseEnter={() => setActive(arc.data)}
                  onMouseLeave={() => setActive(null)}
                  onClick={handleClick}
                >
                  <path
                    d={pie.path(arc) || undefined}
                    fill={arc.data.color}
                    style={{ transition: 'all .2s ease' }}
                  ></path>
                </g>
              );
            });
          }}
        </Pie>
        <Text
          textAnchor="middle"
          fill="var(--grey-800)"
          fontSize="1.2rem"
          dy="-10"
          fontWeight="700"
        >
          {/* @ts-ignore-next-line */}
          {`${Math.round((completed / totalUsers) * 100)}%`}
        </Text>
        <Text textAnchor="middle" fill="var(--grey-800)" fontSize=".9rem" dy="10">
          {/* @ts-ignore-next-line */}
          {`(${completed}/${totalUsers} users)`}
        </Text>
      </Group>
    </svg>
  );
};

export default PieChart;
