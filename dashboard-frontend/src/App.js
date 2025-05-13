import React from 'react';
import './App.css';
import XBarChart from './components/XBarChart';
import RChart from './components/RChart';
import { Button, Typography, Container } from '@mui/material';

function App() {
    return (
        <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
            <Typography variant="h3" gutterBottom>
                Welcome to MUI + CRA!
            </Typography>
            <Button variant="contained" color="primary">
                Click Me
            </Button>
            <div className="App" style={{ padding: '2rem' }}>
                <XBarChart />
                <RChart />
            </div>
        </Container>
    );
}

export default App; 
