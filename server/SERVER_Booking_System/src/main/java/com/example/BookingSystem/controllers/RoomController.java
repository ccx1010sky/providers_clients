package com.example.BookingSystem.controllers;

import com.example.BookingSystem.models.Room;
import com.example.BookingSystem.repositories.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
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
    @PutMapping(value = "/rooms/{id}")
    public ResponseEntity<Room> updateRoom(@RequestBody Room room, @PathVariable Long id){
        Room roomToUpdate = roomRepository.findById(id).get();
        roomToUpdate.setName(room.getName());
        roomToUpdate.setCapacity(room.getCapacity());
        roomToUpdate.setLocation(room.getLocation());
        roomToUpdate.setAppointments(room.getAppointments());
        roomRepository.save(roomToUpdate);
        return new ResponseEntity<>(roomToUpdate, HttpStatus.OK);
    }

    // DESTROY
    @DeleteMapping(value = "/rooms/{id}")
    public ResponseEntity<Long> destroyRoom(@PathVariable Long id){
        Room roomToDelete = roomRepository.findById(id).get();
        roomRepository.delete(roomToDelete);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }


    // Custom Routes
}
