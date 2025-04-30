package PoS.example.PoS.service;
import PoS.example.PoS.dtos.CategoryDTO;
import PoS.example.PoS.entity.Category;
import PoS.example.PoS.dtos.UserDTO;

public interface CategoryService {
    Category createCategory(CategoryDTO categoryDTO);
}
