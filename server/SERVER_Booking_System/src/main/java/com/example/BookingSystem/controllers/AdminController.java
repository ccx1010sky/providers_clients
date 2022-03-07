package com.example.BookingSystem.controllers;

import com.example.BookingSystem.models.Admin;
import com.example.BookingSystem.repositories.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class AdminController {

    @Autowired
    AdminRepository adminRepository;

    // CRUD routes

    // INDEX
    @GetMapping("/admins")
    public ResponseEntity<List<Admin>> getAllAdmins(){
        return new ResponseEntity<>(adminRepository.findAll(), HttpStatus.OK);
    }

    //SHOW
    @GetMapping(value = "/admins/{id}")
    public ResponseEntity getAdmin(@PathVariable Long id){
        return new ResponseEntity<>(adminRepository.findById(id), HttpStatus.OK);
    }

    // CREATE
    @PostMapping(value = "/admins")
    public ResponseEntity<Admin> createAdmin(@RequestBody Admin admin){
        adminRepository.save(admin);
        return new ResponseEntity<>(admin, HttpStatus.CREATED);
    }

    // UPDATE
    @PutMapping(value = "/admins/{id}")
    public ResponseEntity<Admin> updateAdmin(@RequestBody Admin admin, @PathVariable Long id){
        Admin adminToUpdate = adminRepository.findById(id).get();
        adminToUpdate.setFirstName(admin.getFirstName());
        adminToUpdate.setLastName(admin.getLastName());
        adminToUpdate.setRole(admin.getRole());
        adminToUpdate.setLocation(admin.getLocation());
        adminRepository.save(adminToUpdate);
        return new ResponseEntity<>(adminToUpdate, HttpStatus.OK);
    }

    // DESTROY
    @DeleteMapping(value = "/admins/{id}")
        public ResponseEntity<Long> destroyAdmin(@PathVariable Long id){
            adminRepository.deleteById(id);
            return new ResponseEntity<>(id, HttpStatus.OK);
        }



    // Custom Routes

}
