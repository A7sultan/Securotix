import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchBlog, fetchComments } from "@/pages/blog/blogService";
import CommentForm from "@/pages/blog/components/CommentForm";
import CommentList from "@//pages/blog/components/CommentList";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/Footer";

export default function BlogDetailPage() {
    const { slug } = useParams();
    const [blog, setBlog] = useState<any>();
    const [comments, setComments] = useState<any[]>([]);

    useEffect(() => {
        fetchBlog(slug!).then(setBlog);
    }, [slug]);

    useEffect(() => {
        if (blog)
            fetchComments(blog.id).then(setComments);
    }, [blog]);

    if (!blog) return null;

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="container mx-auto pt-36 pb-20 max-w-4xl">

                <h1 className="text-5xl font-bold mb-6">{blog.title}</h1>

                <div className="mb-12">
                    <p className="text-lg leading-8 text-muted-foreground whitespace-pre-line">
                        {blog.content}
                    </p>
                </div>


                <CommentForm blogId={blog.id} />
                <CommentList comments={comments} />
            </main>

            <Footer />
        </div>
    );
}
