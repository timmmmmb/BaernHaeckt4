package ch.baernhaeckt.service.impl;

import ch.baernhaeckt.model.Offer;
import ch.baernhaeckt.repository.OfferRepository;
import ch.baernhaeckt.service.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * this is the service that is responsible for the offers
 */
@Service
public class OfferServiceImpl implements OfferService {
    @Autowired
    OfferRepository offerRepository;

    /**
     * This function creates a new offer
     * @param name this is the name of the reduction
     * @param description this is a short description
     * @param image this is a potential image
     * @param category this is the category of this offer
     * @return a new persisted offer
     */
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
