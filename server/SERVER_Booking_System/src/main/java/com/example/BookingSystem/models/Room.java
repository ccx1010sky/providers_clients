package com.example.BookingSystem.models;

public class Room extends Workspace{

    private int capacity;
    public Room(String name,int capacity) {
        super(name);
        this.capacity=capacity;
    }

    public Room() {
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }
}
