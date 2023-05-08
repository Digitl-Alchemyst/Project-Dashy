import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />

      <Box
        sx={{ width: "75%", height: "75vh" }}
        border="2px solid"
        borderColor={colors.blueAccent[600]}
        borderRadius="7px"
        bgcolor={colors.primary[400]}
        //   strokeWidth="2px"
        //   stroke={colors.redAccent[600]}
      >
        {/* <GeographyChart /> */}
        <GeographyChart />

      </Box>
    </Box>
  );
};

export default Geography;
