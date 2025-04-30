package PoS.example.PoS.service.Impl;



import PoS.example.PoS.dtos.UserDTO;
import PoS.example.PoS.entity.User;
import PoS.example.PoS.repo.UserRepository;
import PoS.example.PoS.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private  UserRepository userRepository;

    @Override
    public User createUser(UserDTO userDTO) {
        User user = new User();

        user.setUserName(userDTO.getUserName());
        user.setPassword(userDTO.getPassword());
        return userRepository.save(user);
    }


    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}

