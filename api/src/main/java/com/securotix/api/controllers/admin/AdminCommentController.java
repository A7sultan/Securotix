package com.securotix.api.controllers.admin;

import com.securotix.api.dto.AdminCommentResponse;
import com.securotix.api.services.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/comments")
@RequiredArgsConstructor
public class AdminCommentController {

    private final CommentService service;

    @GetMapping("/approved")
    public ResponseEntity<?> approved() {
        return ResponseEntity.ok(
                service.approvedComments().stream()
                        .map(c -> AdminCommentResponse.builder()
                                .id(c.getId())
                                .authorName(c.getAuthorName())
                                .authorEmail(c.getAuthorEmail())
                                .content(c.getContent())
                                .blogId(c.getBlog().getId())
                                .blogTitle(c.getBlog().getTitle())
                                .approved(c.isApproved())
                                .createdAt(c.getCreatedAt())
                                .build())
                        .toList());
    }

    @GetMapping("/pending")
    public ResponseEntity<?> pending() {
        return ResponseEntity.ok(
                service.pendingComments().stream()
                        .map(c -> AdminCommentResponse.builder()
                                .id(c.getId())
                                .authorName(c.getAuthorName())
                                .authorEmail(c.getAuthorEmail())
                                .content(c.getContent())
                                .blogId(c.getBlog().getId())
                                .blogTitle(c.getBlog().getTitle())
                                .approved(c.isApproved())
                                .createdAt(c.getCreatedAt())
                                .build())
                        .toList());

    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> moderate(
            @PathVariable Long id,
            @RequestParam boolean approve) {
        service.moderate(id, approve);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.ok().build();
    }

}
