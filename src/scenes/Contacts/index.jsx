import { useTheme, Box, } from '@mui/material';

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from '../../theme';

import data from '../../data/mockContacts.json';

import Header from "../../components/Header";


const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: 'id', headerName: 'Emplyee ID#', width: 75, editable: false,},
        {field: 'name', headerName: 'Name', width: 100, editable: false, flex: 1, cellClassName: "name-column-cell",},
        {field: 'company', headerName: 'Company', width: 100, editable: false, flex: 1, cellClassName: "company-column-cell",},
        {field: 'email', headerName: 'Email', width: 100, editable: false, flex: 1,},
        {field: 'phone', headerName: 'Phone', width: 75, editable: false, flex: 1,},
        {field: 'address', headerName: 'Address', width: 100, editable: false, flex: 1,},
        {field: 'city', headerName: 'City', width: 75, editable: false, flex: 1,},
        {field: 'state', headerName: 'State', width: 75, editable: false, flex: 1,},
        {field: 'zip', headerName: 'Zip', width: 75, editable: false, flex: 1,},
        {field: 'country', headerName: 'Country', width: 75, editable: false, flex: 1,},

    ];
  


        // {field: 'action', headerName: 'Action', width: 150, editable: false, cellClassName: "action-column-cell", 
        //         renderCell: (params) => { return ( 
        //             <Box> 
        //                 <Button variant="contained" color="primary" startIcon={<AdminPanelSettingsOutlinedIcon />}>Edit</Button>
        //                 <Button variant="contained" color="primary" startIcon={<LockOpenOutlinedIcon />}>Reset Password</Button> 
        //                 <Button variant="contained" color="primary" startIcon={<SecurityOutlinedIcon />}>Disable</Button> </Box> ); } },; 
                        
        //             ];

    return (
        <Box m="20px">
            <Header
                title="Contacts"
                subtitle="You companies contacts"
            />
                <Box
                    m="40px 0 0 0"
                    height="72vh"
                    sx={{
                        '& .MuiDataGrid-root': {
                            border: "none",
                            backgroundColor: colors.primary[800], // This controls the background color of the entire grid
                        },

                        '& .MuiDataGrid-cell': {
                            flex: 1,
                            backgroundColor: colors.primary[400], // This controls the background color of the grid rows                                
                        },

                        '& .name-column-cell': {
                            color: colors.blueAccent[300], // This controls the color of the text in the name column
                        },

                        '& .MuiDataGrid-columnHeadersInner': {
                            backgroundColor: colors.blueAccent[600], // This controls the background color of the top bar with all labels
                            borderBottom: "none",
                        },

                        '& .MuiDataGrid-virtualScrollerContent': {
                            backgroundColor: colors.primary[700], // This controls the background color of the rows container (can only be seen with 9 rows or less.)
                        },

                        '& .MuiDataGrid-footerContainer': {
                            backgroundColor: colors.blueAccent[600], // This controls the background color of the bottom bar with page controls
                        },

                        '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                           // color: '${colors.grey[100]} !important', // This controls the color of the text in the page controls
                           color: colors.grey[200],
                        },
                    }}>
        <DataGrid
          rows={data}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;