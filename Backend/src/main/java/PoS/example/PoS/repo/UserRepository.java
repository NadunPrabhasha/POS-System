package PoS.example.PoS.repo;



import PoS.example.PoS.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
}

