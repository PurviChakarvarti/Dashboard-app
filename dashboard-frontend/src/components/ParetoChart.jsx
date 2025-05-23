import React from "react";
import {
    Bar, ComposedChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import { Card, CardContent, Typography } from "@mui/material";
import mockData from "../data/mockData.json";

const data = mockData.paretoChart.data;

const ParetoChart = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>Pareto Chart</Typography>
                <ResponsiveContainer width="100%" height={400}>
                    <ComposedChart data={data}>
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="cause" label={{ value: 'Causes of complaints', position: 'insideBottom', offset: -5 }} />
                        <YAxis yAxisId={1} domain={[0, 100]} orientation='left' label={{ value: 'Frequency', angle: -90, position: 'insideLeft' }} />
                        <YAxis yAxisId={2} orientation='right' label={{ value: 'Cumulative%', angle: 90, position: 'insideRight' }} />
                        <Tooltip />
                        <Legend />
                        <Bar yAxisId={1} dataKey="frequency" name="Frequency" barSize={40} fill="red" />
                        <Line yAxisId={2} type="linear" dataKey="cumulative" stroke="#007bff" name="Cumulative%" />
                    </ComposedChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default ParetoChart;
