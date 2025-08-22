package com.example.demo;

import jakarta.persistence.*;

@Entity
public class Issue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String status = "OPEN";

    public Issue() {} // Default constructor krävs av JPA

    public Issue(String title, String description) {
        this.title = title;
        this.description = description;
    }

    // Getters och setters
    public Long getId() { return id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
