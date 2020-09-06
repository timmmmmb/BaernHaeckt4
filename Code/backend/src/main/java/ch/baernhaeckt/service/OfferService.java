package ch.baernhaeckt.service;

import ch.baernhaeckt.model.Offer;

public interface OfferService {
    Offer createOffer(String name, String description, String image, String category);
}
