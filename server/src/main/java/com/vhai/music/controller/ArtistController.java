package com.vhai.music.controller;
import com.vhai.music.dao.artistDao;
import com.vhai.music.entities.artist;

import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class ArtistController {

    @PostMapping("/createArtist")
    String postCreateArtist(@RequestBody String name, Date birthDate) {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("hibernate.cfg.xml");
        artistDao artistDao = (artistDao) context.getBean("customerDAO");
        artist newArtist = new artist();
        newArtist.setName(name);
        newArtist.setBirthDay(birthDate);
        artistDao.createArtist(newArtist);
        return "create Success!";
    }

}
