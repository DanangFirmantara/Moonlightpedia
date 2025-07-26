package com.moon.moonlightpedia.controllers;

import com.moon.moonlightpedia.entities.User;
import com.moon.moonlightpedia.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class UserController {
    private final UserRepository userRepository;


    @RequestMapping("/users")
    public Iterable<User> getAllUser(){
        return userRepository.findAll();
    }
}
