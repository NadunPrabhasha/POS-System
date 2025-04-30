package PoS.example.PoS.service.Impl;

import PoS.example.PoS.dtos.*;
import PoS.example.PoS.entity.*;
import PoS.example.PoS.repo.ProductRepo;
import PoS.example.PoS.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class ProductImpl implements ProductService {

    @Autowired
    private  ProductRepo productRepo;

    @Override
    public Product addProduct(ProductDTO productDTO){
        Product product = new Product();

        product.setProductName(productDTO.getProductName());
        product.setProductPrice(productDTO.getProductPrice());
        product.setCostPrice(productDTO.getCostPrice());
        product.setItemCategory(productDTO.getItemCategory());
        product.setDescription(productDTO.getDescription());
        return productRepo.save(product);
    }
}
