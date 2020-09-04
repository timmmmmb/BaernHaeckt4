package ch.baernhaeckt.repository;

import ch.baernhaeckt.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "user", path = "user")
interface UserRepository extends CrudRepository<User, String> {
}
