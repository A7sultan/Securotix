package com.securotix.api.dto;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AdminCommentResponse {
    private Long id;
    private String authorName;
    private String authorEmail;
    private String content;
    private Long blogId;
    private String blogTitle;
    private boolean approved;
    private LocalDateTime createdAt;
}
