import React, { useMemo } from 'react';
import { Bar, BarGroup } from '@visx/shape';
import { Group } from '@visx/group';
import { Text } from '@visx/text';
import { AnimatePresence, motion } from 'framer-motion';
import { scaleBand, scaleLinear } from '@visx/scale';
import './bar-chart.css';

type Count = {
  option: string;
  count: number;
};

const verticalMargin = 100;

// accessors
const getOption = (d: Count) => d.option;
const getOptionCount = (d: Count) => Number(d.count);

export type BarsProps = {
  width: number;
  height: number;
  data: Count[];
  events?: boolean;
};

const BarChart = ({ width, height, data = [], events = false }: BarsProps) => {
  // bounds
  const xMax = width;
  const yMax = height - verticalMargin;

  // scales, memoize for performance
  const xScale = useMemo(
    () =>
      scaleBand<string>({
        range: [0, xMax],
        round: true,
        domain: data.map(getOption),
        padding: 0.4,
      }),
    [xMax, data]
  );
  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...data.map(getOptionCount))],
      }),
    [yMax, data]
  );
  return width < 10 ? null : (
    <svg width={width} height={height}>
      <rect width={width} height={height} fill="var(--primary-bg)" rx={14} />
      <Group top={verticalMargin / 2}>
        {data.map((d, i) => {
          const option = getOption(d);
          const barWidth = xScale.bandwidth();
          const barHeight = yMax - yScale(getOptionCount(d));
          const barX = xScale(option);
          const barY = yMax - barHeight;
          return (
            <Group>
              <motion.rect
                key={`bar-${option}`}
                x={barX}
                // y={barY}
                width={barWidth}
                // height={barHeight}
                fill="var(--primary-700)"
                initial={{ y: yMax, height: 0 }}
                animate={{ y: barY, height: barHeight }}
                transition={{ type: 'spring', bounce: 0.1 }}
              />
              <Text
                x={barX ? barX + barWidth / 2 : width / i}
                y={yMax + 20}
                className="vx-legend-label"
                textAnchor="middle"
                fill="var(--grey-800)"
                fontSize=".8rem"
                dy="10"
                fontWeight="500"
                width={(width / data.length - 20) | 100}
              >
                {option}
              </Text>
            </Group>
          );
        })}
      </Group>
    </svg>
  );
};

export default BarChart;
