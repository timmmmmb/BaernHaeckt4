package ch.baernhaeckt.service;

import ch.baernhaeckt.model.Offer;
import ch.baernhaeckt.model.Region;

import java.util.List;

public interface RegionService {
    Region createRegion(String name, String description, String image, List<Offer> offerList);
}
