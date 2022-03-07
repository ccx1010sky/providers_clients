package com.example.BookingSystem.controllers;

import com.example.BookingSystem.models.Appointment;
import com.example.BookingSystem.models.Provider;
import com.example.BookingSystem.repositories.ProviderRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProviderController {
    @Autowired
    ProviderRespository providerRespository;

    @GetMapping(value = "/providers")
    public ResponseEntity<List<Provider>> getProviders(){
        return new ResponseEntity<>(providerRespository.findAll(), HttpStatus.OK);
    }

    //SHOW
    @GetMapping(value = "/providers/{id}")
    public ResponseEntity getProvider(@PathVariable Long id){
        return new ResponseEntity(providerRespository.findById(id), HttpStatus.OK);
    }

    // CREATE
    @PostMapping(value = "/providers")
    public ResponseEntity<Provider> createProviders(@RequestBody Provider provider){
        providerRespository.save(provider);
        return new ResponseEntity<>(provider, HttpStatus.CREATED);
    }

    // UPDATE
    @PutMapping(value = "/providers/{id}")
    public ResponseEntity<Provider> updateProvider(@RequestBody Provider provider, @PathVariable Long id){
        Provider providerToUpdate = providerRespository.findById(id).get();
        providerToUpdate.setFirstName(provider.getFirstName());
        providerToUpdate.setLastName(provider.getLastName());
        providerToUpdate.setRole(provider.getRole());
        providerToUpdate.setServiceType(provider.getServiceType());
        providerToUpdate.setClients(provider.getClients());
        providerToUpdate.setLocations(provider.getLocations());
        providerRespository.save(providerToUpdate);
        return new ResponseEntity<>(providerToUpdate, HttpStatus.OK);
    }

    // DESTROY
    @DeleteMapping(value = "/providers/{id}")
    public ResponseEntity<Long> destroyProvider(@PathVariable Long id){
        providerRespository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }


    // Custom Routes
}
