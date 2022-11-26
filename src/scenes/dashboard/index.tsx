import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import { mockTransactions } from '../../data/mockData';
import DownloadOutlineIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';

import LineChart from '../../components/LineChart';
import BarChart from '../../components/BarChart';
import GeoChart from '../../components/GeoChart';
import StatBox from '../../components/StatBox';
import ProgressCircle from '../../components/ProgressCircle';
import useSkills from '../../hooks/useSkills';

const Dashboard = () => {
  const theme = useTheme();
  const colours = tokens(theme.palette.mode);

  return (
    <Box sx={{ m: '20px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Header title="Alec Taylor" subtitle="Resume Dashboard"></Header>
      </Box>

      {/* Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridAutoRows: '140px',
          gap: '20px',
        }}
      >
        {/* Row 1 */}
        <Box
          sx={{
            gridColumn: 'span 3',
            backgroundColor: colours.primary[400],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress={0.75}
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colours.greenAccent[600], fontSize: '26px' }}
              />
            }
          ></StatBox>
        </Box>
        <Box
          sx={{
            gridColumn: 'span 3',
            backgroundColor: colours.primary[400],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress={0.5}
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colours.greenAccent[600], fontSize: '26px' }}
              />
            }
          ></StatBox>
        </Box>
        <Box
          sx={{
            gridColumn: 'span 3',
            backgroundColor: colours.primary[400],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress={0.3}
            increase="+30%"
            icon={
              <PersonAddIcon
                sx={{ color: colours.greenAccent[600], fontSize: '26px' }}
              />
            }
          ></StatBox>
        </Box>
        <Box
          sx={{
            gridColumn: 'span 3',
            backgroundColor: colours.primary[400],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Inbound"
            progress={0.8}
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colours.greenAccent[600], fontSize: '26px' }}
              />
            }
          ></StatBox>
        </Box>

        {/*  Row 2 */}
        <Box
          sx={{
            gridColumn: 'span 8',
            gridRow: 'span 2',
            backgroundColor: colours.primary[400],
          }}
        >
          <Box
            sx={{
              mt: '25px',
              p: '0 30px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: '600', color: colours.grey[100] }}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontWeight: 'bold', color: colours.greenAccent[500] }}
              >
                $59,342,32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlineIcon
                  sx={{ fontsize: '26px', color: colours.greenAccent[500] }}
                ></DownloadOutlineIcon>
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ height: '250px', ml: '-20px' }}>
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        {/* Transactions */}
        <Box
          sx={{
            gridColumn: 'span 4',
            gridRow: 'span 2',
            backgroundColor: colours.primary[400],
            overflow: 'auto',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: `4px solid ${colours.primary[500]}`,
              color: colours.grey[100],
              p: '15px 30px',
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: '600', color: colours.grey[100] }}
            >
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: `4px solid ${colours.primary[500]}`,
                p: '15px',
              }}
            >
              <Box sx={{ p: '0 15px' }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: '600', color: colours.greenAccent[500] }}
                >
                  {transaction.txId}
                </Typography>
                <Typography sx={{ color: colours.grey[100] }}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ color: colours.grey[100] }}>
                  {transaction.date}
                </Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: colours.greenAccent[500],
                  p: '5px 10px',
                  borderRadius: '4px',
                }}
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Row 3 */}
        {/* pie */}
        <Box
          sx={{
            gridColumn: 'span 4',
            gridRow: 'span 2',
            backgroundColor: colours.primary[400],
            p: '30px',
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: '600', color: colours.grey[100] }}
          >
            Campaign
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mt: '25px',
            }}
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              sx={{ color: colours.greenAccent[500], mt: '15px' }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: '600', color: colours.grey[100] }}
            >
              Includes extra misc expenditures and costs
            </Typography>
          </Box>
        </Box>
        {/* bar */}
        <Box
          sx={{
            gridColumn: 'span 4',
            gridRow: 'span 2',
            backgroundColor: colours.primary[400],
            p: '30px',
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: '600', color: colours.grey[100] }}
          >
            Sales Quantity
          </Typography>

          <Box sx={{ height: '250px' }}>
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        {/* geo */}
        <Box
          sx={{
            gridColumn: 'span 4',
            gridRow: 'span 2',
            backgroundColor: colours.primary[400],
            p: '30px',
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: '600', color: colours.grey[100] }}
          >
            Geography Based Traffic
          </Typography>

          <Box sx={{ height: '200px' }}>
            <GeoChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
