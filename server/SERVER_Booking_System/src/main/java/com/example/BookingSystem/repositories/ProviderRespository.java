package com.example.BookingSystem.repositories;

import com.example.BookingSystem.models.Provider;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProviderRespository extends JpaRepository<Provider,Long> {
}
