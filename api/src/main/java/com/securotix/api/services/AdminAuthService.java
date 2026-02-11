package com.securotix.api.services;

import java.time.Instant;
import java.util.Date;

import java.util.UUID;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.securotix.api.dto.AdminLoginResponse;
import com.securotix.api.entities.AdminUser;
import com.securotix.api.repositories.AdminUserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminAuthService {

    private final AdminUserRepository repo;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final MailService mailService;

    public AdminLoginResponse login(String email, String password) {

        AdminUser admin = repo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));

        if (!admin.isEnabled()) {
            throw new RuntimeException("Account not activated yet");
        }

        if (!passwordEncoder.matches(password, admin.getPasswordHash())) {
            throw new RuntimeException("Invalid credentials");
        }

        if (admin.isFirstLogin()) {
            String token = jwtService.generateToken(admin.getEmail());
            return new AdminLoginResponse(token, true);
        }

        String token = jwtService.generateToken(admin.getEmail());
        return new AdminLoginResponse(token, false);
    }

    public void completeSetup(String currentEmail, String newEmail, String newPassword) {

        AdminUser admin = repo.findByEmail(currentEmail)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!admin.isFirstLogin()) {
            throw new RuntimeException("Setup already completed");
        }
        if (newPassword == null || newPassword.length() < 8) {
            throw new RuntimeException("Password must be at least 8 characters");
        }

        admin.setEmail(newEmail);
        admin.setPasswordHash(passwordEncoder.encode(newPassword));
        admin.setFirstLogin(false);

        repo.save(admin);
    }

    public void forgotPassword(String email) {

        repo.findByEmail(email).ifPresent(admin -> {

            String token = UUID.randomUUID().toString();

            admin.setResetToken(token);
            admin.setResetTokenExpiry(
                    Instant.now().plusSeconds(15 * 60));

            repo.save(admin);

            String resetLink = "https://securotix.vercel.app/admin/reset-password?token=" + token;

            mailService.sendPasswordResetEmail(admin.getEmail(), resetLink);
        });

    }

    public void resetPassword(String token, String newPassword) {

        AdminUser admin = repo.findByResetToken(token)
                .orElseThrow(() -> new RuntimeException("Invalid token"));

        if (admin.getResetTokenExpiry() == null ||
                admin.getResetTokenExpiry().isBefore(Instant.now())) {
            throw new RuntimeException("Token expired");
        }

        if (newPassword == null || newPassword.length() < 8) {
            throw new RuntimeException("Password must be at least 8 characters");
        }

        admin.setPasswordHash(passwordEncoder.encode(newPassword));
        admin.setResetToken(null);
        admin.setResetTokenExpiry(null);

        repo.save(admin);
    }

}
