package ch.baernhaeckt.controller;

import ch.baernhaeckt.exception.EmailExistsException;
import ch.baernhaeckt.model.User;
import ch.baernhaeckt.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/user-management")
@CrossOrigin(origins = "*")
public class UserManagementController {
    @Autowired
    private UserRepository userRepository;

    private Logger logger = LoggerFactory.getLogger(UserManagementController.class);

    /**
     * Login user
     *
     * @param user to be logged in
     * @return logged in user
     */
    @PostMapping("/login")
    public ResponseEntity<User> loginUser(@Valid @RequestBody User user) {
        Optional<User> res = userRepository.findByEmailIgnoreCase(user.getEmail());


        if (res.isEmpty()) {
            logger.warn("User not found");
            return null;
        }

        User userResponse = res.get();

        if (user.encoder().matches(user.getPassword(), userResponse.getPassword())) {
            User updatedUser = userRepository.save(userResponse);
            return ResponseEntity.ok(updatedUser);
        }

        logger.warn("Password does not match");
        return null;
    }

    /**
     * Register new user
     *
     * @param user to be registered
     * @return newly register user
     * @throws EmailExistsException if the user already exists with this email address
     */
    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@Valid @RequestBody User user) throws EmailExistsException {
        if (emailExists(user.getEmail())) {
            throw new EmailExistsException("Account with this email address already exists: " + user.getEmail());
        }

        user.setPassword(user.encoder().encode(user.getPassword()));

        return ResponseEntity.ok(userRepository.save(user));

    }

    private boolean emailExists(String email) {
        return userRepository.findByEmailIgnoreCase(email).isPresent();
    }
}
