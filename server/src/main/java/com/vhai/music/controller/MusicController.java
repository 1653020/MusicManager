package com.vhai.music.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MusicController {
    @Autowired

    @GetMapping("/music")
    String getAllMusic() {

        return "Testing get All";
    }

    @PostMapping("/music")
    String postMusic(@RequestBody String input) {
        return "Post successes " + input;
    }

    @GetMapping("/music/{id}")
    String getMusicById (@PathVariable Long id) {
        return "get successes music id: " + id;
    }

    @DeleteMapping("/music/{id}")
    String deleteMusicById(@PathVariable Long id) {
        return "delete Successes " + id;
    }

    @PutMapping("music/{name}")
    String updateMusicName(@PathVariable String name) {
        return "Update successes " + name;
    }
}
