import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
// import { mockDataTeam } from '../../data/mockData';
import data from '../../data/mockTeam.json';
import { Button } from '@mui/material';
import { AdminPanelSettingsOutlined as AdminPanelSettingsOutlinedIcon, FamilyRestroomSharp } from '@mui/icons-material'; // Fix import statement
import { LockOpenOutlined as LockOpenOutlinedIcon } from '@mui/icons-material'; // Fix import statement
import { SecurityOutlined as SecurityOutlinedIcon } from '@mui/icons-material'; // Fix import statement
import Header from "../../components/Header";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: 'id', headerName: 'Emplyee ID#', width: 75, editable: false,},
        {field: 'name', headerName: 'Name', width: 100, editable: false, flex: 1, cellClassName: "name-column-cell",},
        // {field: 'company', headerName: 'Company', width: 100, editable: false, flex: 1, cellClassName: "company-column-cell",},
        {field: 'email', headerName: 'Email', width: 100, editable: false, flex: 1,},
        {field: 'phone', headerName: 'Phone', width: 75, editable: false, flex: 1,},
        {field: 'role', headerName: 'Role', width:150, editable: false,},
        {field: 'status', headerName: 'Status', width: 100, editable: false,},
        {field: 'access', headerName: 'Access', width: 100, editable: false,  
            renderCell: ({ row: { access } }) => {
                return (
                    <Box width="70%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="space-around"
                        alignItems="center"
                        backgroundColor={
                            access === "admin"
                                ? colors.redAccent[600]
                                : colors.greenAccent[600]
                            }
                        borderRadius="4px"
                    >
                        {access === "admin" && <AdminPanelSettingsOutlinedIcon /> }
                        {access === "manager" && <SecurityOutlinedIcon /> }
                        {access === "employee" && <LockOpenOutlinedIcon /> }
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                            {access}
                        </Typography>             
                    </Box>
            );
        },
      },
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
                title="Team"
                subtitle="Manage your team"
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
                    }}>

        <DataGrid 
            checkboxSelection 
            rows={data} 
            columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;