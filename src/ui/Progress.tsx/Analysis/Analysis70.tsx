// for 26 page

import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '1940',
        uv: 104.5,
        pv: 2400,
        amt: 2400,
    },
    {
        name: '1970',
        uv: 437.1,
        pv: 1398,
        amt: 2210,
    },
    {
        name: '1999',
        uv: 778.7,
        pv: 9800,
        amt: 2290,
    },
    {
        name: '2009',
        uv: 865.5,
        pv: 3908,
        amt: 2000,
    },
    {
        name: '2016',
        uv: 958.5,
        pv: 4800,
        amt: 2181,
    },
];

export default class Analysis70 extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

    render() {
        return (
            <ResponsiveContainer width="80%" height={300}>
                <AreaChart
                    width={500}
                    height={300}
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
