package com.securotix.api.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class CreateBlogRequest {

    @NotBlank
    private String title;

    @NotBlank
    private String slug;

    @NotBlank
    private String content;
}
