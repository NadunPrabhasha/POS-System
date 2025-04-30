package PoS.example.PoS.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Service;

@Service
@Document(collection = "Category")
@Data
public class Category {
    @Id
    private String categoryId;
    private String categoryName;

}
