package com.example.BookingSystem.controllers;

import com.example.BookingSystem.models.Client;
import com.example.BookingSystem.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ClientController {
    @Autowired
    ClientRepository clientRepository;

    @GetMapping("/clients")
    public ResponseEntity<List<Client>> getAllClients(){
        return new ResponseEntity<>(clientRepository.findAll(), HttpStatus.OK);
    }

    //SHOW


    // CREATE


    // UPDATE


    // DESTROY



    // Custom Routes
}
