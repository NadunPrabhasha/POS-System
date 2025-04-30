package PoS.example.PoS.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@NoArgsConstructor
@Data
@Document(collection = "users") // MongoDB collection name
public class User {
    @Id
    private String id;

    private String userName;
    private String password;




}
