import React, { Children } from 'react'
import { DataGrid } from '@mui/x-data-grid'
const Appointments = ({appointmentsData,setPage,setAppointment}) => {

const rows = appointmentsData.map(appointment=>{
 
 return{
    id:appointment.id,
    col1:appointment.id,
    col2: appointment.client.firstName+" "+appointment.client.lastName,
    col3:appointment.location.name,
    col4:appointment.provider.firstName+" "+appointment.provider.lastName,
    col5:appointment.type,
    col6:appointment.startTime,
    col7:appointment.endTime,
    col8:appointment.date
    }
})

const columns = [
  
  { field: 'col1', headerName: 'Appointment', width:120 },
  { field: 'col2', headerName: 'Client name', width:120 },
  { field: 'col3', headerName: 'Location', width:120 },
  { field: 'col4', headerName: 'Provider Name', width:120 },
  { field: 'col5', headerName: 'type', width:120 },
  { field: 'col6', headerName: 'Start Time', width:120 },
  { field: 'col7', headerName: 'End Time', width:120 },
  { field : 'col8', headerName:  'Date',  width:120}
];
  
  const handleCellClick =(event)=>{
   
    setAppointment(event.id)
    setPage("Single Appointment")
  
  }

  return (
  <>  

  
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        onCellClick={handleCellClick}
        rows={rows}
        columns={columns}
        pageSize={12}
      />
    </div>
  </>
  )
}

export default Appointments