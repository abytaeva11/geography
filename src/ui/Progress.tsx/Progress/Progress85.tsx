import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'кыргыздар ',
        uv: 74.04,
    },
    {
        name: 'орустар',
        uv: 4.97,

    },
    {
        name: 'уйгурлар',
        uv: 0.90,

    },
    {
        name: 'өзбектер',
        uv: 14.81,

    },
    {
        name: 'корейлер',
        uv: 0.25,

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
        name: 'украиндер',
        uv: 0.124,

    },
    {
        name: 'дунгарлар',
        uv: 1.135,

    },
    {
        name: 'түрктөр',
        uv: 0.68,

    },
    {
        name: 'азербайджандар',
        uv: 0.32,

    },
    {
        name: 'немистер',
        uv: 0.12,

    },
    {
        name: 'тажиктер',
        uv: 0.89,

    },
    {
        name: 'калган улуттар',
        uv: 0.1074,
    },
];

export default class Progres85 extends PureComponent {
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
