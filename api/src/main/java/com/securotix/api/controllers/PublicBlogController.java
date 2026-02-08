package com.securotix.api.controllers;

import com.securotix.api.dto.BlogResponse;
import com.securotix.api.services.BlogService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/blogs")
@RequiredArgsConstructor
public class PublicBlogController {

    private final BlogService service;

    @GetMapping
    public List<BlogResponse> list() {
        return service.publicBlogs().stream()
                .map(b -> BlogResponse.builder()
                        .id(b.getId())
                        .title(b.getTitle())
                        .slug(b.getSlug())
                        .content(b.getContent())
                        .createdAt(b.getCreatedAt())
                        .build())
                .toList();
    }

    @GetMapping("/{slug}")
    public BlogResponse get(@PathVariable String slug) {
        var b = service.publicBySlug(slug);
        return BlogResponse.builder()
                .id(b.getId())
                .title(b.getTitle())
                .slug(b.getSlug())
                .content(b.getContent())
                .createdAt(b.getCreatedAt())
                .build();
    }
}
