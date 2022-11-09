import { useState } from 'react';
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  useProSidebar,
} from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/styles/globalStyles';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import TimeLineOutlinedIcon from '@mui/icons-material/TimeLineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const Sidebar = () => {
  const theme = useTheme();
  const colours = tokens(theme.palette.mode);
  const { collapseSidebar, collapsed } = useProSidebar();
  const [selected, isSelected] = useState('Dashboard');

  return (
    <Box
      sx={{
        '& .sidebar-inner': {
          background: `${colours.primary[400]} !important`,
        },
        '& .icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .inner-item': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .inner-item:hover': {
          color: '#868dfb !important',
        },
        '& .menu-item:active': {
          color: '#6870fa !important',
        },
      }}
    >
      <ProSidebar>
        <Menu>
          <MenuItem
            onClick={() => collapseSidebar()}
            icon={collapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              color: colours.grey[100],
            }}
          >
            {!collapsed && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  ml: '15px',
                }}
              >
                <Typography>ADMINIS</Typography>
                <IconButton onClick={() => collapseSidebar()}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
