package ch.baernhaeckt.repository;

import ch.baernhaeckt.model.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "product", path = "product")
interface ProductRepository extends CrudRepository<Product, String> {
}
