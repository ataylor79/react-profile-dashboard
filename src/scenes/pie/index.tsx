import { Box } from '@mui/material';
import Header from '../../components/Header';
import PieChart from '../../components/PieChart';
// import { tokens } from '../../theme';

const Pie = () => {
  //   const theme = useTheme();
  //   const colours = tokens(theme.palette.mode);

  return (
    <Box sx={{ m: '20px' }}>
      <Header title="Pie Chart" subtitle="A simple pie chart"></Header>
      <Box sx={{ height: '80vh' }}>
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
