package com.securotix.api.controllers.admin;

import com.securotix.api.dto.CreateBlogRequest;
import com.securotix.api.services.BlogService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/blogs")
@RequiredArgsConstructor
public class AdminBlogController {

    private final BlogService service;

    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody CreateBlogRequest req) {
        return ResponseEntity.ok(service.create(req));
    }

    @PatchMapping("/{id}/publish")
    public ResponseEntity<?> publish(
            @PathVariable Long id,
            @RequestParam boolean value
    ) {
        service.publish(id, value);
        return ResponseEntity.ok().build();
    }
}
