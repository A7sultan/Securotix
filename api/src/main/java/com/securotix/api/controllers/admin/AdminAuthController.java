package com.securotix.api.controllers.admin;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.securotix.api.dto.AdminLoginRequest;
import com.securotix.api.dto.AdminLoginResponse;
import com.securotix.api.services.AdminAuthService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminAuthController {

    private final AdminAuthService authService;

    @PostMapping("/login")
    public ResponseEntity<AdminLoginResponse> login(
        @RequestBody AdminLoginRequest request
    ) {
        String token = authService.login(
            request.email(),
            request.password()
        );
        return ResponseEntity.ok(new AdminLoginResponse(token));
    }
}

