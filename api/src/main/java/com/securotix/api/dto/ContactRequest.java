package com.securotix.api.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ContactRequest {

    @NotBlank
    private String name;

    @Email
    @NotBlank
    private String email;

    private String company;

    @NotBlank
    private String message;
}
