package PoS.example.PoS.controllers;



import PoS.example.PoS.dtos.*;
import PoS.example.PoS.entity.*;
import PoS.example.PoS.service.*;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@Data
public class GraphQLController {


    private final AdminService adminService;
    private final UserService userService;
    private final ProductService productService;
    private final CategoryService categoryService;




    @QueryMapping(name = "ping")
    public String ping() {
        return "pong";
    }

    // Mutation to create a new Admin
    @MutationMapping(name = "createAdmin")
    public Admin createAdmin(@Argument AdminDTO adminDTO) {
        return adminService.createAdmin(adminDTO);  // Call the service to create the admin
    }

    @MutationMapping(name = "addProduct")
    public Product addProduct(@Argument ProductDTO products) {
        return productService.addProduct(products);

    }

    @MutationMapping(name = "createUser")
    public User createUser(@Argument UserDTO user) {
        return userService.createUser(user);
    }

    @MutationMapping(name="createCategory")
    public Category createCategory(@Argument CategoryDTO category) {
        return categoryService.createCategory(category);
    }
    @MutationMapping(name="updateAdmin")
    public Admin updateAdmin(@Argument String adminId, @Argument AdminDTO adminDTO) {
        return adminService.updateAdmin(adminId, adminDTO);
    }

    @QueryMapping(name = "getAllUsers")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @QueryMapping(name = "getAllAdmin")
    public List<Admin> getAllAdmin() {
        return adminService.getAllAdmin();
    }
}
