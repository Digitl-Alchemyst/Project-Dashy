import { useTheme, Box, } from '@mui/material';
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useState } from "react";
import BarChart from "../../components/Barchart";

const Bar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data] = useState([

  ]);

  return (
    <>
      <Box m="20px">
        <Header title="Bar Chart" subtitle="Simple Bar Chart" />
        <Box 
          sx={{ width: "75%", height: "75vh" }}
          border="2px solid"
          borderColor={colors.blueAccent[300]}
          borderRadius="7px"
          bgcolor={colors.primary[400]}  
        >
          <BarChart data={data} />
          
        </Box>
      </Box>
    </>
  );
};

export default Bar;
