package ch.baernhaeckt.controller;

import ch.baernhaeckt.model.Offer;
import ch.baernhaeckt.repository.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/offers")
@CrossOrigin(origins = "*")
public class OfferController {
    @Autowired
    private OfferRepository offerRepository;

    @GetMapping
    public @ResponseBody
    Offer[] list() {
        ArrayList<Offer> offers = (ArrayList<Offer>) offerRepository.findAll();
        return offers.toArray(new Offer[0]);
    }

}
