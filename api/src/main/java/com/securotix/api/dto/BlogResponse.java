package com.securotix.api.dto;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class BlogResponse {

    private Long id;
    private String title;
    private String slug;
    private String content;
    private LocalDateTime createdAt;
}
