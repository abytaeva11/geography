import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'кыргыздар ',
        uv: 64.8,
    },
    {
        name: 'орустар',
        uv: 16.1,

    },
    {
        name: 'уйгурлар',
        uv: 1.9,

    },
    {
        name: 'өзбектер',
        uv: 1.9,

    },
    {
        name: 'казактар',
        uv: 1.5,

    },
    {
        name: 'татарлар',
        uv: 0.39,

    },
    {
        name: 'казактар',
        uv: 0.55,

    },
    {
        name: 'түрктөр',
        uv: 1.3,

    },
    {
        name: 'азербайджандар',
        uv: 1.3,

    },
    {
        name: 'украиндер',
        uv: 0.7,

    },
    {
        name: 'татарлар',
        uv: 0.7,

    },


    {
        name: 'немистер',
        uv: 0.6,

    },
    {
        name: 'корейлер',
        uv: 0.5,

    },
    {
        name: 'тажиктер',
        uv: 0.4,

    },
    {
        name: 'чечендер',
        uv: 0.1,

    },

    {
        name: 'калган улуттар',
        uv: 0.7,
    },
];

export default class Progres92 extends PureComponent {
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
