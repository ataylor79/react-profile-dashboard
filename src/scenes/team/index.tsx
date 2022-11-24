import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridColumns, GridRenderCellParams } from '@mui/x-data-grid';
import Header from '../../components/Header';
import useTeams from '../../hooks/useTeams';
import AdminPanelOutlinedIcons from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcons from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcons from '@mui/icons-material/SecurityOutlined';

import { tokens, Colours } from '../../theme';

const renderAccessCell = (
  { row: { access } }: GridRenderCellParams<any, any, any>,
  colours: Colours
): React.ReactNode => {
  return (
    <Box
      sx={{
        width: '60%',
        align: 'left',
        p: '5px',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor:
          access === 'admin'
            ? colours.greenAccent[600]
            : colours.greenAccent[700],
        borderRadius: '4px',
      }}
    >
      {access === 'admin' && <AdminPanelOutlinedIcons />}
      {access === 'manager' && <SecurityOutlinedIcons />}
      {access === 'user' && <LockOpenOutlinedIcons />}
      <Typography color={colours.grey[100]} sx={{ ml: '5px' }}>
        {access}
      </Typography>
    </Box>
  );
};

const Team = () => {
  const theme = useTheme();
  const colours = tokens(theme.palette.mode);

  const [loading, teamData, error] = useTeams();

  const columns: GridColumns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'Age',
      headerAlign: 'left',
      align: 'left',
    },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'phone', headerName: 'Phone', flex: 1 },
    {
      field: 'access',
      headerName: 'Access Level',
      flex: 1,
      headerAlign: 'left',
      align: 'left',
      renderCell: (params) => renderAccessCell(params, colours),
    },
  ];

  return (
    <Box sx={{ m: '20px' }}>
      <Header title="TEAM" subtitle="Managing the team members"></Header>
      {error && <Box>{error}</Box>}
      {loading && <Box>Loading Data</Box>}
      <Box
        sx={{
          m: '40px 0 0 0',
          height: '75vh',
          '& .MuiDataGrid-root': { border: 'none' },
          '& .MuiDataGrid-cell': { borderBottom: 'none' },
          '& .name-column--cell': { color: colours.greenAccent[300] },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colours.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colours.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colours.blueAccent[700],
          },
        }}
      >
        <DataGrid rows={teamData} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
