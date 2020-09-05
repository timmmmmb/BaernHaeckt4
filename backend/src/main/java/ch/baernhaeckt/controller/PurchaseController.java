package ch.baernhaeckt.controller;

import ch.baernhaeckt.model.Purchase;
import ch.baernhaeckt.model.User;
import ch.baernhaeckt.repository.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Calendar;

@RestController
@RequestMapping("/purchases")
public class PurchaseController {

    @Autowired
    private PurchaseRepository purchaseRepository;

    @GetMapping
    public @ResponseBody
    Purchase[] list() {
        ArrayList<Purchase> purchases = (ArrayList<Purchase>) purchaseRepository.findAll();
        return purchases.toArray(new Purchase[0]);
    }

    @GetMapping("/{id}")
    public @ResponseBody
    Purchase getById(@PathVariable String id) {
        return purchaseRepository.findById(id).get();
    }

    @GetMapping("/getByCustomer")
    @ResponseBody
    public Purchase[] getByCustomer(@RequestParam User user) {
        ArrayList<Purchase> purchases = (ArrayList<Purchase>) purchaseRepository.findByUser(user);
        return purchases.toArray(new Purchase[0]);
    }

    @GetMapping("/getValidPurchases")
    @ResponseBody
    public Purchase[] getValidPurchases() {
        ArrayList<Purchase> purchases = (ArrayList<Purchase>) purchaseRepository.findByValidFromBeforeAndValidToAfter(Calendar.getInstance().getTime(), Calendar.getInstance().getTime());
        return purchases.toArray(new Purchase[0]);
    }

    @GetMapping("/getValidQRCodes")
    @ResponseBody
    public Boolean getValidQRCodes(@RequestParam String code) {
        ArrayList<Purchase> purchases = (ArrayList<Purchase>) purchaseRepository.findByQrCode(code);
        return purchases.size() == 1;
    }
}