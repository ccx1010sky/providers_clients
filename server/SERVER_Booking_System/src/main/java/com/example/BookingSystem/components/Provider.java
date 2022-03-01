package com.example.BookingSystem.components;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;
@Entity
@Table(name="providers")
public class Provider extends User{
    @JsonIgnoreProperties(value="providers")
    @OneToMany(mappedBy = "providers",fetch = FetchType.LAZY)

    private List<Appointment> appointments;

    public Provider(String firstName, String lastName, String userName, String password) {
        super(firstName, lastName, userName, password);
    }

    public List<Appointment> getAppointments() {
        return appointments;
    }

    public void setAppointments(List<Appointment> appointments) {
        this.appointments = appointments;
    }
}
