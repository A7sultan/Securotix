package com.securotix.api.controllers.admin;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.securotix.api.dto.AdminLoginRequest;
import com.securotix.api.dto.AdminLoginResponse;
import com.securotix.api.dto.CompleteSetupRequest;
import com.securotix.api.dto.ForgotPasswordRequest;
import com.securotix.api.dto.ResetPasswordRequest;
import com.securotix.api.services.AdminAuthService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminAuthController {

        private final AdminAuthService authService;

        @PostMapping("/login")
        public ResponseEntity<AdminLoginResponse> login(
                        @RequestBody AdminLoginRequest request) {
                return ResponseEntity.ok(
                                authService.login(
                                                request.email(),
                                                request.password()));
        }

        @PostMapping("/complete-setup")
        public ResponseEntity<?> completeSetup(
                        @RequestBody CompleteSetupRequest request,
                        Authentication authentication) {

                String currentEmail = authentication.getName();

                authService.completeSetup(
                                currentEmail,
                                request.getNewEmail(),
                                request.getNewPassword());

                return ResponseEntity.ok("Setup completed. Please login again.");
        }

        @PostMapping("/forgot-password")
        public ResponseEntity<?> forgotPassword(
                        @RequestBody ForgotPasswordRequest request) {
                authService.forgotPassword(request.getEmail());
                return ResponseEntity.ok("If account exists, reset link sent.");
        }

        @PostMapping("/reset-password")
        public ResponseEntity<?> resetPassword(
                        @RequestBody ResetPasswordRequest request) {
                authService.resetPassword(
                                request.getToken(),
                                request.getNewPassword());

                return ResponseEntity.ok("Password reset successful.");
        }

        

}
