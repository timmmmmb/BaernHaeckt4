package ch.baernhaeckt.service.impl;

import ch.baernhaeckt.model.User;
import ch.baernhaeckt.repository.UserRepository;
import ch.baernhaeckt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;

/**
 * This is the UserService impl in this service are all functions related to the service
 */
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;

    /**
     * This function creates a new user and persists it in the database
     * @param firstname this is the firstname of the user
     * @param name this is the lastname of the user
     * @param dateOfBirth this is the birth date of the user
     * @param email this is the email of the user
     * @param password this it the password of the user it gets hashed in this function with bcrypt
     * @return a new User object that was persisted
     */
    @Override
    public User createUser(String firstname, String name, String dateOfBirth, String email, String password) {
        User user = new User();
        user.setFirstname(firstname);
        user.setName(name);
        user.setDateOfBirth(dateOfBirth);
        user.setEmail(email);
        user.setPassword(user.encoder().encode(password));
        user.setCreated(Calendar.getInstance().getTime());
        return userRepository.save(user);
    }
}
