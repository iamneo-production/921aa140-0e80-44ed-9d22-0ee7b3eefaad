package com.project.backend.service;

import com.project.backend.model.User;
import com.project.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user){
        return userRepository.save(user);
    }
    public User fetchUserByEmail(String email){
        return userRepository.findByEmail(email);
    }
    public User fetchUserByEmailAndPassword(String email,String password){
        return userRepository.findByEmailAndPassword(email,password);
    }
}
