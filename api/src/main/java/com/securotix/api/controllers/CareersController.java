package com.securotix.api.controllers;

import com.securotix.api.dto.CareerRequest;
import com.securotix.api.services.MailService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/careers")
@RequiredArgsConstructor
public class CareersController {

    private final MailService mailService;

    @PostMapping
    public ResponseEntity<Void> apply(
            @Valid @RequestBody CareerRequest request
    ) {
        mailService.sendCareerApplication(request);
        return ResponseEntity.ok().build();
    }
}
