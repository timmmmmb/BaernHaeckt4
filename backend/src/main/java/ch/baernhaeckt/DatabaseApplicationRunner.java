package ch.baernhaeckt;

import ch.baernhaeckt.model.Product;
import ch.baernhaeckt.model.Purchase;
import ch.baernhaeckt.model.User;
import ch.baernhaeckt.repository.ProductRepository;
import ch.baernhaeckt.repository.PurchaseRepository;
import ch.baernhaeckt.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

@Component
public class DatabaseApplicationRunner implements ApplicationRunner {
    @Autowired
    ProductRepository productRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    PurchaseRepository purchaseRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        User user = userRepository.save(createRandomUser());
        Logger logger = LoggerFactory.getLogger("Test");
        Product product = new Product();
        product.setDescription("Dies ist unser Default Pass");
        product.setName("Basic Gästepass");
        product = productRepository.save(product);
        Purchase purchase = new Purchase();
        purchase.setProduct(product);
        purchase.setUser(user);
        purchase.setQrCode("dies ist der QR Code in text");
        purchase.setPurchasedOn(Calendar.getInstance().getTime());
        purchase.setValidFrom(parseDate("2020-10-01"));
        purchase.setValidTo(parseDate("2020-10-05"));
        purchaseRepository.save(purchase);
        purchase = new Purchase();
        purchase.setProduct(product);
        purchase.setUser(user);
        purchase.setQrCode("dies ist der QR Code in text");
        purchase.setPurchasedOn(Calendar.getInstance().getTime());
        purchase.setValidFrom(parseDate("2020-09-04"));
        purchase.setValidTo(parseDate("2020-09-09"));
        purchaseRepository.save(purchase);
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

    public static Date parseDate(String date) {
        try {
            return new SimpleDateFormat("yyyy-MM-dd").parse(date);
        } catch (ParseException e) {
            return null;
        }
    }
}
