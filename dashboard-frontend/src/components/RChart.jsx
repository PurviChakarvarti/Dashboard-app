import React from 'react';
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceLine, Legend
} from 'recharts';

// Sample mean data per subgroup
const sampleData = [
  { sample: 1, values: 20 },
  { sample: 2, values: 31 },
  { sample: 3, values: 8 },
  { sample: 4, values: 18 },
  { sample: 5, values: 30 },
  { sample: 6, values: 18 },
  { sample: 7, values: 5 },
];


// Control limits (usually calculated from data)
const controlLimits = {
  UCL: 35, // Upper Control Limit
  LCL: 3, // Lower Control Limit
  CL: 18.5 // Center Line
};

const referenceLineUCL = `UCL - ${controlLimits.UCL}`;
const referenceLineLCL = `LCL - ${controlLimits.LCL}`;
const referenceLineCL = `CL - ${controlLimits.CL}`;

const RChart = () => {
  return (
    <div>
      <h2>R Control Chart</h2>
      <LineChart className="graph" margin={{top: 10, right: 20, bottom: 10, left: 20}} width={600} height={300} data={sampleData}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="sample" label={{ value: 'Sample', position: 'insideBottom', offset: -5 }} />
        <YAxis domain={[0, Math.floor(Number(controlLimits.UCL))+10]} label={{ value: 'Mean', angle: -90, position: 'insideLeft' }} allowDecimals={false}/>
        <Tooltip />
        <Legend />
        <Line type="linear" dataKey="values" stroke="#007bff" name="Sample Mean" />

        <ReferenceLine y={controlLimits.UCL} label={{position:"insideBottom", value:referenceLineUCL}} stroke="red" strokeDasharray="3 3" />
        <ReferenceLine y={controlLimits.LCL} label={{position:"insideBottom", value:referenceLineLCL}} stroke="red" strokeDasharray="3 3" />
        <ReferenceLine y={controlLimits.CL} label={{position:"insideBottom", value:referenceLineCL}} stroke="green" strokeDasharray="3 3" />
      </LineChart>
    </div>
  );
};

export default RChart;
