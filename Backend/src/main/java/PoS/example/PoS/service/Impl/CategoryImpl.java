package PoS.example.PoS.service.Impl;

import PoS.example.PoS.service.CategoryService;
import PoS.example.PoS.dtos.*;
import PoS.example.PoS.entity.*;
import PoS.example.PoS.repo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class CategoryImpl implements CategoryService {
    @Autowired
    private CategoryRepo categoryRepo;

    @Override
    public Category createCategory(CategoryDTO categoryDTO){

        Category category = new Category();

        category.setCategoryName(categoryDTO.getCategoryName());
        return categoryRepo.save(category);
    }
}
