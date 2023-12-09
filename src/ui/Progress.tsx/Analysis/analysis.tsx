// for 26 page

import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '1990',
    uv: 82852,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '1995',
    uv: 37302,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '2000',
    uv: 27887,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '2005',
    uv: 30741,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '2010',
    uv: 54531,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '2015 жылдар',
    uv: 7788,
    pv: 3800,
    amt: 2500,
  },
];

export default class Analysis26 extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

  render() {
    return (
        <ResponsiveContainer width="80%" height={400}>
          <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
    );
  }
}
