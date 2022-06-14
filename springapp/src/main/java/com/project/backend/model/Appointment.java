package com.project.backend.model;

import sun.util.calendar.BaseCalendar;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table
public class Appointment {
    @Id
    @GeneratedValue
    Long id;
    String product_name;
    String model_number;
    String date_of_purchase;
    String contactNumber;
    String problem_description;
    String available_slot;

    public Appointment(){}

    public Appointment(String product_name, String model_number, String date_of_purchase, String contactNumber, String problem_description, String available_slot) {
        this.product_name = product_name;
        this.model_number = model_number;
        this.date_of_purchase = date_of_purchase;
        this.contactNumber = contactNumber;
        this.problem_description = problem_description;
        this.available_slot = available_slot;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProduct_name() {
        return product_name;
    }

    public void setProduct_name(String product_name) {
        this.product_name = product_name;
    }

    public String getModel_number() {
        return model_number;
    }

    public void setModel_number(String model_number) {
        this.model_number = model_number;
    }

    public String getDate_of_purchase() {
        return date_of_purchase;
    }

    public void setDate_of_purchase(String date_of_purchase) {
        this.date_of_purchase = date_of_purchase;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getProblem_description() {
        return problem_description;
    }

    public void setProblem_description(String problem_description) {
        this.problem_description = problem_description;
    }

    public String getAvailable_slot() {
        return available_slot;
    }

    public void setAvailable_slot(String available_slot) {
        this.available_slot = available_slot;
    }
}
