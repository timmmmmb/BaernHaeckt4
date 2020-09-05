package ch.baernhaeckt.repository;

import ch.baernhaeckt.model.Purchase;
import ch.baernhaeckt.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Date;
import java.util.List;

@RepositoryRestResource(collectionResourceRel = "purchase", path = "purchase")
public interface PurchaseRepository extends CrudRepository<Purchase, String> {
    List<Purchase> findByUser(User user);
    List<Purchase> findByValidFromBeforeAndValidToAfter(Date between, Date between2);
    List<Purchase> findByQrCode(String qr_code);
}
