import React, { useMemo } from 'react';
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';
import { scaleBand, scaleLinear } from '@visx/scale';
import './bar-chart.css';
import { Response } from '../../types';

type freq = {
  letter: string;
  frequency: number;
};

const data = [
  { letter: 'A', frequency: 0.08167 },
  { letter: 'B', frequency: 0.01492 },
  { letter: 'C', frequency: 0.02782 },
  { letter: 'D', frequency: 0.04253 },
  { letter: 'E', frequency: 0.12702 },
];
const verticalMargin = 60;

// accessors
const getLetter = (d: freq) => d.letter;
const getLetterFrequency = (d: freq) => Number(d.frequency) * 100;

export type BarsProps = {
  width: number;
  height: number;
  events?: boolean;
};

const BarChart = ({ width, height, events = false }: BarsProps) => {
  // bounds
  const xMax = width;
  const yMax = height - verticalMargin;

  // scales, memoize for performance
  const xScale = useMemo(
    () =>
      scaleBand<string>({
        range: [0, xMax],
        round: true,
        domain: data.map(getLetter),
        padding: 0.4,
      }),
    [xMax]
  );
  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...data.map(getLetterFrequency))],
      }),
    [yMax]
  );

  return width < 10 ? null : (
    <svg width={width} height={height}>
      <rect width={width} height={height} fill="var(--primary-bg)" rx={14} />
      <Group top={verticalMargin / 2}>
        {data.map((d) => {
          const letter = getLetter(d);
          const barWidth = xScale.bandwidth();
          const barHeight = yMax - (yScale(getLetterFrequency(d)) ?? 0);
          const barX = xScale(letter);
          const barY = yMax - barHeight;
          return (
            <Group>
              <Bar
                key={`bar-${letter}`}
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                fill="var(--primary-700)"
              />
              <text
                x={(barX || 0) + 20}
                y={yMax + 20}
                className="vx-legend-label"
                textAnchor="middle"
              >
                {letter}
              </text>
            </Group>
          );
        })}
      </Group>
    </svg>
  );
};

export default BarChart;
