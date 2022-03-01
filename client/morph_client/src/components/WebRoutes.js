import React from 'react'
import { Route, Routes } from "react-router-dom";

const WebRoutes = () => {
  return (
    
       <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/provider' element={<Provider/>} />
        <Route path='/client' element={<Client />} />
        <Route path='/booking' element={<Booking/>} />
      </Routes>
  )
}

export default WebRoutes