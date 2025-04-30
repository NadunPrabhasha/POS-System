package PoS.example.PoS.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;

@Setter
@Document(collection = "Admin")  // This indicates the MongoDB collection
@Data
public class Admin {

    @Id
    private String adminId;  // Admin ID
    private String adminName;  // Admin's Name
    private String dateOfBirth;  // Admin's Date of Birth


}