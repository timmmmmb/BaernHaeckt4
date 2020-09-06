package ch.baernhaeckt.repository;

import ch.baernhaeckt.model.Region;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "region", path = "region")
public interface RegionRepository extends CrudRepository<Region, String> {
    List<Region> findByNameIgnoreCase(String name);
}
