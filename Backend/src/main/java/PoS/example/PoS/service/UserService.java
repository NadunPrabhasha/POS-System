package PoS.example.PoS.service;



import PoS.example.PoS.dtos.UserDTO;
import PoS.example.PoS.entity.User;

import java.util.List;

public interface UserService {
    User createUser(UserDTO userDTO);



    List<User> getAllUsers();
}

