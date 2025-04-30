package PoS.example.PoS.repo;



import PoS.example.PoS.entity.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepo extends MongoRepository<Product, String> {
}
