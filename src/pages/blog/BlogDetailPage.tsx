import { useParams, useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();


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
                {/* Back Button */}
                <button
                    onClick={() => navigate("/blog")}
                    className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-xl border 
                   border-border bg-background hover:bg-muted transition-colors"
                >
                    ← Back
                </button>
                <h1 className="text-5xl font-bold mb-6">{blog.title}</h1>
                <div className="fancy-line w-[180px] mb-10" />

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
