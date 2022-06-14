package com.project.backend.controller;

import com.project.backend.model.User;
import com.project.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.xml.ws.Action;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class LoginController {
    @Autowired
    private UserService userService;

    @PostMapping("/userlogin")
    public User loginUser(@RequestBody User user)throws Exception{
        String currEmail= user.getEmail();
        String currPassword=user.getPassword();
        User userObj=null;

        if(currEmail!=null&&currPassword!=null){
            userObj=userService.fetchUserByEmailAndPassword(currEmail,currPassword);
        }
        if(userObj==null){
            throw new Exception("User does not exists!!!Please enter valid credentials");
        }
        return userObj;
    }
}
