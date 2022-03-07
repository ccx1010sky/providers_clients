package com.example.BookingSystem.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
@Entity
@Table(name= "clients")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    @Column(name="dob")
    private String dob;

    @Column(name="phone")
    private String phone;

    @Column(name = "email")
    private String email;

    @JsonIgnoreProperties({"appointments", "locations", "providers"})
    @OneToMany(mappedBy = "client", fetch = FetchType.LAZY)
    private List<Appointment> appointments;

    @ManyToMany
    @JsonIgnoreProperties({"providers", "appointments"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "clients_locations",
            joinColumns = { @JoinColumn(
                    name = "client_id",
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
    @JsonIgnoreProperties({"clients", "locations", "appointments"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "clients_providers",
            joinColumns = { @JoinColumn(
                    name = "client_id",
                    nullable = false,
                    updatable = false)
            },
            inverseJoinColumns = { @JoinColumn(
                    name = "provider_id",
                    nullable = false,
                    updatable = false)
            }
    )
    private List<Provider> providers;

    public Client(){
    }

    public Client(String firstName, String lastName, String dob, String phone, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.phone = phone;
        this.email = email;
        this.appointments = new ArrayList<>();
        this.providers = new ArrayList<>();
        this.locations = new ArrayList<>();
    }

    public List<Location> getLocations() {
        return locations;
    }

    public void setLocations(List<Location> locations) {
        this.locations = locations;
    }

    public List<Provider> getProviders() {
        return providers;
    }

    public void setProviders(List<Provider> providers) {
        this.providers = providers;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

    public void addProvider(Provider provider) {
        if (!this.providers.contains(provider)) {
            this.providers.add(provider);
        }
    }
}
