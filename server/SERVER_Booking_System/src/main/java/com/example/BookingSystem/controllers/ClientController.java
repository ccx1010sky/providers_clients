package com.example.BookingSystem.controllers;

import com.example.BookingSystem.models.Client;
import com.example.BookingSystem.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ClientController {
    @Autowired
    ClientRepository clientRepository;

    @GetMapping(value = "/clients")
    public ResponseEntity<List<Client>> getAllClients(){
        return new ResponseEntity<>(clientRepository.findAll(), HttpStatus.OK);
    }

    //SHOW
    @GetMapping(value = "/clients/{id}")
    public ResponseEntity getClient(@PathVariable Long id){
        return new ResponseEntity(clientRepository.findById(id), HttpStatus.OK);
    }

    // CREATE
    @PostMapping(value = "/clients")
    public ResponseEntity<Client> createClient(@RequestBody Client client){
        clientRepository.save(client);
        return new ResponseEntity<>(client, HttpStatus.CREATED);
    }

    // UPDATE
    // N.B. can not change a clients appointments by this route!
    @PutMapping(value = "/clients/{id}")
    public ResponseEntity<Client> updateClient(@RequestBody Client client, @PathVariable Long id){
        Client clientToUpdate = clientRepository.findById(id).get();
        clientToUpdate.setFirstName(client.getFirstName());
        clientToUpdate.setLastName(client.getLastName());
        clientToUpdate.setDob(client.getDob());
        clientToUpdate.setPhone(client.getPhone());
        clientToUpdate.setEmail(client.getEmail());
        clientRepository.save(clientToUpdate);
        return new ResponseEntity<>(clientToUpdate, HttpStatus.OK);
    }

    // DESTROY
    @DeleteMapping(value = "/clients/{id}")
    public ResponseEntity<Long> destroyClient(@PathVariable Long id){
        clientRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }



    // Custom Routes
}
