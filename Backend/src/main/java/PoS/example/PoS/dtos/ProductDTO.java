package PoS.example.PoS.dtos;
import lombok.*;
import lombok.Data;




@NoArgsConstructor
@AllArgsConstructor
@Data

public class ProductDTO {

    private String productName;
    private Double productPrice;
    private Double costPrice;
    private String itemCategory;
    private String description;




}
