//package com.example.BookingSystem.models;
//
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//import org.hibernate.annotations.Cascade;
//
//import javax.persistence.*;
//
//@MappedSuperclass
//abstract public class Workspace {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @Column(name="name")
//    private String name;
//
//
//
//    public Workspace(String name) {
//        this.name = name;
//    }
//    public Workspace(){
//    }
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//}
