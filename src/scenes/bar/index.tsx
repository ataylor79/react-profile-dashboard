import { Box } from '@mui/material';
import Header from '../../components/Header';
import BarChart from '../../components/BarChart';

const Bar = () => (
  <Box sx={{ m: '20px' }}>
    <Header title="Bar Chart" subtitle="A simple bar chart"></Header>
    <Box sx={{ height: '80vh' }}>
      <BarChart />
    </Box>
  </Box>
);

export default Bar;
