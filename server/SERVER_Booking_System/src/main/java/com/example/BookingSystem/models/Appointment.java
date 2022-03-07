package com.example.BookingSystem.models;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="appointments")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @JsonIgnoreProperties({"appointments", "providers"})
    @ManyToOne
    @JoinColumn(name = "client_id ", nullable = false)
    private Client client;

    @JsonIgnoreProperties({"appointments", "locations", "clients"})
    @ManyToOne
    @JoinColumn(name = "provider_id ", nullable = false)
    private Provider provider;

    @Column(name="type")
    private String type;

    @Column(name = "date")
    private String date;

    @Column(name="startTime")
    private String startTime;

    @Column(name="endTime")
    private String endTime;

    @JsonIgnoreProperties({"appointments", "rooms", "admins", "providers"})
    @ManyToOne
    @JoinColumn(name = "location_id", nullable = false)
    private Location location;

    @JsonIgnoreProperties({"appointments", "location"})
    @ManyToOne
    @JoinColumn(name = "room_id", nullable = false)
    private Room room;


    public Appointment(Client client, Provider provider, Location location, Room room, String type, String date, String startTime, String endTime) {
        this.client = client;
        this.provider = provider;
        this.location = location;
        this.room = room;
        this.type = type;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.provider.addClient(this.client);
    }

    public Appointment() {
    }
    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public Long getId() {
        return id;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Provider getProvider() {
        return provider;
    }

    public void setProvider(Provider provider) {
        this.provider = provider;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }





}
