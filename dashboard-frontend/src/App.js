import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import XBarChart from './components/XBarChart';
import RChart from './components/RChart';
import ParetoChart from './components/ParetoChart';
import Histogram from './components/Histogram';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/xBarChart" element={<XBarChart />} />
          <Route path="/RChart" element={<RChart />} />
          <Route path="/ParetoChart" element={<ParetoChart />} />
          <Route path="/Histogram" element={<Histogram />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
