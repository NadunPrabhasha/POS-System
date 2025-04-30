package PoS.example.PoS.repo;

import PoS.example.PoS.entity.Admin;
import org.springframework.data.mongodb.repository.MongoRepository;



public interface AdminRepo extends MongoRepository<Admin, String> {
    // No custom methods needed for creation
}
