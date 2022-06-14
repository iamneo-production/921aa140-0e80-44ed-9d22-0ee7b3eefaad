package com.project.backend.controller;

import com.project.backend.exception.ResourceNotFoundException;
import com.project.backend.model.Appointment;
import com.project.backend.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/api/v1")
public class AppointmentController {

    @Autowired
    private AppointmentRepository appointmentRepository;

    //get appointments
    @GetMapping("/appointments")
    public List<Appointment> getAllAppointments(){
        return appointmentRepository.findAll();
    }

    //create appointment
    @PostMapping("/appointments")
    public Appointment createAppointment(@RequestBody Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    //get  by id rest api
    @GetMapping("/appointments/{id}")
    public ResponseEntity<Appointment> getCenterById(@PathVariable Long id) {
        Appointment Appointment = appointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Appointment not exist with id: " + id));
        return ResponseEntity.ok(Appointment);

    }

    //update rest api
    @PutMapping("/appointments/{id}")
    public ResponseEntity<Appointment> updateAppointment(@PathVariable Long id, @RequestBody Appointment appointmentDetails) {
        Appointment appointment = appointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("appointment not exist with id: " + id));
        appointment.setProduct_name(appointmentDetails.getProduct_name());
        appointment.setModel_number(appointmentDetails.getModel_number());
        appointment.setDate_of_purchase(appointmentDetails.getDate_of_purchase());
        appointment.setContactNumber(appointmentDetails.getContactNumber());
        appointment.setProblem_description(appointmentDetails.getProblem_description());
        appointment.setDate_of_purchase(appointmentDetails.getDate_of_purchase());
        Appointment updateAppointment = appointmentRepository.save(appointment);
        return ResponseEntity.ok(updateAppointment);

    }

    //delete center
    @DeleteMapping("/appointments/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteCenter(@PathVariable Long id) {
        Appointment appointment = appointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("appointment not exist with id: " + id));
        appointmentRepository.delete(appointment);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
