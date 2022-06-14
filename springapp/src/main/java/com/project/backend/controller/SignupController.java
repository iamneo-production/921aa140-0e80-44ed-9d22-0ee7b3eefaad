package com.project.backend.controller;

import com.project.backend.model.User;
import com.project.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class SignupController {
    @Autowired
    private UserService userService;

    @PostMapping("/userregister")
    public User registerUser(@RequestBody User user) throws Exception{
        String currEmail=user.getEmail();
        if(currEmail!=null||!"".equals(currEmail)){
            User userObj=userService.fetchUserByEmail(currEmail);
            if (userObj!=null){
                throw new Exception("User with this id exists");
            }
        }
        User userObj=null;
        userObj=userService.saveUser(user);
        return userObj;
    }
}
