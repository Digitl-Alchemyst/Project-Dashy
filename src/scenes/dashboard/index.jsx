import { useState } from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
// import ProgressCircle from "../../components/ProgressCircle";
import LineChart from "../../components/Linechart";
import BarChart from "../../components/Barchart";
import PieChart from "../../components/Piechart";
import GeographyChart from "../../components/GeographyChart";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { mockTransactions } from "../../data/mockData";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" allignItems="center">
        <Header title="Dashboard" subtitle="Welcome to the Dashboard" />

        {/* Download reports Button */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ marginRight: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* Stat Box Widgets */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridGap="20px"
        mt="20px"
        gridAutoRows="140px"
        // margin="5px"
      >
        {/* Stat Boxes #1 */}
        <Box
          gridColumn="span 3"
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor={colors.primary[600]}
          borderRadius="5px"
          border="2px solid"
          borderColor={colors.blueAccent[800]}
        >
          <StatBox
            title="9245"
            subtitle="Marketing Emails Sent"
            increase="+14%"
            progress="0.75"
            icon={
              <EmailIcon
                sx={{ fontSize: "24px", color: colors.greenAccent[600] }}
              />
            }
          ></StatBox>
        </Box>
        {/* Stat Boxes #2 */}
        <Box
          gridColumn="span 3"
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor={colors.primary[600]}
          borderRadius="5px"
          border="2px solid"
          borderColor={colors.blueAccent[800]}
        >
          <StatBox
            title="31,337"
            subtitle="YTD Sales"
            increase="+21%"
            progress="0.5"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          ></StatBox>
        </Box>
        {/* Stat Boxes  #3 */}
        <Box
          gridColumn="span 3"
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor={colors.primary[600]}
          borderRadius="5px"
          border="2px solid"
          borderColor={colors.blueAccent[800]}
        >
          <StatBox
            title="420"
            subtitle="New Clients"
            increase="+30%"
            progress="0.045"
            icon={
              <PersonAddIcon
                sx={{ fontSize: "24px", color: colors.blueAccent[600] }}
              />
            }
          ></StatBox>
        </Box>
        {/* Stat Boxes #4*/}
        <Box
          gridColumn="span 3"
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor={colors.primary[600]}
          borderRadius="5px"
          border="2px solid"
          borderColor={colors.blueAccent[800]}
        >
          <StatBox
            title="69"
            subtitle="Number of Sales Inquiries"
            increase="-62%"
            progress="0.015"
            icon={
              <TrafficIcon
                sx={{ fontSize: "24px", color: colors.redAccent[600] }}
              />
            }
          ></StatBox>
        </Box>

        {/* Line Chart Widget */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[600]}
          borderRadius="5px"
          border="2px solid"
          borderColor={colors.blueAccent[800]}
        >
          <Box
            mt="20px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h6"
                fontWeight="600"
                color={colors.grey[100]}
              >
                YTD Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $382,625.41
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{
                    color: colors.greenAccent[500],
                    fontSize: "26px",
                  }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" ml="-15px" mt="-30px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* Bar Chart Widget */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[600]}
          borderRadius="5px"
          border="2px solid"
          borderColor={colors.blueAccent[800]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p="15px"
            borderBottom={"4px solid ${colors.primary[500]}"}
            colors={colors.grey[100]}
          >
            <Typography variant="h6" fontWeight="600" color={colors.grey[100]}>
              Top 5 Products
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={"${transaction.txId}-${i}"}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p="15px"
              borderBottom={"4px solid ${colors.primary[500]}"}
            >
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.employee}
                </Typography>
              </Box>
              <Box colors={colors.grey[100]}>{transaction.date}</Box>
              <Box
                colors={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                {transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Row 3 Widgets */}

        {/* Campaign Progress Circle */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[600]}
          borderRadius="5px"
          border="2px solid"
          borderColor={colors.blueAccent[800]}
          p="30x"
          display="flex" // Add this line
          flexDirection="column" // Add this line
          justifyContent="space-between" // Add this line
        >
          <Typography
            variant="h5"
            fontWeight="600"
            color={colors.grey[100]}
            sx={{ p: "15px 15px 15px" }}
          >
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <ProgressCircle size="130" />
            <Typography
              variant="h5"
              color={colors.greenAccent[400]}
              sx={{ mt: "30px" }}
            >
              $34,234.00 Generated
            </Typography>
            <Typography>Includes Misc Expenditures</Typography>
          </Box>
        </Box>

        {/* Sales Quantity Bar Chart */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[600]}
          borderRadius="5px"
          border="2px solid"
          borderColor={colors.blueAccent[800]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            color={colors.grey[100]}
            sx={{ p: "15px 15px 15px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        {/* Sales Location Heat Map */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[600]}
          borderRadius="5px"
          border="2px solid"
          borderColor={colors.blueAccent[800]}
          // p="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            // color={colors.grey[100]}
            // sx={{ mb: "15px" }}
            sx={{ p: "15px 15px 15px" }}
          >
            Project Geographical Locations
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
