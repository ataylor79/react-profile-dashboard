import { Box } from '@mui/material';
import Header from '../../components/Header';
import LineChart from '../../components/LineChart';
// import { tokens } from '../../theme';

const Pie = () => {
  //   const theme = useTheme();
  //   const colours = tokens(theme.palette.mode);

  return (
    <Box sx={{ m: '20px' }}>
      <Header title="Line Chart" subtitle="A simple line chart"></Header>
      <Box sx={{ height: '80vh' }}>
        <LineChart />
      </Box>
    </Box>
  );
};

export default Pie;
