package com.moon.moonlightpedia.controllers;

import com.moon.moonlightpedia.entities.Message;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MessageController {

    @RequestMapping("/hello")
    public Message sayHello(){
        System.out.println("Render here tes");
        return new Message("Hello World") ;
    }
}
