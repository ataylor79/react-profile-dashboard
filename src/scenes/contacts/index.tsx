import { Box } from '@mui/material';
import Header from '../../components/Header';

const Dashboard = () => {
  return (
    <Box sx={{ m: '20px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Header title="CONTACTS" subtitle="View your contacts"></Header>
      </Box>
    </Box>
  );
};

export default Dashboard;
