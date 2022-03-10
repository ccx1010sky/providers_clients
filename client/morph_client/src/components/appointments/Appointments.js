import React, { Children } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Button, Pagination } from '@mui/material';
import { AddCircleOutline } from '@material-ui/icons';


const Appointments = ({appointmentsData, setPage, setAppointment}) => {

  const [pageSize, setPageSize] = React.useState(5);
  const rows = appointmentsData.map(appointment=>{
  
  return{
      id:appointment.id,
      col1: appointment.id,
      col2: appointment.date,
      col3: appointment.client.firstName+" "+appointment.client.lastName,
      col4: appointment.provider.firstName+" "+appointment.provider.lastName,
      col5: appointment.type,
      col6: appointment.startTime,
      col7: appointment.endTime,
      col8:appointment.location.name,
      }
  })

  const columns = [
    
    { field: 'col1', headerName: 'Id', flex: 0.2, align: 'center', headerAlign: 'center', headerClassName: 'gridHeader', minWidth: 50},
    { field: 'col2', headerName: 'Date', flex: 0.8, align: 'center', headerAlign: 'center', headerClassName: 'gridHeader', minWidth: 100 },
    { field: 'col3', headerName: 'Client Name', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'gridHeader', minWidth: 100 },
    { field: 'col4', headerName: 'Provider Name', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'gridHeader', minWidth: 100 },
    { field: 'col5', headerName: 'Type', flex: 0.7, align: 'center', headerAlign: 'center', headerClassName: 'gridHeader', minWidth: 100 },
    { field: 'col6', headerName: 'Start Time', flex: 0.6, align: 'center', headerAlign: 'center', headerClassName: 'gridHeader', minWidth: 100 },
    { field: 'col7', headerName: 'End Time', flex: 0.6, align: 'center', headerAlign: 'center', headerClassName: 'gridHeader', minWidth: 100 },
    { field: 'col8', headerName: 'Location',  flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'gridHeader', minWidth: 100 }
  ];
    
    const handleCellClick =(event)=>{
    
      setAppointment(event.id)
      setPage("Single Appointment")
    
    }
    function handleNewAppClick(){
      setPage("Create Appointment")
    }

    return (
    <>  
      
      <h2>Appointments</h2>

      <div style={{width: '100%' }}>
        <div style={{flexGrow: 1}}></div>
        <DataGrid
          sx={{ 
            m: 10,
            fontSize: 12,
            '& .gridHeader': {
              backgroundColor: 'rgb(31 147 159 / 82%)',
              fontSize: 14,
            },
          }}
          onCellClick={handleCellClick}
          autoHeight
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          components={Pagination}
        />
      </div>
      <div id='createButtonRow'>
          <Button
              id='newAppoint'
              sx={{
                  mt:3,
                  ml:4,
                  mb:2,
              }}
              variant="contained" 
              onClick={handleNewAppClick}
              size="large"
              endIcon={<AddCircleOutline />}
          >
            New Appointment
          </Button>

      </div>
    </>
    )
  }

  

export default Appointments