package com.securotix.api.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.securotix.api.entities.Blog;

public interface BlogRepository extends JpaRepository<Blog, Long> {
    Optional<Blog> findBySlugAndPublishedTrue(String slug);
    List<Blog> findAllByPublishedTrueOrderByCreatedAtDesc();
}
