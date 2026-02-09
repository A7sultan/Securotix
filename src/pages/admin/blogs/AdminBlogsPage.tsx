import { useEffect, useState } from "react";
import { adminBlogs } from "@/pages/admin/services/adminBlogService";
import { Link } from "react-router-dom";
import { deleteBlog } from "@/pages/admin/services/adminBlogService";
import { toast } from "sonner";
import { publishBlog } from "@/pages/admin/services/adminBlogService";

export default function AdminBlogsPage() {

  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    adminBlogs().then(setBlogs);
  }, [])

  return (
    <div className="p-10">

      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold">
          Blog Management
        </h1>

        <Link
          to="/admin/blogs/create"
          className="bg-cyber-red hover:bg-red-600 transition px-6 py-3 rounded-xl text-white font-semibold shadow-lg"
        >
          Create Blog
        </Link>
      </div>

      {/* List */}
      <div className="space-y-8">

        {blogs.map(b => (
          <div
            key={b.id}
            className="glass p-8 rounded-2xl hover:border-cyber-red transition-all border border-red-500/20"
          >

            {/* Title */}
            <h2 className="text-2xl font-bold mb-3 text-white">
              {b.title}
            </h2>

            {/* Fancy line */}
            <div className="fancy-line w-[140px] mb-5" />

            {/* Content preview */}
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
              {b.content}
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center mt-6 text-sm text-muted-foreground">

              <span>
                {new Date(b.createdAt).toLocaleDateString()}
              </span>

              <div className="flex gap-3">

                <button
                  onClick={async () => {
                    await publishBlog(b.id, !b.published);
                    toast.success(b.published ? "Blog unpublished" : "Blog published");

                    setBlogs(prev =>
                      prev.map(x =>
                        x.id === b.id ? { ...x, published: !x.published } : x
                      )
                    );
                  }}
                  className={`px-4 py-1 rounded-lg text-white transition ${b.published
                      ? "bg-yellow-600 hover:bg-yellow-700"
                      : "bg-green-600 hover:bg-green-700"
                    }`}
                >
                  {b.published ? "Unpublish" : "Publish"}
                </button>

                <Link
                  to={`/admin/blogs/edit/${b.id}`}
                  className="px-4 py-1 rounded-lg border border-cyber-red text-cyber-red hover:bg-cyber-red hover:text-white transition"
                >
                  Edit
                </Link>

                <button
                  onClick={async () => {
                    if (!confirm("Delete this blog?")) return;
                    await deleteBlog(b.id);
                    setBlogs(blogs.filter(x => x.id !== b.id));
                    toast.success("Blog deleted");
                  }}
                  className="px-4 py-1 rounded-lg bg-red-600 hover:bg-red-700 text-white transition"
                >
                  Delete
                </button>




              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}
