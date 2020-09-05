package ch.baernhaeckt.service;

import ch.baernhaeckt.model.Product;
import ch.baernhaeckt.model.Purchase;
import ch.baernhaeckt.model.User;

import java.util.Date;

public interface PurchaseService {
    Purchase createPurchase(Date validFrom, Date validTo, Product product, User user);
}
