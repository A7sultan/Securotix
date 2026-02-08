package com.securotix.api.services;

import com.securotix.api.dto.CreateCommentRequest;
import com.securotix.api.entities.Blog;
import com.securotix.api.entities.Comment;
import com.securotix.api.repositories.BlogRepository;
import com.securotix.api.repositories.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepo;
    private final BlogRepository blogRepo;

    public void addComment(Long blogId, CreateCommentRequest req) {
        Blog blog = blogRepo.findById(blogId)
                .orElseThrow(() -> new RuntimeException("Blog not found"));

        Comment comment = Comment.builder()
                .authorName(req.getAuthorName())
                .authorEmail(req.getAuthorEmail())
                .content(req.getContent())
                .blog(blog)
                .approved(false)
                .build();

        commentRepo.save(comment);
    }

    public List<Comment> approvedComments(Long blogId) {
        return commentRepo.findByBlogIdAndApprovedTrue(blogId);
    }

    public List<Comment> pendingComments() {
        return commentRepo.findByApprovedFalseOrderByCreatedAtAsc();
    }

    public void moderate(Long id, boolean approve) {
        Comment c = commentRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Comment not found"));

        c.setApproved(approve);
        commentRepo.save(c);
    }
}
