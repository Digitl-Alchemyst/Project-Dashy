import { useTheme, Box, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" width="95%">
      <Header title="FAQ" subtitle="FAQ Page" />

      

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h6">
            What is Dashy?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={colors.primary[200]}>
            Dashy is a dashboard template built with Material UI and React.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h6">
            What can I do with Dashy?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={colors.primary[200]} variant="body1">
            You can use Dashy to build your own dashboard.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h6">
            What are the features of Dashy?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={colors.primary[200]} variant="body1">
            Dashy has a lot of features. You can check them out on the{" "}
            <a href="/features">features page</a>.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h6">
            How does Dashy work?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={colors.primary[200]} variant="body1">
            Dashy is built with React and Material UI. It uses the latest
            version of React and Material UI.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h6">
            How much doe Dashy cost?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={colors.primary[200]} variant="body1">
            Dashy is free to use for personal and commercial use.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h6">
            Can I use Dashy for my clients?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={colors.primary[200]} variant="body1">
            Yes, you can use Dashy for your clients.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h6">
            Can I use Dashy for my SaaS project?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={colors.primary[200]} variant="body1">
            Yes, you can use Dashy for your SaaS project.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Faq;
