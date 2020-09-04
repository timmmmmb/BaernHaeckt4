package ch.baernhaeckt.repository;

import ch.baernhaeckt.model.Purchase;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "purchase", path = "purchase")
interface PurchaseRepository extends CrudRepository<Purchase, String> {
}
