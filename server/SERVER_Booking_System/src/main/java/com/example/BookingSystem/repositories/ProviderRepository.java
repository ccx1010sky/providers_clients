package com.example.BookingSystem.repositories;

import com.example.BookingSystem.models.Provider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

@Repository
public interface ProviderRepository extends JpaRepository<Provider,Long> {
}
