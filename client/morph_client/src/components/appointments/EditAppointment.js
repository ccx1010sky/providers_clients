
import * as React from "react";
import { useEffect, useState } from "react";

import Box from '@mui/material/Box';
import { fontSize, width } from "@mui/system";
import { TextField, Button, MenuItem} from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { TimePicker } from "@mui/lab";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import format from "date-fns/format";

import { updateAppointment } from "../../service";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const EditAppointment = ({singleAppointmentData, providerClients, locationData, therapistData, setPage}) => {

    const [pageToDispaly, setPageToDisplay] = useState("loading");
    const [aptId, setAptId] = useState("")
    const [aptType, setAptType] = useState("");
    const [clientId, setClientId] = useState("")
    const [dateValue, setDateValue] = useState(new Date)
    const [startValue, setStartValue] = useState(new Date())
    const [endValue, setEndValue] = useState(new Date())
    const [providerId, setProviderId] = useState("")
    const [locationId, setLocationId] = useState("")
    const [okOpen, setOkOpen] = useState(false);
    const [failOpen, setFailOpen] = useState(false);


    useEffect(() => {
        if(Object.keys(singleAppointmentData).length !== 0){
            console.log(singleAppointmentData.startTime)
            setPageToDisplay("content");
            setAptId(singleAppointmentData.id);
            setAptType(singleAppointmentData.type);
            //setDateValue(format(new Date(), "dd/MM/yyyy"))
            setDateValue(format(new Date(singleAppointmentData.date), "dd/MM/yyyy"));
            setClientId(singleAppointmentData.client.id);
            setProviderId(singleAppointmentData.provider.id);
            setLocationId(singleAppointmentData.location.id);
        }
    }, [singleAppointmentData]);

    // close for snackbar
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setFailOpen(false);
        setOkOpen(false);
    };

    // list of clients for menuitems
    const clients = providerClients.map(client => {
        return{
            value: client.id,
            label: client.firstName + " " + client.lastName
        }
    })

    // list of locations for menuitems
    const locations = locationData.map(location => {
        return{
            value: location.id,
            label: location.name
        };
    })

    //list of providers for menuitems
    const therapists = therapistData.map(therapist => {
        return{
            value: therapist.id,
            label: therapist.firstName + " " + therapist.lastName,
            name: therapist.serviceType
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
                >
                    <div className="display-panel">
                        <div>
                        <h2 >Edit Appointment</h2>
                        </div>
                        
                        <div>
                        <TextField
                            InputProps={{style: {fontSize: 18}}}
                            label="Client name"
                            defaultValue={singleAppointmentData.client.id}
                            value={clientId}
                            select
                            onChange={handleClientChange}
                        >
                            {clients.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        </div>
                        <div>
                        <TextField
                            InputProps={{style: {fontSize: 18}}}
                            label="Appointment Type"
                            value={aptType}
                            disabled
                        >
                            data goes here
                        </TextField>
                        </div>
                        <div>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                InputProps={{style: {fontSize: 18}}}
                                size="small"
                                label="Date"
                                inputFormat="dd/MM/yyyy"
                                value={dateValue}
                                onChange={handleDateChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        </div>
                        <div id="timeWrapper">
                            <div id="startTime">
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <TimePicker
                                        InputProps={{style: {fontSize: 18}}}
                                        label="Start Time"
                                        value={startValue}
                                        minutesStep={15}
                                        onChange={handleStartTimeChange}
                                        renderInput={(params) => <TextField {...params} />}
                                    />   
                                </LocalizationProvider>
                            </div>
                            <div id="endTime" >
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <TimePicker
                                        InputProps={{style: {fontSize: 18}}}
                                        label="End Time"
                                        value={endValue}
                                        minutesStep={15}
                                        onChange={handleEndTimeChange}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </div>
                        </div>

                        <div>
                        <TextField 
                            InputProps={{style: {fontSize: 18}}}
                            label="Therapist"
                            defaultValue={singleAppointmentData.provider.id}
                            value={providerId}
                            select
                            onChange={handleTherapistChange}
                        >
                            {therapists.map((option) => (
                                <MenuItem key={option.value} value={option.value} name={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        </div>
                        <div>
                        <TextField 
                            InputProps={{style: {fontSize: 18}}}
                            label="Location"
                            defaultValue={singleAppointmentData.location.id}
                            value={locationId}
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
                        >Cancel</Button>
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
                <Snackbar open={okOpen} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Appointment created successfully!
                    </Alert>
                </Snackbar>
                <Snackbar open={failOpen} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        Appointment could not be created!
                    </Alert>
                </Snackbar>
            </div>
            
        );
        function handleClientChange(event){
            setClientId(event.target.value);
        }

        function handleUpdateClick(){
            const st = format(new Date(startValue), "hh:mm")
            const et = format(new Date(endValue), "hh:mm")
            const cId = String(clientId)
            const payload = {
                client: {id:clientId},
                provider: {id:providerId},
                type: aptType,
                date: dateValue,
                startTime: st,
                endTime: et,
                location: {id:locationId},
                room: {id: 1}
            }
            // Make fetch request and store result
            const result = updateAppointment(payload, aptId);
            result.then((info) => {
                console.log("id: " + info.id)
                // Display results in snackbar
                if(info.id > 0){
                    console.log("success!")
                    setOkOpen(true)
                    setTimeout(()=> {setPage("Appointments")}, 3000)
                }else {
                    console.log("failure!")
                    setFailOpen(true)
                }
            })

        }
        function handleCancleClick(){
            setPage("Single Appointment")
        }
        function handleLocationChange(event){
            setLocationId(event.target.value)
        }

        function handleTherapistChange(event){
            setProviderId(event.target.value)
            for(const therapist of therapists){
                if(therapist.value === event.target.value){
                    setAptType(therapist.name)
                }
            }
        }

        function handleDateChange(newValue){
            setDateValue(newValue)
        }

        function handleStartTimeChange(newValue){
            setStartValue(newValue)
        }

        function handleEndTimeChange(newValue){
            setEndValue(newValue)
        }
    }
};


export default EditAppointment;


