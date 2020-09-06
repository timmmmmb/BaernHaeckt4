package ch.baernhaeckt.repository;

import ch.baernhaeckt.model.Offer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "offer", path = "offer")
public interface OfferRepository  extends CrudRepository<Offer, String> {
}
