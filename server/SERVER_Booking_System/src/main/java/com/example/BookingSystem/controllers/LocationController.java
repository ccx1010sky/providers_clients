package com.example.BookingSystem.controllers;

import com.example.BookingSystem.models.Location;
import com.example.BookingSystem.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class LocationController {
    @Autowired
    LocationRepository locationRepository;

    @GetMapping("locations")
    public ResponseEntity<List<Location>> getAllLocations(){
        return new ResponseEntity<>(locationRepository.findAll(), HttpStatus.OK);
    }

    //SHOW
    @GetMapping(value = "/locations/{id}")
    public ResponseEntity getLocation(@PathVariable Long id){
        return new ResponseEntity(locationRepository.findById(id), HttpStatus.OK);
    }

    // CREATE
    @PostMapping(value = "/locations")
    public ResponseEntity<Location> createLocation(@RequestBody Location location){
        locationRepository.save(location);
        return new ResponseEntity<>(location, HttpStatus.CREATED);
    }

    // UPDATE
    @PutMapping(value = "/locations/{id}")
    public ResponseEntity<Location> updateLocation(@RequestBody Location location, @PathVariable Long id){
        Location locationToUpdate = locationRepository.findById(id).get();
        locationToUpdate.setName(location.getName());
        locationToUpdate.setAddress(location.getAddress());
        locationToUpdate.setEmail(location.getEmail());
        locationToUpdate.setPhoneNumber(location.getPhoneNumber());
        locationToUpdate.setRooms(location.getRooms());
        locationToUpdate.setProviders(location.getProviders());
        locationToUpdate.setAdmins(location.getAdmins());
        locationToUpdate.setAppointments(location.getAppointments());
        locationRepository.save(locationToUpdate);
        return new ResponseEntity<>(locationToUpdate, HttpStatus.OK);
    }

    // DESTROY
    @DeleteMapping(value = "/locations/{id}")
    public ResponseEntity<Long> destroyLocation(@PathVariable Long id){
        locationRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }


    // Custom Routes
}
