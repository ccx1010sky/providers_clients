
import * as React from "react";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { fontSize, width } from "@mui/system";
import { TextField, Button} from "@mui/material";
import {withStyles, styled} from "@mui/styles";
import {TextFieldProps} from "@material-ui/core"

// Set color for disabled input
const DarkerDisabledTextField = withStyles({
    root: {
      marginRight: 8,
      "& .MuiInputBase-root.Mui-disabled": {
        color: 'black' // (default alpha is 0.38)
      }
    }
  })(TextField);

  const DarkDisabledTextField = withStyles({
    root: {
      marginRight: 8,
      "& .MuiInputBase-root.Mui-disabled": {
        "-webkit-text-fill-color": "rgba(0, 0, 0, 0.6)" // (default alpha is 0.38)
      }
    }
  })(TextField);
    
export default function SingleAppointment({singleAppointmentData, setPage}) {

    // Get data to fill in fields
    const [pageToDispaly, setPageToDisplay] = useState("loading")
    useEffect(() => {
        if(Object.keys(singleAppointmentData).length !== 0){
            setPageToDisplay("content")
        }
    }, [singleAppointmentData]);

    // display loading if data is not there yet
    if(pageToDispaly === "loading"){
        return <div>Loading...</div>
    }
    // Show the stuff!
    if(pageToDispaly === "content"){
        return (
            <div>
            <Box
            sx={{
                boxShadow: 10, // theme.shadows[1]
                color: "primary.main", // theme.palette.primary.main
                m: 7, // margin: theme.spacing(1)
                p: {
                xs: 2, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
                },
                zIndex: "tooltip", // theme.zIndex.tooltip
                minWidth: 100,
                "& .MuiTextField-root": { m: 1, width: "20ch" },
            }}
            noValidate
            autoComplete="off"

            // className="provider-container"
            >
            <div className="display-panel">
                <div>
                <h2>Appointment Details</h2>
                </div>
                <div>
                <DarkDisabledTextField
                    sx={{
                        
                        boxShadow: 5, // theme.shadows[1]
                        color: "secondary.main", // theme.palette.primary.main
                        borderRadius: 2,
                        m: 0.5, // margin: theme.spacing(1)
                        p: {
                            xs: 0.4, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
                        },
                    }}
                    InputLabelProps={{style: {fontSize: 18} }}  // shift lable to right a wee bit!
                    InputProps={{style: {fontSize: 18}}}
                    label="Client name"
                    defaultValue={singleAppointmentData.client.firstName + " " + singleAppointmentData.client.lastName}
                    size="small"
                    disabled={true}
                >
                    data goes here
                </DarkDisabledTextField>
                </div>
                <div>
                <TextField
                    sx={{
                        
                        boxShadow: 5, // theme.shadows[1]
                        color: "secondary.main", // theme.palette.primary.main
                        borderRadius: 2,
                        m: 0.5, // margin: theme.spacing(1)
                        p: {
                            xs: 0.4, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
                        },
                    }}
                    InputLabelProps={{style: {fontSize: 18} }}  // shift lable to right a wee bit!
                    InputProps={{style: {fontSize: 18}}}
                    label="Appointment Type"
                    defaultValue={singleAppointmentData.type}
                    size="small"
                    disabled
                >
                    data goes here
                </TextField>
                </div>
                <div>
                <TextField
                    sx={{
                    boxShadow: 5, // theme.shadows[1]
                    color: "secondary.main", // theme.palette.primary.main
                    borderRadius: 2,
                    m: 0.5, // margin: theme.spacing(1)
                    p: {
                        xs: 0.4, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
                    },
                    }}
                    InputLabelProps={{style: {fontSize: 18} }}  // shift lable to right a wee bit!
                    InputProps={{style: {fontSize: 18}}}
                    label="Date"
                    defaultValue={singleAppointmentData.date}
                    size="small"
                    disabled
                >
                    data goes here
                </TextField>
                </div>
                <div>
                <TextField
                    style={{width: 150}}
                    sx={{
                    boxShadow: 5, // theme.shadows[1]
                    color: "secondary.main", // theme.palette.primary.main
                    borderRadius: 2,
                    m: 0.5, // margin: theme.spacing(1)
                    p: {
                        xs: 0.4, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
                    },
                    }}
                    InputLabelProps={{style: {fontSize: 18} }}  // shift lable to right a wee bit!
                    InputProps={{style: {fontSize: 18}}}
                    label="Start Time"
                    defaultValue={singleAppointmentData.startTime}
                    size="small"
                    disabled
                >
                    data goes here
                </TextField>

                <TextField
                    style={{width: 150}}
                    sx={{
                    boxShadow: 5, // theme.shadows[1]
                    color: "secondary.main", // theme.palette.primary.main
                    borderRadius: 2,
                    m: 0.5, // margin: theme.spacing(1)
                    p: {
                        xs: 0.4, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
                    },

                    }}
                    InputLabelProps={{style: {fontSize: 18} }}  // shift lable to right a wee bit!
                    InputProps={{style: {fontSize: 18}}}
                    label="End Time"
                    defaultValue={singleAppointmentData.endTime}
                    size="small"
                    disabled
                >
                    data goes here
                </TextField>
                </div>

                <div>
                <TextField 
                    sx={{
                    boxShadow: 5, // theme.shadows[1]
                    color: "secondary.main", // theme.palette.primary.main
                    borderRadius: 2,
                    m: 0.5, // margin: theme.spacing(1)
                    p: {
                        xs: 0.4, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
                    },

                    }}
                    InputLabelProps={{style: {fontSize: 18} }}  // shift lable to right a wee bit!
                    InputProps={{style: {fontSize: 18}}}
                    label="Therapist"
                    defaultValue={singleAppointmentData.provider.firstName + " " + singleAppointmentData.provider.lastName}
                    size="small"
                    disabled
                >
                    data goes here
                </TextField>
                </div>
                <div>
                <TextField 
                    sx={{
                    boxShadow: 5, // theme.shadows[1]
                    color: "secondary.main", // theme.palette.primary.main
                    borderRadius: 2,
                    m: 0.5, // margin: theme.spacing(1)
                    p: {
                        xs: 0.4, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
                    },

                    }}
                    InputLabelProps={{style: {fontSize: 18} }}  // shift lable to right a wee bit!
                    InputProps={{style: {fontSize: 18}}}
                    label="Location"
                    defaultValue={singleAppointmentData.location.name}
                    size="small"
                    disabled
                >
                    data goes here
                </TextField>
                </div>
            </div>
            <div>
                <Button 
                    variant="contained" 
                    onClick={handleEditClick}
                    size="large"
                >Edit</Button>
            </div>
            
            </Box>
            </div>
        );
        function handleEditClick(){
            setPage("Edit Appointment")
        }
    }
}










