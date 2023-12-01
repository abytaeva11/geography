import React, { PureComponent } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Brush,
    AreaChart,
    Area,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: '1950-1960',
        uv: 24,

    },
    {
        name: '1960-1970',
        uv: 38,

    },
    {
        name: '1970-1980',
        uv: 21.6,

    },
    {
        name: '1980-1990',
        uv: 21.7,

    },
    {
        name: '1990-2000',
        uv: 15.2,

    },
    {
        name: '2000-2009',
        uv: 18.5,

    },
    {
        name: '2016',
        uv: 2.1,

    },
];

export default class Analysis16 extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/synchronized-line-charts-zc3nl';

    render() {
        return (
            <div style={{ width: '90%' }}>


                <ResponsiveContainer width="100%" height={200}>
                    <LineChart
                        width={500}
                        height={200}
                        data={data}
                        syncId="anyId"
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
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
