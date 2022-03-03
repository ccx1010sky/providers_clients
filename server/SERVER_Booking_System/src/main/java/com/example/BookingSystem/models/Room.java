package com.example.BookingSystem.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "rooms")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;
    @Column(name = "capacity")
    private int capacity;

    //@JsonIgnoreProperties({"rooms"})
    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "location_id", nullable = false)
    private Location location;

    @JsonIgnoreProperties(value="room")
    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY)
    private List<Appointment> appointments;

    public Room(String name,int capacity, Location location) {
        this.name = name;
        this.capacity = capacity;
        this.location = location;
        this.appointments = new ArrayList<>();
    }

    public Room() {
    }

    public List<Appointment> getAppointments() {
        return appointments;
    }

    public void setAppointments(List<Appointment> appointments) {
        this.appointments = appointments;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public void addAppointment(Appointment appointment){
        this.appointments.add(appointment);
    }
}
