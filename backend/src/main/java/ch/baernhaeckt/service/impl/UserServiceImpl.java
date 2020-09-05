package ch.baernhaeckt.service.impl;

import ch.baernhaeckt.model.User;
import ch.baernhaeckt.repository.UserRepository;
import ch.baernhaeckt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;

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
