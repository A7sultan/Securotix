package com.securotix.api.services;

import com.securotix.api.dto.CreateBlogRequest;
import com.securotix.api.entities.Blog;
import com.securotix.api.repositories.BlogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BlogService {

    private final BlogRepository repo;

    /* CREATE */
    public Blog create(CreateBlogRequest req) {
        Blog blog = Blog.builder()
                .title(req.getTitle())
                .slug(req.getSlug())
                .content(req.getContent())
                .published(false)
                .build();

        return repo.save(blog);
    }

    public List<Blog> adminList() {
        return repo.findAllByOrderByCreatedAtDesc();
    }

    public Blog update(Long id, CreateBlogRequest req) {
        Blog blog = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Blog not found"));

        blog.setTitle(req.getTitle());
        blog.setSlug(req.getSlug());
        blog.setContent(req.getContent());

        return repo.save(blog);
    }

    public void delete(Long id) {
        Blog blog = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Blog not found"));

        repo.delete(blog);
    }

    public void publish(Long id, boolean publish) {
        Blog blog = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Blog not found"));

        blog.setPublished(publish);
        repo.save(blog);
    }

    public List<Blog> publicBlogs() {
        return repo.findAllByPublishedTrueOrderByCreatedAtDesc();
    }

    public Blog publicBySlug(String slug) {
        return repo.findBySlugAndPublishedTrue(slug)
                .orElseThrow(() -> new RuntimeException("Blog not found"));
    }
    public Blog get(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Blog not found"));
    }
}
