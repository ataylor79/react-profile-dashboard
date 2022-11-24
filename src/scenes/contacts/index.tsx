import { Box, useTheme, Alert } from '@mui/material';
import { DataGrid, GridToolbar, GridColumns } from '@mui/x-data-grid';
import Header from '../../components/Header';
import useContacts from '../../hooks/useContacts';

import { tokens } from '../../theme';

const Contacts = () => {
  const theme = useTheme();
  const colours = tokens(theme.palette.mode);

  const [contactsData, error] = useContacts();

  const columns: GridColumns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'registrarId', headerName: 'Registrar ID' },
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
    { field: 'address', headerName: 'Address', flex: 1 },
    { field: 'city', headerName: 'City', flex: 1 },
    { field: 'zipCode', headerName: 'ZipCode', flex: 1 },
  ];
  return (
    <Box sx={{ m: '20px' }}>
      <Header
        title="CONTACTS"
        subtitle="List of contacts for future reference"
      ></Header>
      {error && (
        <Alert variant="filled" severity="error">
          {error}
        </Alert>
      )}
      {!!contactsData.length && (
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
            '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
              color: `${colours.grey[100]} !important`,
            },
          }}
        >
          <DataGrid
            rows={contactsData}
            columns={columns}
            components={{
              Toolbar: GridToolbar,
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default Contacts;
