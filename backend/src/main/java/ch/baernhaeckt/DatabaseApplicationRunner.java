package ch.baernhaeckt;

import ch.baernhaeckt.model.User;
import ch.baernhaeckt.repository.ProductRepository;
import ch.baernhaeckt.repository.PurchaseRepository;
import ch.baernhaeckt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.Calendar;

@Component
public class DatabaseApplicationRunner implements ApplicationRunner {
    @Autowired
    UserRepository userRepository;
    @Autowired
    ProductRepository productRepository;
    @Autowired
    PurchaseRepository purchaseRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        userRepository.save(createRandomUser());
    }

    private User createRandomUser(){
        User user = new User();
        user.setCreated(Calendar.getInstance().getTime());
        user.setDateOfBirth("01,01,2000");
        user.setEmail("test@user.ch");
        user.setFirstname("user");
        user.setName("test");
        user.setPassword("secure");
        return user;
    }
}
