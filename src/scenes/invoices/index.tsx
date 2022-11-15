import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridRenderCellParams, GridColumns } from '@mui/x-data-grid';
import Header from '../../components/Header';
import { mockDataInvoices } from '../../data/mockData';

import { tokens } from '../../theme';

const Invoices = () => {
  const theme = useTheme();
  const colours = tokens(theme.palette.mode);

  const columns: GridColumns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'phone', headerName: 'Phone', flex: 1 },
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => (
        <Typography>${params.row.cost}</Typography>
      ),
    },
    { field: 'date', headerName: 'Date', flex: 1 },
  ];
  return (
    <Box sx={{ m: '20px' }}>
      <Header
        title="CONTACTS"
        subtitle="List of contacts for future reference"
      ></Header>
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
          '& .MuiCheckbox-root': {
            color: `${colours.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={mockDataInvoices} checkboxSelection columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;
