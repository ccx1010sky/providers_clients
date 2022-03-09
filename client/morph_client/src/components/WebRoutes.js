import React, { useState,useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
import HomePage from '../containers/HomePage';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Provider from '../containers/Provider';
import Booking from '../containers/Booking';
import Client from '../containers/Client';
import {
  getAppointmentById,
  getAppointments,
  getClient,
  getClientById,
  getClients,
  getLocations,
  getProviderById,
  getProviders,
  getRooms,
} from "../service";


const WebRoutes = () => {

  const [appointmentId,setAppointmentId] = useState(0)
  const [providerData,setProviderData] = useState({})
  const [providerAppointmentData,setProviderAppointmentData] = useState([])
  const [clientData,setClientData]=useState({})
  const [clientAppointmentData,setClientAppointmentData]=useState([])
  const [singleAppointmentData,setSingleAppointmentData] = useState({})
  const [locationData, setLoactionData] = useState([])
  const [therapistData, setTherapistData] = useState([])
  const [providerClients, setProviderClients] = useState([]);
  const [page, setPage] = useState("Dashboard")
  
  
  useEffect(() => {
    getProviderById(1).then((data) => setProviderData(data));
    getClientById(1).then((data) => setClientData(data));
    getLocations().then((data) => setLoactionData(data));
    getProviders().then((data) => setTherapistData(data));
  
   }, [page]);
  

   useEffect(() => {
     if(appointmentId !== 0){getAppointmentById(appointmentId).then((data) => setSingleAppointmentData(data));}
   
   }, [appointmentId]);

  useEffect(() => {
    if(Object.keys(providerData).length !== 0 ){
      setProviderAppointmentData(providerData.appointments)
      setProviderClients(providerData.clients)
    }
  }, [providerData]);
  useEffect(() => {
    if(Object.keys(clientData).length!==0){setClientAppointmentData(clientData.appointments)}
  }, [clientData]);
   

  const handleSetAppointment=(id)=>{
    setAppointmentId(id)
  }

  const pageSetter = (page) => {
    setPage(page)
  }
 

  
  return (
    
       <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/provider' element={<Provider appointmentData= {providerAppointmentData} page={page} setPage={pageSetter} singleAppointmentData={singleAppointmentData} setAppointmentId={handleSetAppointment} locationData={locationData} therapistData={therapistData} providerClients={providerClients}/>} />
        <Route path='/client' element={<Client appointmentData={clientAppointmentData} singleAppointmentData={singleAppointmentData}/>} />
        <Route path='/booking' element={<Booking/>} />
      </Routes>
  )
}

export default WebRoutes