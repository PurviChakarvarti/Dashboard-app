import React from 'react';
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceLine, Legend
} from 'recharts';

// Sample mean data per subgroup
const sampleData = [
  { sample: 1, values: [20, 40, 30] },
  { sample: 2, values: [37, 51, 20] },
  { sample: 3, values: [32, 40, 34] },
  { sample: 4, values: [29, 47, 42] },
  { sample: 5, values: [22, 43, 52] },
  { sample: 6, values: [40, 58, 42] },
  { sample: 7, values: [32, 35, 37] },
];

const averageValues = [];
const range = [];
let sumX = 0;
let sumR = 0;
for (const item of sampleData) {
    let total = 0;
    for (const value of item.values) {
      total += value;
    }
    const avg = total / item.values.length;
    sumX += avg;
    averageValues.push(avg);
}

for (const item of sampleData) {
    if (Array.isArray(item.values)) {
      const max = Math.max(...item.values);
      const min = Math.min(...item.values);
      range.push(max - min);
      sumR += (max - min);
    } else {
      range.push(NaN);
    }
}
    

const controlChart = [
    {subgroup: 2, A2: 1.88},
    {subgroup: 3, A2: 1.02},
    {subgroup: 4, A2: 0.73},
    {subgroup: 5, A2: 0.58},
    {subgroup: 6, A2: 0.48},
    {subgroup: 7, A2: 0.42},
    {subgroup: 8, A2: 0.37},
    {subgroup: 9, A2: 0.34},
    {subgroup: 10, A2: 0.31},
    {subgroup: 11, A2: 0.29},
    {subgroup: 12, A2: 0.27},
    {subgroup: 13, A2: 0.25},
    {subgroup: 14, A2: 0.24},
    {subgroup: 15, A2: 0.22},
    {subgroup: 16, A2: 0.21},
    {subgroup: 17, A2: 0.20},
    {subgroup: 18, A2: 0.19},
    {subgroup: 19, A2: 0.19},
    {subgroup: 20, A2: 0.18}
];

let averageX = sumX/sampleData.length;
let averageR = sumR/sampleData.length;

// Control limits (usually calculated from data)
const controlLimits = {
  UCL: (averageX + controlChart[(sampleData[0].values.length)-2].A2*averageR).toFixed(2),  // Upper Control Limit
  LCL: (averageX - controlChart[(sampleData[0].values.length)-2].A2*averageR).toFixed(2),  // Lower Control Limit
  CL: averageX.toFixed(2)  // Center Line
};

const finalData = [
    {sample: 1, values: averageValues[0]},
    {sample: 2, values: averageValues[1]},
    {sample: 3, values: averageValues[2]},
    {sample: 4, values: averageValues[3]},
    {sample: 5, values: averageValues[4]},
    {sample: 6, values: averageValues[5]},
    {sample: 7, values: averageValues[6]},
]

const referenceLineUCL = `UCL - ${controlLimits.UCL}`;
const referenceLineLCL = `LCL - ${controlLimits.LCL}`;
const referenceLineCL = `CL - ${controlLimits.CL}`;

const XBarChart = () => {
  return (
    <div>
      <h2>X̄ (X-Bar) Control Chart</h2>
      <LineChart className="graph" margin={{top: 10, right: 20, bottom: 10, left: 20}} width={600} height={300} data={finalData}>
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

export default XBarChart;
