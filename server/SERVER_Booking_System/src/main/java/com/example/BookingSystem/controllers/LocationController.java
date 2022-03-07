package com.example.BookingSystem.controllers;

import com.example.BookingSystem.models.Location;
import com.example.BookingSystem.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("localhost:3000")
public class LocationController {
    @Autowired
    LocationRepository locationRepository;

    @GetMapping("locations")
    public ResponseEntity<List<Location>> getAllLocations(){
        return new ResponseEntity<>(locationRepository.findAll(), HttpStatus.OK);
    }

    //SHOW


    // CREATE


    // UPDATE


    // DESTROY



    // Custom Routes
}
