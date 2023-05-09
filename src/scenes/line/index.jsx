import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useState } from "react";
import LineChart from "../../components/Linechart";

const Line = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState([
    // { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    // { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    // { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    // { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    // { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    // { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    // { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
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
