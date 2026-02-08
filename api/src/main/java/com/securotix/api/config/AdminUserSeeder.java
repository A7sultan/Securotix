package com.securotix.api.config;

import com.securotix.api.entities.AdminUser;
import com.securotix.api.repositories.AdminUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@RequiredArgsConstructor
public class AdminUserSeeder implements CommandLineRunner {

    private final AdminUserRepository repo;
    private final PasswordEncoder encoder;

    @Override
    public void run(String... args) {
        if (repo.findByEmail("admin@securotix.com").isPresent()) {
            return;
        }

        AdminUser admin = new AdminUser();
        admin.setEmail("admin@securotix.com");
        admin.setPasswordHash(encoder.encode("ChangeThisPassword123"));

        repo.save(admin);

        System.out.println("✅ Admin user seeded");
    }
}
