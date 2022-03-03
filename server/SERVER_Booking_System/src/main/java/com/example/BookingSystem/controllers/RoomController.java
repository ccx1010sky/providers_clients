package com.example.BookingSystem.controllers;

import com.example.BookingSystem.models.Room;
import com.example.BookingSystem.repositories.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RoomController {
    @Autowired
    RoomRepository roomRepository;

    @GetMapping(value = "/rooms")
    public ResponseEntity<List<Room>> getAllRooms(){
        return new ResponseEntity<>(roomRepository.findAll(), HttpStatus.OK);
    }

    //SHOW
    @GetMapping(value = "/rooms/{id}")
    public ResponseEntity getRoom(@PathVariable Long id){
        return new ResponseEntity<>(roomRepository.findById(id), HttpStatus.OK);
    }

    // CREATE
    @PostMapping(value = "/rooms")
    public ResponseEntity<Room> createRoom(@RequestBody Room room){
        roomRepository.save(room);
        return new ResponseEntity<>(room, HttpStatus.CREATED);
    }

    // UPDATE


    // DESTROY



    // Custom Routes
}
