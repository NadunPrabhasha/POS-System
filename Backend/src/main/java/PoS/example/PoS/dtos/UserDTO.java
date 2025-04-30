package PoS.example.PoS.dtos;
import lombok.*;
import org.springframework.data.annotation.Id;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserDTO {


    private String userName;
    private String password;
}

