package ch.baernhaeckt.service.impl;

import ch.baernhaeckt.model.Offer;
import ch.baernhaeckt.model.Region;
import ch.baernhaeckt.repository.RegionRepository;
import ch.baernhaeckt.service.RegionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * this is the region service it has all of the functions that relate to the regions
 */
@Service
public class RegionServiceImpl implements RegionService {
    @Autowired
    RegionRepository regionRepository;

    /**
     * this function creates a new region
     * @param name the name of the region
     * @param description the description of the region
     * @param image the image that gets displayed (optional)
     * @param offerList this is a list with all the offers related to the region
     * @return a new presisted region
     */
    @Override
    public Region createRegion(String name, String description, String image, List<Offer> offerList){
        Region region = new Region();
        region.setName(name);
        region.setDescription(description);
        region.setImage(image);
        region.setOffers(offerList);
        return regionRepository.save(region);
    }
}
