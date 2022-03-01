package com.example.BookingSystem.components;


import com.example.BookingSystem.models.Appointment;
import com.example.BookingSystem.models.Provider;
import com.example.BookingSystem.repositories.AppointmentRepository;
import com.example.BookingSystem.repositories.ClientRepository;
import com.example.BookingSystem.repositories.ProviderRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    ProviderRespository providerRepository;
    @Autowired
    AppointmentRepository appointmentRepository;

    public DataLoader(){
    }

    public void run(ApplicationArguments args){
        Provider dave = new Provider("Dave","Andrews","DA25","1234");
        providerRepository.save(dave);

        Appointment appointment1 =new Appointment(dave,"massage","19:00","18:00");
        appointmentRepository.save(appointment1);

        Appointment appointment2 = new Appointment(dave,"Dentist","2:00","3:00");
        appointmentRepository.save(appointment2);

        




    }
}
