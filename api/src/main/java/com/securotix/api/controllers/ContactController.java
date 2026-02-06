package com.securotix.api.controllers;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.securotix.api.dto.ContactRequest;
import com.securotix.api.services.MailService;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {

    private final MailService mailService;

    @PostMapping
    public ResponseEntity<Void> sendMessage(
            @Valid @RequestBody ContactRequest request
    ) {

        mailService.sendContactMail(request);

        mailService.sendAutoReply(
                request.getEmail(),
                "Thanks for contacting Securotix",
                """
                Hi %s,

                Thank you for reaching out to Securotix.
                We’ve received your message and will get back to you shortly.

                — Securotix Team
                """.formatted(request.getName())
        );

        return ResponseEntity.ok().build();
    }
}
