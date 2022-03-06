import React, { useState,useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
import HomePage from '../containers/HomePage';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Provider from '../containers/Provider';
import Booking from '../containers/Booking';
import Client from '../containers/Client';
import {
  getAppointments,
  getClients,
  getLocations,
  getProviders,
  getRooms,
} from "../service";


const WebRoutes = () => {

  
  
  useEffect(() => {
   getProviders().then((data) => setProviderData(data));
  }, []);
  
  const [providerData,setProviderData] =useState()
  
//   const providerData = providerData.map(() => {
   
//           provider.appointments.forEach(element => {
//           gridData.provider_id = provider.id
//           gridData.providerFirstName =provider.firstName
//           gridData.providerLastName =provider.lastName
//           gridData.clientId =element.client.id
//           gridData.clientFirstName = element.client.firstName
//           gridData.clientLastName = element.client.lastName
//           gridData.type = element.type
//           gridData.startTime =element.startTime
//           gridData.endTime =element.endTime
//           finalGridData.push(gridData)
//           });
//         return finalGridData
//       }

// })
  

  
  return (
    
       <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/provider' element={<Provider providerData = {providerData}/>} />
        <Route path='/client' element={<Client />} />
        <Route path='/booking' element={<Booking/>} />
      </Routes>
  )
}

export default WebRoutes