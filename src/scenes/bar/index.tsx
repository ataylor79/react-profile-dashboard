import { Box } from '@mui/material';
import Header from '../../components/Header';
import BarChart from '../../components/BarChart';
// import { tokens } from '../../theme';

const Bar = () => {
  //   const theme = useTheme();
  //   const colours = tokens(theme.palette.mode);

  return (
    <Box sx={{ m: '20px' }}>
      <Header title="Bar Chart" subtitle="A simple bar chart"></Header>
      <Box sx={{ height: '80vh' }}>
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
