package ch.baernhaeckt.controller;

import ch.baernhaeckt.model.User;
import ch.baernhaeckt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public @ResponseBody
    User[] list() {
        ArrayList<User> users = (ArrayList<User>) userRepository.findAll();
        return users.toArray(new User[0]);
    }

    @GetMapping("/{id}")
    public @ResponseBody
    User getById(@PathVariable String id) {
        return userRepository.findById(id).get();
    }

    @GetMapping("/getByEmail")
    @ResponseBody
    public ResponseEntity<User> getByEmail(@RequestParam String email) {
        Optional<User> user = userRepository.findByEmail(email);
        return user.map(ResponseEntity::ok).orElse(null);
    }
}
