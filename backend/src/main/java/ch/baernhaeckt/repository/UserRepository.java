package ch.baernhaeckt.repository;

import ch.baernhaeckt.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "user", path = "user")
public interface UserRepository extends CrudRepository<User, String> {
    List<User> findByEmailIgnoreCase(String emails);
}
