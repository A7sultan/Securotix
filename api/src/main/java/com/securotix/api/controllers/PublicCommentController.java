package com.securotix.api.controllers;

import com.securotix.api.dto.CreateCommentRequest;
import com.securotix.api.dto.MessageResponse;
import com.securotix.api.dto.CommentResponse;
import com.securotix.api.services.CommentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/blogs/{blogId}/comments")
@RequiredArgsConstructor
public class PublicCommentController {

    private final CommentService service;

    @PostMapping
public MessageResponse add(@PathVariable Long blogId,
                           @Valid @RequestBody CreateCommentRequest req) {

    service.addComment(blogId, req);

    return new MessageResponse("Comment submitted successfully. Awaiting approval.");
}

    @GetMapping
    public List<CommentResponse> list(@PathVariable Long blogId) {
        return service.approvedComments(blogId).stream()
                .map(c -> CommentResponse.builder()
                        .id(c.getId())
                        .authorName(c.getAuthorName())
                        .authorEmail(c.getAuthorEmail())
                        .content(c.getContent())
                        .createdAt(c.getCreatedAt())
                        .build())
                .toList();
    }
}
