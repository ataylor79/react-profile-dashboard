import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../theme';
import ProgressCircle from './ProgressCircle';

type StatBoxProps = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  progress: number;
  increase: string;
};

const StatBox = ({
  title,
  subtitle,
  icon,
  progress,
  increase,
}: StatBoxProps) => {
  const theme = useTheme();
  const colours = tokens(theme.palette.mode);

  return (
    <Box sx={{ width: '100%', m: '0 30px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          {icon}
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', color: colours.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5" sx={{ color: colours.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontStyle: 'italic', color: colours.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
