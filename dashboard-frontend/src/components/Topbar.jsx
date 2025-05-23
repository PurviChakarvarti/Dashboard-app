import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const Topbar = ({ onToggleSidebar }) => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate('/'); // redirects to Dashboard
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#001F3F' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={onToggleSidebar} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ cursor: 'pointer', fontWeight: 'bold' }}
          onClick={handleTitleClick}
        >
          Dashboard App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
