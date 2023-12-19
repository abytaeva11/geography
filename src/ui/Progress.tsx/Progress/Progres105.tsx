import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'кыргыздар ',
        uv: 88.5,
    },
    {
        name: 'орустар',
        uv: 6.2,

    },
    {
        name: 'казактар',
        uv: 1.5,

    },
    {
        name: 'уйгурлар',
        uv: 0.8,

    },
    {
        name: 'дунгандар',
        uv: 0.7,

    },
    {
        name: 'өзбектер',
        uv: 0.6,

    },

    {
        name: 'татарлар',
        uv: 0.4,

    },
    {
        name: 'украиндер',
        uv: 0.1,

    },
    {
        name: 'немистер',
        uv: 0.1,

    },
    {
        name: 'калган улуттар',
        uv: 1.2,
    },
];

export default class Progres105 extends PureComponent {
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
