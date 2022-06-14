package com.project.backend.controller;

import com.project.backend.exception.ResourceNotFoundException;
import com.project.backend.model.User;
import com.project.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/api/v1")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    //get all users
    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    //get user by id rest api
    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id){
        User user=userRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("User does not exist with id :" +id ));
        return ResponseEntity.ok(user);
    }

    //Update user rest api
    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id,@RequestBody User userDetails){
        User user=userRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("User does not exist with id :" +id ));
        user.setAdminoruser(userDetails.getAdminoruser());
        user.setEmail(userDetails.getEmail());
        user.setUsername(userDetails.getUsername());
        user.setMobileNumber(userDetails.getMobileNumber());
        user.setPassword(userDetails.getPassword());
        user.setConfirmPassword(userDetails.getConfirmPassword());

        User updatedUser=userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }

    //delete user rest api
    @DeleteMapping("/users/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteUser(@PathVariable Long id){
        User user=userRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("User does not exist with id :" +id ));
        userRepository.delete(user);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
