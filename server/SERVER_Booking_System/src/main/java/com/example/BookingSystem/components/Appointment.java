package com.example.BookingSystem.components;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="appointments")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Long getId() {
        return id;
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

    public Appointment(Provider provider, String type, String startTime, String endTime) {
        this.provider = provider;
        this.type = type;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    @JsonIgnoreProperties("appointments")
    @ManyToOne
    @JoinColumn(name = "provider_id ", nullable = false)
    private Provider provider;

    @Column(name="type")
    private String type;

    @Column(name="startTime")
    private String startTime;

    @Column(name="endTime")
    private String endTime;

}
