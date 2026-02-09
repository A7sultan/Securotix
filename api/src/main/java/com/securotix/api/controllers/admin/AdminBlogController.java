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

    /* CREATE */
    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody CreateBlogRequest req) {
        return ResponseEntity.ok(service.create(req));
    }

    /* ADMIN LIST (all blogs including unpublished) */
    @GetMapping
    public ResponseEntity<?> all() {
        return ResponseEntity.ok(service.adminList());
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> get(@PathVariable Long id) {
        return ResponseEntity.ok(service.get(id));
    }

    /* UPDATE */
    @PutMapping("/{id}")
    public ResponseEntity<?> update(
            @PathVariable Long id,
            @Valid @RequestBody CreateBlogRequest req
    ) {
        return ResponseEntity.ok(service.update(id, req));
    }

    /* DELETE */
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.ok().build();
    }

    /* PUBLISH / UNPUBLISH */
    @PatchMapping("/{id}/publish")
    public ResponseEntity<?> publish(
            @PathVariable Long id,
            @RequestParam boolean value
    ) {
        service.publish(id, value);
        return ResponseEntity.ok().build();
    }
}
