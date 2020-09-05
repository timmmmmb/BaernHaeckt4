package ch.baernhaeckt.service.impl;

import ch.baernhaeckt.model.Offer;
import ch.baernhaeckt.model.Region;
import ch.baernhaeckt.repository.RegionRepository;
import ch.baernhaeckt.service.RegionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegionServiceImpl implements RegionService {
    @Autowired
    RegionRepository regionRepository;

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
