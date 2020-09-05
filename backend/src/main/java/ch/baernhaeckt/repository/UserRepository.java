package ch.baernhaeckt.repository;

import ch.baernhaeckt.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;

@RepositoryRestResource(collectionResourceRel = "user", path = "user")
public interface UserRepository extends CrudRepository<User, String> {
    Optional<User> findByEmail(String email);
}
