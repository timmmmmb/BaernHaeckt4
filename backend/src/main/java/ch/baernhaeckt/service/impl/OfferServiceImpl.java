package ch.baernhaeckt.service.impl;

import ch.baernhaeckt.model.Offer;
import ch.baernhaeckt.repository.OfferRepository;
import ch.baernhaeckt.service.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OfferServiceImpl implements OfferService {
    @Autowired
    OfferRepository offerRepository;

    @Override
    public Offer createOffer(String name, String description, String image, String category){
        Offer offer = new Offer();
        offer.setDescription(description);
        offer.setName(name);
        offer.setCategory(category);
        offer.setImage(image);
        return offerRepository.save(offer);
    }
}
