import { TextField, Button} from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
    // import TextField from '@mui/material/TextField';
    
export default function SingleAppointment({singleAppointmentData}) {

    const [pageToDispaly, setPageToDisplay] = useState("loading")
    useEffect(() => {
        if(Object.keys(singleAppointmentData).length !== 0){
            setPageToDisplay("content")
        }
    }, [singleAppointmentData]);

    if(pageToDispaly === "loading"){
        return <div>LOADING!!!</div>
    }
    if(pageToDispaly === "content"){
        return (
            <div>
            {console.log(singleAppointmentData)}
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
                <TextField
                    sx={{
                    boxShadow: 5, // theme.shadows[1]
                    color: "secondary.main", // theme.palette.primary.main
                    borderRadius: 2,
                    m: 0.5, // margin: theme.spacing(1)
                    p: {
                        xs: 0.3, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
                    },
                    }}
                    // label="Client name"
                    placeholder={singleAppointmentData.client.firstName}
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
                        xs: 0.3, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
                    },
                    }}
                    label="Client name"
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
                        xs: 0.3, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
                    },
                    }}
                    label="Date"
                    placeholder="data"
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
                        xs: 0.3, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
                    },
                    }}
                    label="Start"
                    placeholder="data"
                >
                    data goes here
                </TextField>

                <TextField
                    sx={{
                    boxShadow: 5, // theme.shadows[1]
                    color: "secondary.main", // theme.palette.primary.main
                    borderRadius: 2,
                    m: 0.5, // margin: theme.spacing(1)
                    p: {
                        xs: 0.3, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
                    },

                    }}
                    label="End"
                    placeholder="data"
                >
                    data goes here
                </TextField>
                </div>

                <div>
                <TextField label="Provider" placeholder="data">
                    data goes here
                </TextField>
                </div>
                <div>
                <TextField label="Location" placeholder="data">
                    data goes here
                </TextField>
                </div>
            </div>
            <Button variant="contained">Edit</Button>
            </Box>
            </div>
        );
        
    }
}










