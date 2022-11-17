import { Box, useTheme } from '@mui/material';
import Header from '../../components/Header';
import GeoChart from '../../components/GeoChart';
import { tokens } from '../../theme';

const Geo = () => {
  const theme = useTheme();
  const colours = tokens(theme.palette.mode);
  return (
    <Box sx={{ m: '20px' }}>
      <Header
        title="Geography Chart"
        subtitle="A simple geography chart"
      ></Header>
      <Box
        sx={{
          height: '80vh',
          border: `1px solid ${colours.grey[100]}`,
          borderRadius: '4px',
        }}
      >
        <GeoChart />
      </Box>
    </Box>
  );
};

export default Geo;
