package com.example.BookingSystem.controllers;

import com.example.BookingSystem.models.Admin;
import com.example.BookingSystem.repositories.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AdminController {

    @Autowired
    AdminRepository adminRepository;


    @GetMapping("/admins")
    public ResponseEntity<List<Admin>> getAdmins(){
        return new ResponseEntity<>(adminRepository.findAll(), HttpStatus.OK);
    }
}
