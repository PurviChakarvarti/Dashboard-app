import React, { useState } from 'react';
import { Box } from '@mui/material';
import SideBar from './SideBar';
import Topbar from './Topbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Fixed Topbar */}
      <Box sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1100,
      }}>
        <Topbar onToggleSidebar={toggleSidebar} />
      </Box>

      <Box sx={{ display: 'flex', pt: '64px' }}>
        {/* Sidebar (below topbar) */}
        {isSidebarOpen && (
          <Box sx={{
            width: 240,
            minHeight: '100vh',
            bgcolor: '#f0f0f0',
            pt: '64px',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1000,
          }}>
            <SideBar />
          </Box>
        )}

        {/* Main Content */}
        <Box sx={{
          flexGrow: 1,
          ml: isSidebarOpen ? '240px' : 0,
          pt: '64px',
          width: '100%',
          p: 2
        }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
