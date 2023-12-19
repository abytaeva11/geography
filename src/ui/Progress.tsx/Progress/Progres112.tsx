import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'кыргыздар ',
        uv: 99.2,
    },
    {
        name: 'өзбектер',
        uv: 0.2,

    },
    {
        name: 'түрктөр',
        uv: 1.2,

    },
    {
        name: 'дунгандар',
        uv: 0.2,

    },

    {
        name: 'казактар',
        uv: 0.1,

    },
    {
        name: 'татарлар',
        uv: 0.1,

    },

    {
        name: 'орустар',
        uv: 0.0,

    },
    {
        name: 'калган улуттар',
        uv: 0.1,
    },
];

export default class Progres112 extends PureComponent {
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
