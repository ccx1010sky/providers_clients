package com.example.BookingSystem.repositories;

import com.example.BookingSystem.models.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client,Long> {
}
