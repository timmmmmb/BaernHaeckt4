package ch.baernhaeckt.service.impl;

import ch.baernhaeckt.model.Product;
import ch.baernhaeckt.model.Purchase;
import ch.baernhaeckt.model.User;
import ch.baernhaeckt.repository.PurchaseRepository;
import ch.baernhaeckt.service.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;
import java.util.Random;

@Service
public class PurchaseServiceImpl implements PurchaseService {
    @Autowired
    PurchaseRepository purchaseRepository;

    @Override
    public Purchase createPurchase(Date validFrom, Date validTo, Product product, User user) {
        Purchase purchase = new Purchase();
        purchase.setUser(user);
        purchase.setProduct(product);
        purchase.setValidFrom(validFrom);
        purchase.setValidTo(validTo);
        purchase.setPurchasedOn(Calendar.getInstance().getTime());
        purchase.setQrCode(purchase.getPurchasedOn() + user.getId() + new Random().nextInt());
        purchase = purchaseRepository.save(purchase);
        purchase.setQrCode(purchase.getPurchasedOn() + user.getId() + purchase.getId());
        return purchaseRepository.save(purchase);
    }
}
