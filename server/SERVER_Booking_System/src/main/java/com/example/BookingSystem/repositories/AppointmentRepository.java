package com.example.BookingSystem.repositories;

import com.example.BookingSystem.models.Appointment;
import com.oracle.xmlns.internal.webservices.jaxws_databinding.JavaParam;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepository extends JpaRepository<Appointment,Long> {
}
