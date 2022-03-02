package com.example.BookingSystem.components;


import com.example.BookingSystem.models.*;
import com.example.BookingSystem.repositories.*;
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
    @Autowired
    AdminRepository adminRepository;
    @Autowired
    LocationRepository locationRepository;
    @Autowired
    ClientRepository clientRepository;
    @Autowired
    RoomRepository roomRepository;


    public DataLoader(){
    }

    public void run(ApplicationArguments args){
        Provider dave = new Provider("Dave","Andrews","DA25","1234");
        providerRepository.save(dave);

        Admin admin = new Admin("Freya","Jules","FJ25","1234");
        adminRepository.save(admin);

        Location location = new Location("Big Building","35 Big Road","123456789","BigBuilding@Gmail.com");
        locationRepository.save(location);

        Client client = new Client("John","Smith","JS25","1234");
        clientRepository.save(client);

        Appointment appointment1 =new Appointment(dave,"massage","19:00","18:00");
        appointmentRepository.save(appointment1);

        Appointment appointment2 = new Appointment(dave,"Dentist","2:00","3:00");
        appointmentRepository.save(appointment2);













    }
}
