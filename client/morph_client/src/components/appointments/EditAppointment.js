import { TextField, Button, MenuItem} from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { fontSize, width } from "@mui/system";

const EditAppointment = ({singleAppointmentData, locationData, therapistData, setPage}) => {
    const [pageToDispaly, setPageToDisplay] = useState("loading")
    useEffect(() => {
        if(Object.keys(singleAppointmentData).length !== 0){
            setPageToDisplay("content")
        }
    }, [singleAppointmentData]);

    useEffect(() => {
        if(Object.keys(locationData).length !== 0){
            console.log(locationData)
        }
    }, [singleAppointmentData]);

    
    const locations = locationData.map(location => {
        return{
            value: location.id,
            label: location.name
        };
    })

    const therapists = therapistData.map(therapist => {
        return{
            value: therapist.id,
            label: therapist.firstName + " " + therapist.lastName
        }
    })

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
                    defaultValue={singleAppointmentData.provider.id}
                    size="small"
                    select
                    onChange={handleTherapistChange}
                >
                    {therapists.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
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
                    defaultValue={singleAppointmentData.location.id}
                    size="small"
                    select
                    onChange={handleLocationChange}
                >
                    {locations.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                </div>
            </div>
            <div>
                <Button 
                    style={{width: 100}}
                    sx={{
                        mt:3,
                        mr:4,
                        mb:2,
                    }}
                    variant="contained" 
                    onClick={handleCancleClick}
                    size="large"
                >Cancle</Button>
                <Button 
                    style={{width: 100}}
                    sx={{
                        mt:3,
                        ml:4,
                        mb:2,
                    }}
                    variant="contained" 
                    onClick={handleUpdateClick}
                    size="large"
                >Update</Button>
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
        function handleLocationChange(){

        }
        function handleTherapistChange(){

        }
    }
};


export default EditAppointment;


