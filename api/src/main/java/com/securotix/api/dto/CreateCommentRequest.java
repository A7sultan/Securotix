package com.securotix.api.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class CreateCommentRequest {
    @NotBlank
    private String authorName;

    @Email
    private String authorEmail;

    @NotBlank
    private String content;
}
