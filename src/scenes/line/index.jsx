import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useState } from "react";
import LineChart from "../../components/Linechart";

const Line = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data] = useState([
  ]);

  return (
    <>
      <Box m="20px">
        <Header title="Line Chart" subtitle="Simple Line Chart" />
        <Box
          sx={{ width: "75%", height: "75vh" }}
          border="2px solid"
          borderColor={colors.blueAccent[600]}
          borderRadius="7px"
          bgcolor={colors.primary[400]}
          //   strokeWidth="2px"
          //   stroke={colors.redAccent[600]}
        >
          <LineChart data={data} />
          {/* <LineChart /> */}
        </Box>
      </Box>
    </>
  );
};

export default Line;
