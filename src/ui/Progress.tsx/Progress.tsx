import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '1897',
        uv: 663,
    },
    {
        name: '1926',
        uv: 1001.7,

    },
    {
        name: '1959',
        uv: 2066.1,

    },
    {
        name: '1959',
        uv: 2066.1,

    },
    {
        name: '1970',
        uv: 2933.2,

    },
    {
        name: '1979',
        uv: 3529,

    },
    {
        name: '1989',
        uv: 4296.5,

    },
    {
        name: '1999',
        uv: 4811.1,

    },
    {
        name: '2009',
        uv: 5418.3,

    },
    {
        name: '2016',
        uv: 6020,

    },
    {
        name: '2023',
        uv: 6902,

    },
];

export default class Progres14 extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/stacked-bar-chart-s47i2';

    render() {
        return (
            <ResponsiveContainer width={1000} height={400}>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="uv" stackId="a" fill="#8f8fe7" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
