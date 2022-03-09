import { TextField, Button} from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { fontSize, width } from "@mui/system";

const EditAppointment = ({singleAppointmentData, setPage}) => {
    const [pageToDispaly, setPageToDisplay] = useState("loading")
    useEffect(() => {
        if(Object.keys(singleAppointmentData).length !== 0){
            setPageToDisplay("content")
        }
    }, [singleAppointmentData]);

    if(pageToDispaly === "loading"){
        return <div>Loading...</div>
    }
    if(pageToDispaly === "content"){
        return (
            <div>
            <Box
                style={{width: 550}}
                sx={{
                boxShadow: 10, // theme.shadows[1]
                color: "primary.main", // theme.palette.primary.main
                m: "auto", // margin: theme.spacing(1)
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
                <h2 >Edit Appointment</h2>
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
                    label="Client name"
                    defaultValue={singleAppointmentData.client.firstName + " " + singleAppointmentData.client.lastName}
                    size="small"
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
                    label="Appointment Type"
                    defaultValue={singleAppointmentData.type}
                    size="small"
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
                >
                    data goes here
                </TextField>
                </div>
            </div>
            <div>
                <Button 
                    style={{width: 100}}
                    sx={{
                        mr:4,
                    }}
                    variant="contained" 
                    onClick={handleCancleClick}
                    size="large"
                >Cancle</Button>
                <Button 
                    style={{width: 100}}
                    sx={{
                        ml:4,
                    }}
                    variant="contained" 
                    onClick={handleUpdateClick}
                    size="large"
                >Edit</Button>
            </div>
            </Box>
            </div>
        );
        function handleUpdateClick(){
            console.log("I click")
        }
        function handleCancleClick(){
            setPage("Single Appointment")
        }
    }
};


export default EditAppointment;


