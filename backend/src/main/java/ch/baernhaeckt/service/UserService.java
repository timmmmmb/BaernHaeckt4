package ch.baernhaeckt.service;

import ch.baernhaeckt.model.User;

public interface UserService {
    User createUser(String firstname, String name, String dateOfBirth, String email, String password);
}
