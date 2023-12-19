import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'кыргыздар ',
        uv: 77.01,
    },
    {
        name: 'өзбектер',
        uv: 14.7,

    },
    {
        name: 'тажиктер',
        uv: 6.9,

    },
    {
        name: 'орустар',
        uv: 0.5,

    },
    {
        name: 'татарлар',
        uv: 0.3,

    },
    {
        name: 'калган улуттар',
        uv: 0.4,
    },
];

export default class Progres134 extends PureComponent {
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
