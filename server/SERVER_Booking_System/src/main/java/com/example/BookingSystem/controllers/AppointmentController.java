package com.example.BookingSystem.controllers;

import com.example.BookingSystem.models.Appointment;
import com.example.BookingSystem.repositories.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class AppointmentController {
    @Autowired
    AppointmentRepository appointmentRepository;

    // INDEX
    @GetMapping(value = "/appointments")
    public ResponseEntity<List<Appointment>> getAllAppointments(){
        return new ResponseEntity<>(appointmentRepository.findAll(), HttpStatus.OK);
    }

    //SHOW
    @GetMapping(value = "/appointments/{id}")
    public ResponseEntity getAppointment(@PathVariable Long id){
        return new ResponseEntity<>(appointmentRepository.findById(id), HttpStatus.OK);
    }

    // CREATE
    @PostMapping(value = "/appointments")
    public ResponseEntity<Appointment> createAppointment(@RequestBody Appointment appointment){
        appointmentRepository.save(appointment);
        return new ResponseEntity<>(appointment, HttpStatus.CREATED);
    }

    // UPDATE
    @PutMapping(value = "/appointments/{id}")
    public ResponseEntity<Appointment> updateAppointment(@RequestBody Appointment appointment, @PathVariable Long id){
        Appointment appointmentToUpdate = appointmentRepository.findById(id).get();
        appointmentToUpdate.setClient(appointment.getClient());
        appointmentToUpdate.setProvider(appointment.getProvider());
        appointmentToUpdate.setLocation(appointment.getLocation());
        appointmentToUpdate.setRoom(appointment.getRoom());
        appointmentToUpdate.setType(appointment.getType());
        appointmentToUpdate.setStartTime(appointment.getStartTime());
        appointmentToUpdate.setEndTime(appointment.getEndTime());
        appointmentRepository.save(appointmentToUpdate);
        return new ResponseEntity<>(appointmentToUpdate, HttpStatus.OK);
    }

    // DESTROY
    @DeleteMapping(value = "/appointments/{id}")
    public ResponseEntity<Long> destroyAppointment(@PathVariable Long id){
        appointmentRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }


    // Custom Routes


}
