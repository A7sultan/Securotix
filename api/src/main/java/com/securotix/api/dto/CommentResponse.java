package com.securotix.api.dto;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class CommentResponse {

    private Long id;
    private String authorName;
    private String authorEmail;
    private String content;
    private LocalDateTime createdAt;
}
