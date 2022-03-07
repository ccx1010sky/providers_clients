package com.example.BookingSystem.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
@Entity
@Table(name="providers")
public class Provider {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    @Column(name="service_type")
    private String serviceType;

    @Column(name = "role")
    private String role;

    @JsonIgnoreProperties(value= {"appointments", "locations", "clients"})
    @OneToMany(mappedBy = "provider",fetch = FetchType.LAZY)
    private List<Appointment> appointments;

    @ManyToMany
    @JsonIgnoreProperties({"providers", "rooms", "appointments", "admins"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "locations_providers",
            joinColumns = { @JoinColumn(
                    name = "provider_id",
                    nullable = false,
                    updatable = false)
            },
            inverseJoinColumns = { @JoinColumn(
                    name = "location_id",
                    nullable = false,
                    updatable = false)
            }
    )
    private List<Location> locations;

    @ManyToMany
    @JsonIgnoreProperties({"providers", "locations", "appointments"})
    //@JsonBackReference
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "clients_providers",
            joinColumns = { @JoinColumn(
                    name = "provider_id",
                    nullable = false,
                    updatable = false)
            },
            inverseJoinColumns = { @JoinColumn(
                    name = "client_id",
                    nullable = false,
                    updatable = false)
            }
    )
    private List<Client> clients;


    public Provider(String firstName, String lastName, String serviceType, String role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.serviceType = serviceType;
        this.role = role;
        this.appointments = new ArrayList<>();
        this.locations = new ArrayList<>();
        this.clients = new ArrayList<>();
    }

    public Provider(){
    }


    public String getServiceType() {
        return serviceType;
    }

    public void setServiceType(String serviceType) {
        this.serviceType = serviceType;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public List<Client> getClients() {
        return clients;
    }

    public void setClients(List<Client> clients) {
        this.clients = clients;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public List<Location> getLocations() {
        return locations;
    }

    public void setLocations(List<Location> locations) {
        this.locations = locations;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public List<Appointment> getAppointments() {
        return appointments;
    }

    public void setAppointments(List<Appointment> appointments) {
        this.appointments = appointments;
    }

    public void addLocation(Location location){
        this.locations.add(location);
    }

    public void addClient(Client client) {
        if (!this.clients.contains(client)) {
            this.clients.add(client);
        }
    }
}
