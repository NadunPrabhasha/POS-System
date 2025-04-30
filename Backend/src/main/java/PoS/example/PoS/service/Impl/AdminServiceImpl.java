package PoS.example.PoS.service.Impl;

import PoS.example.PoS.dtos.AdminDTO;
import PoS.example.PoS.entity.Admin;
import PoS.example.PoS.entity.User;
import PoS.example.PoS.repo.AdminRepo;
import PoS.example.PoS.service.AdminService;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminRepo adminRepository;  // Inject the repository

    @Override
    public Admin createAdmin(@NotNull AdminDTO adminDTO) {
        Admin admin = new Admin();
        admin.setAdminName(adminDTO.getAdminName());
        admin.setDateOfBirth(adminDTO.getDateOfBirth());
        return adminRepository.save(admin);  // Save the admin to the database
    }

    @Override
    public Admin updateAdmin(@NotNull String adminId, @NotNull AdminDTO adminDTO) {
        Optional<Admin> existingAdmin = adminRepository.findById(adminId);
        if (existingAdmin.isPresent()) {
            Admin admin = existingAdmin.get();
            admin.setAdminName(adminDTO.getAdminName());
            admin.setDateOfBirth(adminDTO.getDateOfBirth());
            return adminRepository.save(admin);  // Save the updated admin
        } else {
            throw new RuntimeException("Admin not found with ID: " + adminId);
        }
    }

    @Override
    public List<Admin> getAllAdmin() {
        return adminRepository.findAll();
    }
}
