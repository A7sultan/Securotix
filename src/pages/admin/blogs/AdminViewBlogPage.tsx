import { useEffect, useState } from "react";
import { getAdminBlog } from "@/pages/admin/services/adminBlogService";
import { useParams } from "react-router-dom";

export default function AdminViewBlogPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState<any>();

  useEffect(() => {
    getAdminBlog(Number(id)).then(setBlog);
  }, [id]);

  if (!blog) return null;

  return (
    <div className="max-w-6xl mx-auto">

      <h1 className="text-5xl font-bold mb-3">
        {blog.title}
      </h1>

      <div className="fancy-line w-[200px] mb-10" />

      <div className="text-muted-foreground text-sm mb-10">
        {new Date(blog.createdAt).toLocaleDateString()}
      </div>

      <div className="prose prose-invert max-w-none text-lg leading-relaxed whitespace-pre-line">
        {blog.content}
      </div>

    </div>
  );
}
