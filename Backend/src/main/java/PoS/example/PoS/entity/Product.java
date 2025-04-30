package PoS.example.PoS.entity;



import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Setter
@Document(collection = "Product")  // This indicates the MongoDB collection
@Data

public class Product {
    @Id
    private String id;
    private String productName;
    private Double productPrice;
    private Double costPrice;
    private String itemCategory;
    private String description;

}
