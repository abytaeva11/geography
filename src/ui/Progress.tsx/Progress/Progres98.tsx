import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'кыргыздар ',
        uv: 93.2,
    },
    {
        name: 'орустар',
        uv: 1.4,

    },
    {
        name: 'казактар',
        uv: 1.2,

    },
    {
        name: 'өзбектер',
        uv: 0.7,

    },
    {
        name: 'түрктөр',
        uv: 0.6,

    },
    {
        name: 'немистер',
        uv: 0.1,

    },
    {
        name: 'татарлар',
        uv: 0.1,

    },
    {
        name: 'украиндер',
        uv: 0.1,

    },
    {
        name: 'уйгурлар',
        uv: 0.1,

    },
    {
        name: 'калган улуттар',
        uv: 0.7,
    },
];

export default class Progres98 extends PureComponent {
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
