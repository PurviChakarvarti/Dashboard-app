import React from 'react';
import { Drawer, List, ListItem, ListItemText, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <List>
        <ListItem button component={Link} to="/XBarChart">
          <ListItemText primary="X Bar Chart" />
        </ListItem>
        <ListItem button component={Link} to="/RChart">
          <ListItemText primary="R Chart" />
        </ListItem>
        <ListItem button component={Link} to="/ParetoChart">
          <ListItemText primary="Pareto Chart" />
        </ListItem>
        <ListItem button component={Link} to="/Histogram">
          <ListItemText primary="Histogram" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
