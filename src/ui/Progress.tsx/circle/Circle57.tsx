// страница 20

import React, { PureComponent, ReactElement } from 'react';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface CustomizedLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}

const data = [
  { name: 'Group F', value: 2.1 },
  { name: 'Group E', value: 4.6 },
  { name: 'Group D', value: 5.6 },
  { name: 'Group C', value: 5.7 },
  { name: 'Group B', value: 9.6 },
  { name: 'Group A', value: 69 },




];

const COLORS = ['#0088FE', '#00C49F', 'rgba(238,0,33,0.86)'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: CustomizedLabelProps): ReactElement => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class Circle57 extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

  render() {
    return (
      <ResponsiveContainer width={250} height={250}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} className="ml-[150px]" />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
