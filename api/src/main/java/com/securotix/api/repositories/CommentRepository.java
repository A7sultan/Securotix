package com.securotix.api.repositories;

import com.securotix.api.entities.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findByBlogIdAndApprovedTrue(Long blogId);

    List<Comment> findByApprovedFalseOrderByCreatedAtAsc();
}
