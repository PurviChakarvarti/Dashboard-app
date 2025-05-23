import React from "react";
import {
    Bar, ComposedChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label, ResponsiveContainer
} from "recharts";
import { Card, CardContent, Typography } from "@mui/material";
import mockData from "../data/mockData.json";

const data = mockData.histogram.data;

const Histogram = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Histogram and Normal Distribution Curve
                </Typography>
                <ResponsiveContainer width="100%" height={400}>
                    <ComposedChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="mid">
                            <Label value="Score Midpoint" offset={-5} position="insideBottom" />
                        </XAxis>
                        <YAxis>
                            <Label value="Frequency / Curve" angle={-90} position="insideLeft" />
                        </YAxis>
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="frequency" name="Histogram" fill="#8884d8" barSize={30} />
                        <Line type="monotone" dataKey="curve" name="Normal Curve" stroke="#ff7300" strokeWidth={2} dot={false} />
                    </ComposedChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default Histogram;
