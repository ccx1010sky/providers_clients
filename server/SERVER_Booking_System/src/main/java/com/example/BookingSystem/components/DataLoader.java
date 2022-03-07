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
        Provider provider = new Provider("Dave","Andrews","Physiotherapy","Physiotherapist");
        providerRepository.save(provider);
        Provider provider2 = new Provider("Jenny","Andrews","Sports Massage"," Senior Sports Massage Therapist");
        providerRepository.save(provider2);
        Provider provider3 = new Provider("Bernie","Andrews","Podiatry & Bio-mechanics","Podiatrist");
        providerRepository.save(provider3);
        Provider provider4 = new Provider("Dave","Andrews","Sports Nutrition","Nutritionist");
        providerRepository.save(provider4);
        Provider provider5 = new Provider("Jenny","Andrews","Physiotherapy","Senior Physio");
        providerRepository.save(provider5);
        Provider provider6 = new Provider("Bernie","Andrews","Swedish Massage","Swedish Massage Therapist");
        providerRepository.save(provider6);

        Client client = new Client("John","Smith","04/12/1975", "07957234153", "john@johnmail.com");
        clientRepository.save(client);
        Client client2 = new Client("Mandy","Mendoza","12/02/1999", "07878567435", "manmendo@gmail.com");
        clientRepository.save(client2);
        Client client3 = new Client("Sally","Simpleton","09/07/2001", "07834567234", "saldip@yahoo.com");
        clientRepository.save(client3);
        Client client4 = new Client("John","Denver","09/12/1967", "07957123098", "john@gmail.com");
        clientRepository.save(client4);
        Client client5 = new Client("Jane","Hair","12/08/1989", "07878567655", "hairyjane@gmail.com");
        clientRepository.save(client5);
        Client client6 = new Client("Godfrey","Bishop","27/07/2000", "07893456123", "godB@yahoo.com");
        clientRepository.save(client6);
        Client client7 = new Client("Alice","Smith","04/12/1954", "07867123647", "asmith@aol.com");
        clientRepository.save(client7);
        Client client8 = new Client("Bindi","Berloda","29/02/1992", "07865345267", "bindib@gmail.com");
        clientRepository.save(client8);
        Client client9 = new Client("Faruq","Azeez","10/07/2001", "07834567784", "fa@yahoo.mr");
        clientRepository.save(client9);
        Client client10 = new Client("Jenafleur","Starflower","20/03/1987", "07956783098", "dirtyhippy@gmail.com");
        clientRepository.save(client10);
        Client client11 = new Client("Bart","Bane","12/08/1997", "078785876225", "boldboy@gmail.com");
        clientRepository.save(client11);
        Client client12 = new Client("Sonia","Leishman","27/06/2000", "07893456098", "sonical@yahoo.com");
        clientRepository.save(client12);

        Location location = new Location("Big Building","35 Big Road","123456789","BigBuilding@Gmail.com");
        locationRepository.save(location);
        Location location2 = new Location("Bigger Building","35 Bigger Road","123456789","BiggerBuilding@Gmail.com");
        locationRepository.save(location2);
        Location location3 = new Location("Small Building","35 Small Road","123456789","SmallBuilding@Gmail.com");
        locationRepository.save(location3);

        Admin admin = new Admin("Freya","Jules","Practice Manager", location);
        adminRepository.save(admin);
        Admin admin2 = new Admin("Jessica","Mathews","Receptionist", location2);
        adminRepository.save(admin2);
        Admin admin3 = new Admin("Alfred","Doyle","Receptionist", location3);
        adminRepository.save(admin3);

        Room room = new Room("Room 1", 3, location);
        roomRepository.save(room);
        Room room2 = new Room("Room 2", 3, location);
        roomRepository.save(room2);
        Room room3 = new Room("Room 3", 3, location);
        roomRepository.save(room3);

        // client 1 appointments
        Appointment appointment1 = new Appointment(client, provider, location, room2,  "massage","31/01/2022","19:00","18:00");
        appointmentRepository.save(appointment1);
        Appointment appointment2 = new Appointment(client, provider2, location, room, "Dentist", "02/02/2022", "2:00","3:00");
        appointmentRepository.save(appointment2);
        Appointment appointment3 = new Appointment(client, provider, location, room2,  "massage","07/02/2022","19:00","18:00");
        appointmentRepository.save(appointment3);
        Appointment appointment4 = new Appointment(client, provider2, location, room, "Dentist","20/02/2022","2:00","3:00");
        appointmentRepository.save(appointment4);
        Appointment appointment5 = new Appointment(client, provider, location, room2,  "massage","23/02/2022","19:00","18:00");
        appointmentRepository.save(appointment5);
        Appointment appointment6 = new Appointment(client, provider2, location, room, "Dentist", "27/02/2022", "2:00","3:00");
        appointmentRepository.save(appointment6);
        Appointment appointment7 = new Appointment(client, provider, location, room2,  "massage","07/03/2022","19:00","18:00");
        appointmentRepository.save(appointment7);
        Appointment appointment8 = new Appointment(client, provider2, location, room, "Dentist","20/03/2022","2:00","3:00");
        appointmentRepository.save(appointment8);

        // Add rooms available for use to the locations
        location.addRoom(room);
        location.addRoom(room2);
        location.addRoom(room3);
        locationRepository.save(location);

        // Give providers locations they are available
        provider.addLocation(location);
        provider.addLocation(location2);
        provider.addLocation(location3);
        providerRepository.save(provider);
        provider2.addLocation(location);
        provider2.addLocation(location3);
        providerRepository.save(provider2);
        provider3.addLocation(location);
        providerRepository.save(provider3);

        // Give locations providers that are available at that location
        // Should give same result as adding locations to providers
        location2.addProvider(provider3);
        location2.addProvider(provider2);
        locationRepository.save(location2);

//        // Add clients to a provider
//        provider.addClient(client);
//        provider.addClient(client2);
//        provider.addClient(client3);
//        providerRepository.save(provider);
//        provider2.addClient(client);
//        provider2.addClient(client3);
//        providerRepository.save(provider2);
//        provider3.addClient(client);
//        providerRepository.save(provider3);
//
//        // Give locations providers that are available at that location
//        // Should give same result as adding locations to providers
//        client2.addProvider(provider3);
//        client2.addProvider(provider2);
//        clientRepository.save(client2);












    }
}
