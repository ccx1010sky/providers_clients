package com.example.BookingSystem.controllers;

import com.example.BookingSystem.models.Appointment;
import com.example.BookingSystem.models.Provider;
import com.example.BookingSystem.repositories.ProviderRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProviderController {
    @Autowired
    ProviderRespository providerRespository;

    @GetMapping("/providers")
    public ResponseEntity<List<Provider>> getProviders(){
        return new ResponseEntity<>(providerRespository.findAll(), HttpStatus.OK);
    }
}
