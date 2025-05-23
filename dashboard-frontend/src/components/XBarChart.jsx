import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { Card, CardContent, Typography } from "@mui/material";
import mockData from "../data/mockData.json";

const { data, limits } = mockData.xBarChart;

const XBarChart = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>X̄ (X-Bar) Control Chart</Typography>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="sample" />
                        <YAxis domain={[0, limits.UCL+5]} />
                        <Tooltip />
                        <ReferenceLine y={limits.UCL} stroke="red" strokeDasharray="5 5" label="UCL" />
                        <ReferenceLine y={limits.LCL} stroke="red" strokeDasharray="5 5" label="LCL" />
                        <ReferenceLine y={limits.CL} stroke="blue" strokeDasharray="3 3" label="CL" />
                        <Line type="linear" dataKey="values" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default XBarChart;
